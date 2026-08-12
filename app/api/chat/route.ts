import { google } from "@ai-sdk/google";
import { convertToModelMessages, isStepCount, streamText, tool, type UIMessage } from "ai";
import { z } from "zod";
import { auth } from "@/auth";
import { searchProducts, getProductById } from "@/lib/queries/products";
import { getProductRatingSummary } from "@/lib/queries/reviews";
import { getOrdersForUser, getOrderByNumberForUser } from "@/lib/queries/orders";
import { SHIPPING_FEE, ORDER_STATUS_LABEL } from "@/lib/constants";

const SYSTEM_PROMPT = `Bạn là trợ lý CSKH của Fashion Shop — cửa hàng thời trang tối giản, hiện đại.

Quy tắc:
- Luôn trả lời bằng tiếng Việt, ngắn gọn, lịch sự, đúng tinh thần tối giản của thương hiệu (không dùng emoji, không văn phong quảng cáo màu mè).
- Chỉ trả lời các câu hỏi liên quan đến Fashion Shop: sản phẩm, đơn hàng, chính sách vận chuyển/thanh toán, cách sử dụng website. Từ chối lịch sự các câu hỏi ngoài chủ đề này.
- Phí vận chuyển cố định là ${SHIPPING_FEE.toLocaleString("vi-VN")}đ cho mọi đơn hàng.
- 4 phương thức thanh toán: Thanh toán khi nhận hàng (COD), Chuyển khoản ngân hàng, Thẻ tín dụng/ghi nợ, Ví Fashion Shop.
- Ví Fashion Shop là số dư mô phỏng trong hệ thống (không phải tiền thật) — khách "nạp tiền" để dùng thử tính năng thanh toán bằng ví.
- Trạng thái đơn hàng chỉ có thể là một trong các giá trị sau: ${Object.values(ORDER_STATUS_LABEL).join(", ")}. Dùng đúng nhãn công cụ tra cứu trả về, không tự bịa thêm trạng thái khác.
- Dùng công cụ tra cứu sản phẩm/đơn hàng khi cần dữ liệu thật thay vì đoán.`;

export async function POST(req: Request) {
  const session = await auth();
  const { messages }: { messages: UIMessage[] } = await req.json();

  const tools = {
    searchProducts: tool({
      description:
        "Tìm sản phẩm theo tên hoặc danh mục, ví dụ 'áo khoác', 'sơ mi lụa'. Trả về tối đa 5 kết quả kèm giá và tình trạng tồn kho.",
      inputSchema: z.object({ query: z.string() }),
      execute: async ({ query }) => {
        const products = await searchProducts(query);
        return products.map((p) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          category: p.category,
          conHang: p.stock > 0,
        }));
      },
    }),
    getProductDetail: tool({
      description: "Lấy mô tả chi tiết và đánh giá của một sản phẩm theo mã sản phẩm (id) đã biết.",
      inputSchema: z.object({ productId: z.string() }),
      execute: async ({ productId }) => {
        const [product, rating] = await Promise.all([
          getProductById(productId),
          getProductRatingSummary(productId),
        ]);
        if (!product) return { found: false as const };
        return {
          found: true as const,
          name: product.name,
          price: product.price,
          description: product.description,
          conHang: product.stock > 0,
          danhGiaTrungBinh: rating.average,
          soLuongDanhGia: rating.count,
        };
      },
    }),
    ...(session?.user
      ? {
          getMyOrders: tool({
            description: "Lấy danh sách đơn hàng gần đây của khách hàng đang đăng nhập.",
            inputSchema: z.object({}),
            execute: async () => {
              const orders = await getOrdersForUser(session.user.id);
              return orders.map((o) => ({
                maDon: o.orderNumber,
                ngayDat: o.createdAt.toISOString(),
                trangThai: ORDER_STATUS_LABEL[o.status] ?? o.status,
                tongTien: o.total,
                sanPham: o.items.map((i) => `${i.name} x${i.quantity}`),
              }));
            },
          }),
          getOrderByNumber: tool({
            description: "Tra cứu một đơn hàng cụ thể theo mã đơn (ví dụ FS123456) của khách đang đăng nhập.",
            inputSchema: z.object({ orderNumber: z.string() }),
            execute: async ({ orderNumber }) => {
              const order = await getOrderByNumberForUser(orderNumber, session.user.id);
              if (!order) return { found: false as const };
              return {
                found: true as const,
                ngayDat: order.createdAt.toISOString(),
                trangThai: ORDER_STATUS_LABEL[order.status] ?? order.status,
                tongTien: order.total,
                sanPham: order.items.map((i) => `${i.name} x${i.quantity}`),
              };
            },
          }),
        }
      : {}),
  };

  const result = streamText({
    model: google("gemini-flash-latest"),
    system:
      SYSTEM_PROMPT +
      (session?.user
        ? ""
        : "\n\nNgười dùng hiện CHƯA đăng nhập. Nếu họ hỏi về đơn hàng của họ, hãy yêu cầu họ đăng nhập tại trang /login trước — không được bịa thông tin đơn hàng."),
    messages: await convertToModelMessages(messages),
    tools,
    stopWhen: isStepCount(5),
    maxOutputTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
