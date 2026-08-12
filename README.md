# Fashion Shop

Website thương mại điện tử bán quần áo, xây dựng bằng Next.js 16 + PostgreSQL. Đây là **đồ án môn học**, không phải sản phẩm thương mại thật — mọi giao dịch (thanh toán, ví) đều mô phỏng trong phạm vi ứng dụng, không kết nối cổng thanh toán bên ngoài.

## Mô tả đồ án

- **Mục tiêu:** xây dựng một website thương mại điện tử hoàn chỉnh, phong cách thiết kế tối giản/editorial (tham khảo các brand thời trang/outdoor cao cấp), có đầy đủ vòng đời một đơn hàng thật: xem sản phẩm → giỏ hàng → đăng nhập → đặt hàng → thanh toán → xem lại lịch sử — cùng một khu quản trị để vận hành cửa hàng.
- **Đối tượng dùng:**
  - **Khách mua hàng**: duyệt catalog, xem chi tiết sản phẩm, thêm giỏ hàng, đăng ký/đăng nhập, đặt hàng, nạp và thanh toán bằng ví nội bộ, đánh giá sản phẩm.
  - **Quản trị viên** (`role: ADMIN`): quản lý sản phẩm (CRUD + ảnh) và quản lý tài khoản người dùng (cấp quyền, sửa, xoá).
- **Phạm vi:** phần giao diện + toàn bộ backend (database, xác thực, đơn hàng, ví, đánh giá) đều đã triển khai thật, không phải mock. Riêng cổng thanh toán bên ngoài (ngân hàng/thẻ) chỉ hiển thị form thu thập thông tin tĩnh, không gửi đi đâu — đúng tinh thần một đồ án học thuật.

## Tính năng chính

| Nhóm | Mô tả |
|---|---|
| Trang chủ & Catalog | Trang chủ dạng editorial, danh sách sản phẩm có filter theo giới tính, trang chi tiết sản phẩm (ảnh, màu, mô tả, đánh giá) |
| Giỏ hàng & Thanh toán | Giỏ hàng phía client (Zustand + localStorage), checkout với 4 phương thức: COD / chuyển khoản / thẻ / **Ví Fashion Shop** |
| Tài khoản | Đăng ký/đăng nhập thật (Auth.js), xem hồ sơ, lịch sử ví |
| Ví (Wallet) | Nạp tiền mô phỏng, thanh toán đơn hàng bằng số dư ví, lịch sử giao dịch |
| Đánh giá & Feedback | Đánh giá theo sao + bình luận trên từng sản phẩm, testimonials chung ở trang chủ |
| **Quản trị — Sản phẩm** | CRUD sản phẩm tại `/admin/products`, upload nhiều ảnh/sản phẩm (từ máy hoặc dán URL), ảnh dự phòng tự động khi sản phẩm chưa có ảnh thật |
| **Quản trị — Tài khoản** | `/admin/users`: cấp/gỡ quyền admin, sửa hồ sơ, xoá tài khoản — có chặn tự khoá quyền của chính mình và chặn gỡ quyền admin cuối cùng |

## Công nghệ sử dụng

| Thành phần | Lựa chọn |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) + TypeScript + React 19 |
| Styling | Tailwind CSS v4 |
| Database & ORM | PostgreSQL (bản portable, không cần quyền admin) + Prisma 7 (driver adapter `@prisma/adapter-pg`) |
| Xác thực | Auth.js (`next-auth` v5, Credentials provider, session JWT) |
| Validate | Zod |
| Mật khẩu | bcryptjs |
| State giỏ hàng | Zustand + persist (localStorage) |
| Animation | Framer Motion (scroll-reveal cho mọi section) |
| Ảnh sản phẩm | Upload qua Vercel Blob (`@vercel/blob`), hoặc dán URL ngoài — có ảnh dự phòng dạng gradient khi sản phẩm chưa có ảnh thật |

## Hướng dẫn cài đặt & chạy

Yêu cầu: Node.js ≥ 20.19 (khuyến nghị dùng bản mới nhất).

```powershell
# 1. Cài dependencies
npm install

# 2. Khởi động PostgreSQL portable (bắt buộc trước mọi lệnh Prisma/dev)
npm run db:start

# 3. Khởi tạo database + generate Prisma Client
npx prisma migrate dev
npx prisma generate

# 4. Seed dữ liệu mẫu (16 sản phẩm, testimonials, tài khoản demo/admin)
npm run db:seed

# 5. Chạy dev server
npm run dev
```

Mở `http://localhost:3000`.

Tính năng upload ảnh sản phẩm cần thêm biến môi trường `BLOB_READ_WRITE_TOKEN` (xem [`.env.example`](.env.example)) — lấy từ tab **Storage** của project trên [vercel.com](https://vercel.com) sau khi tạo một Blob store (miễn phí). Nếu chưa cấu hình, admin vẫn dùng được cách "dán URL ảnh" bình thường, chỉ riêng nút tải file từ máy sẽ báo lỗi.

### Tài khoản demo có sẵn

| Vai trò | Email | Mật khẩu |
|---|---|---|
| Khách hàng | `demo@fashionshop.vn` | `Demo123456` |
| Quản trị viên | `admin@fashionshop.vn` | `Admin123456` |

### Các lệnh khác

```powershell
npm run build               # build production
npm run lint                 # lint
npm run db:studio           # xem/sửa dữ liệu bằng Prisma Studio
npm run db:stop              # dừng PostgreSQL
```

## Cấu trúc thư mục (rút gọn)

```
/app          Trang & route (App Router) — bao gồm /admin/products, /admin/users
/components   Component UI theo domain (product, cart, admin, checkout...)
/lib          queries (đọc dữ liệu), actions (ghi dữ liệu — Server Actions), stores, storage
/prisma       schema.prisma, seed data, migrations
/scripts      Script QA bằng Playwright
```

Xem cấu trúc đầy đủ + quy ước code tại [`CLAUDE.md`](CLAUDE.md).

## Triển khai (Deploy)

Stack đề xuất, chạy được với gói miễn phí: **Vercel** (hosting) + **Neon** (PostgreSQL serverless) + **Vercel Blob** (ảnh sản phẩm).

1. Tạo database miễn phí tại [neon.tech](https://neon.tech), lấy connection string dạng `postgresql://...?sslmode=require`.
2. Import repo này vào [vercel.com](https://vercel.com) → khai báo biến môi trường: `DATABASE_URL` (từ Neon), `AUTH_SECRET` (chuỗi ngẫu nhiên 32 byte).
3. Vào tab **Storage** của project trên Vercel → tạo một **Blob store** → copy `BLOB_READ_WRITE_TOKEN` vào biến môi trường của project.
4. Áp schema lên database Neon: `npx prisma migrate deploy` (không phải `migrate dev`), rồi `npx prisma db seed` để có dữ liệu mẫu.
5. Deploy — Vercel build và cấp domain dạng `*.vercel.app`.

## Tài liệu chi tiết

- [`docs/giai-thich-don-gian.md`](docs/giai-thich-don-gian.md) — giải thích website hoạt động như thế nào, viết cho người **không rành lập trình**.
- [`docs/giai-thich-chuyen-sau.md`](docs/giai-thich-chuyen-sau.md) — kiến trúc & luồng xử lý chi tiết hơn, dành cho người có nền tảng kỹ thuật.
