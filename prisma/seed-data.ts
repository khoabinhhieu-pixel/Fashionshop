export type SeedProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  gender: "nam" | "nu" | "unisex";
  tone: number;
  sizes: string[];
  stock: number;
  description: string;
  badge?: "MOI" | "BAN_CHAY" | "SALE" | "HOT";
  images?: string[];
};

const STANDARD_SIZES = ["S", "M", "L", "XL"];

export const SEED_PRODUCTS: SeedProduct[] = [
  {
    id: "wool-overcoat",
    images: [
      "https://images.unsplash.com/photo-1614104006967-37cda2c69cbf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1656528049647-c82eb8174d04?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
      "https://images.pexels.com/photos/6765179/pexels-photo-6765179.jpeg",
    ],
    name: "Áo khoác dạ Wool Overcoat",
    price: 2450000,
    category: "Áo khoác",
    gender: "unisex",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo khoác dạ dáng dài, form suông tối giản, giữ ấm tốt cho mùa lạnh mà vẫn thanh lịch khi phối cùng trang phục công sở hay dạo phố.",
    badge: "BAN_CHAY",
  },
  {
    id: "silk-shirt",
    images: [
      "https://images.pexels.com/photos/23496903/pexels-photo-23496903.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/26100325/pexels-photo-26100325.jpeg?cs=srgb&dl=pexels-andrea-musto-135941147-26100325.jpg&fm=jpg",
    ],
    name: "Sơ mi lụa Silk Shirt",
    price: 980000,
    category: "Sơ mi",
    gender: "nu",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Chất liệu lụa mềm mại, bề mặt óng nhẹ, form regular fit dễ phối, phù hợp cả đi làm lẫn dạo phố cuối tuần.",
  },
  {
    id: "tailored-trousers",
    images: [
      "https://images.pexels.com/photos/9464625/pexels-photo-9464625.jpeg",
      "https://images.pexels.com/photos/30249859/pexels-photo-30249859.jpeg",
      "https://images.pexels.com/photos/16219794/pexels-photo-16219794.jpeg",
    ],
    name: "Quần tây ống suông Tailored Trousers",
    price: 1190000,
    category: "Quần",
    gender: "nam",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần tây ống suông may đo tinh gọn, chất vải co giãn nhẹ, giữ form chuẩn cả ngày dài.",
  },
  {
    id: "merino-turtleneck",
    images: [
      "https://images.pexels.com/photos/5491145/pexels-photo-5491145.jpeg",
      "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg",
      "https://images.pexels.com/photos/11682017/pexels-photo-11682017.jpeg",
    ],
    name: "Áo len cổ lọ Merino Turtleneck",
    price: 1050000,
    category: "Áo len",
    gender: "unisex",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo len cổ lọ dệt từ sợi merino mềm mịn, giữ ấm hiệu quả mà không gây bí, phù hợp mặc đơn hoặc layer bên trong áo khoác.",
  },
  {
    id: "denim-jacket",
    images: [
      "https://images.pexels.com/photos/6765179/pexels-photo-6765179.jpeg",
      "https://images.pexels.com/photos/28174872/pexels-photo-28174872.jpeg",
      "https://images.unsplash.com/photo-1614104006967-37cda2c69cbf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0",
    ],
    name: "Áo khoác denim Classic Denim Jacket",
    price: 1350000,
    category: "Áo khoác",
    gender: "unisex",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo khoác denim form regular kinh điển, chất vải bền màu, dễ phối với mọi phong cách từ basic đến năng động.",
  },
  {
    id: "pleated-skirt",
    images: [
      "https://images.pexels.com/photos/19451307/pexels-photo-19451307.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/4690507/pexels-photo-4690507.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Chân váy xếp ly Pleated Midi Skirt",
    price: 890000,
    category: "Váy",
    gender: "nu",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Chân váy xếp ly dài midi, form xoè nhẹ tạo chuyển động mềm mại khi di chuyển, phù hợp cả đi làm và dạo phố.",
  },
  {
    id: "cotton-tee",
    images: [
      "https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8217536/pexels-photo-8217536.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/24779116/pexels-photo-24779116.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun cotton Essential Tee",
    price: 450000,
    category: "Áo thun",
    gender: "unisex",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo thun cotton 100% form basic, chất vải dày dặn không xù lông, món đồ nền tảng cho mọi tủ đồ tối giản.",
    badge: "MOI",
  },
  {
    id: "linen-blazer",
    images: [
      "https://images.pexels.com/photos/18075381/pexels-photo-18075381.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/18031036/pexels-photo-18031036.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/18031037/pexels-photo-18031037.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Blazer vải lanh Linen Blazer",
    price: 1890000,
    category: "Blazer",
    gender: "nam",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Blazer vải lanh thoáng mát, form vai tự nhiên không độn, thích hợp mặc trong những ngày oi nóng mà vẫn giữ vẻ chỉn chu.",
  },
  {
    id: "chino-shorts",
    images: [
      "https://images.pexels.com/photos/38285941/pexels-photo-38285941.jpeg",
      "https://images.pexels.com/photos/36627632/pexels-photo-36627632.jpeg",
      "https://images.pexels.com/photos/23910819/pexels-photo-23910819.jpeg",
    ],
    name: "Quần short kaki Chino Shorts",
    price: 690000,
    category: "Quần",
    gender: "nam",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần short kaki form regular, chất vải chino bền đẹp, độ dài vừa phải phù hợp mùa hè.",
  },
  {
    id: "classic-polo",
    images: [
      "https://images.pexels.com/photos/15835619/pexels-photo-15835619.jpeg?cs=srgb&dl=pexels-imperioame-15835619.jpg&fm=jpg",
      "https://images.pexels.com/photos/27385944/pexels-photo-27385944.jpeg?cs=srgb&dl=pexels-anh-nguyen-517648218-27385944.jpg&fm=jpg",
      "https://images.pexels.com/photos/9842545/pexels-photo-9842545.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo polo cotton Classic Polo",
    price: 590000,
    category: "Áo thun",
    gender: "nam",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo polo cotton piqué form vừa vặn, cổ bẻ gọn gàng, lựa chọn an toàn cho phong cách smart-casual.",
  },
  {
    id: "bomber-jacket",
    images: [
      "https://images.pexels.com/photos/207081/pexels-photo-207081.jpeg",
      "https://images.pexels.com/photos/12797871/pexels-photo-12797871.jpeg",
      "https://images.pexels.com/photos/2766298/pexels-photo-2766298.jpeg",
    ],
    name: "Áo khoác bomber Bomber Jacket",
    price: 1590000,
    category: "Áo khoác",
    gender: "nam",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo khoác bomber form regular, gấu và cổ tay bo chun, giữ ấm tốt cho những ngày chuyển mùa.",
  },
  {
    id: "oxford-shirt",
    images: [
      "https://images.pexels.com/photos/1984632/pexels-photo-1984632.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/702139/pexels-photo-702139.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/13127687/pexels-photo-13127687.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Sơ mi Oxford Button-down",
    price: 750000,
    originalPrice: 950000,
    category: "Sơ mi",
    gender: "nam",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Sơ mi vải Oxford cổ button-down kinh điển, chất vải dày dặn bền form, phù hợp cả môi trường công sở lẫn phong cách casual.",
    badge: "HOT",
  },
  {
    id: "wrap-dress",
    images: [
      "https://images.pexels.com/photos/8031791/pexels-photo-8031791.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/2682514/pexels-photo-2682514.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/1865726/pexels-photo-1865726.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Đầm suông Midi Wrap Dress",
    price: 1290000,
    originalPrice: 1590000,
    category: "Đầm",
    gender: "nu",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Đầm wrap dáng midi, thiết kế buộc eo tôn dáng nhẹ nhàng, chất vải rũ mềm phù hợp nhiều dịp.",
    badge: "SALE",
  },
  {
    id: "knit-cardigan",
    images: [
      "https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg",
      "https://images.pexels.com/photos/4421760/pexels-photo-4421760.jpeg",
      "https://images.pexels.com/photos/11045730/pexels-photo-11045730.jpeg",
    ],
    name: "Áo cardigan len Knit Cardigan",
    price: 990000,
    category: "Áo len",
    gender: "nu",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo cardigan len dệt kim mềm mại, form vừa vặn, dễ khoác ngoài áo thun hoặc sơ mi trong ngày se lạnh.",
    badge: "MOI",
  },
  {
    id: "wide-leg-trousers",
    images: [
      "https://images.pexels.com/photos/14408067/pexels-photo-14408067.jpeg",
      "https://images.pexels.com/photos/22856154/pexels-photo-22856154.jpeg",
      "https://images.pexels.com/photos/5365474/pexels-photo-5365474.jpeg",
    ],
    name: "Quần ống rộng Wide-leg Trousers",
    price: 1090000,
    category: "Quần",
    gender: "nu",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần ống rộng lưng cao, form suông thẳng tạo hiệu ứng chân dài, chất vải rũ đẹp khi di chuyển.",
  },
  {
    id: "silk-blouse",
    images: [
      "https://images.pexels.com/photos/19652511/pexels-photo-19652511.jpeg?cs=tinysrgb&w=4082&fit=max",
      "https://images.pexels.com/photos/23496903/pexels-photo-23496903.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo blouse lụa Silk Blouse",
    price: 890000,
    category: "Sơ mi",
    gender: "nu",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 0,
    description:
      "Áo blouse lụa form rộng rãi thoải mái, tay áo dáng suông nhẹ, phù hợp phong cách thanh lịch tối giản.",
  },

  // ===================== Đợt bổ sung: 50 sản phẩm mới =====================

  // --- Áo thun ---
  {
    id: "graphic-tee-oversized",
    images: [
      "https://images.pexels.com/photos/9726634/pexels-photo-9726634.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/24779116/pexels-photo-24779116.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/11671964/pexels-photo-11671964.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun oversized in họa tiết Graphic Oversized Tee",
    price: 420000,
    category: "Áo thun",
    gender: "unisex",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 45,
    description:
      "Áo thun form oversized in họa tiết tối giản, chất cotton dày dặn không xuyên thấu, phù hợp phong cách streetwear hằng ngày.",
    badge: "MOI",
  },
  {
    id: "henley-tee-longsleeve",
    images: [
      "https://images.pexels.com/photos/907648/pexels-photo-907648.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
      "https://images.pexels.com/photos/6616675/pexels-photo-6616675.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun tay dài cổ Henley Longsleeve",
    price: 480000,
    category: "Áo thun",
    gender: "nam",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo thun tay dài cổ henley 3 khuy, chất cotton co giãn nhẹ, mặc đơn hoặc lót trong áo khoác đều hợp.",
  },
  {
    id: "striped-tee-nu",
    images: [
      "https://images.pexels.com/photos/5685978/pexels-photo-5685978.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1171601/pexels-photo-1171601.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3790480/pexels-photo-3790480.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun sọc basic Striped Tee",
    price: 390000,
    category: "Áo thun",
    gender: "nu",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo thun kẻ sọc ngang basic, form regular vừa vặn, món đồ dễ phối dùng lại nhiều lần trong tuần.",
  },
  {
    id: "v-neck-tee-cotton",
    images: [
      "https://images.pexels.com/photos/4584457/pexels-photo-4584457.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4154182/pexels-photo-4154182.jpeg?cs=srgb&dl=pexels-cottonbro-4154182.jpg&fm=jpg",
      "https://images.pexels.com/photos/3958811/pexels-photo-3958811.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun cổ tim V-neck Basic",
    price: 350000,
    category: "Áo thun",
    gender: "nu",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo thun cổ tim form ôm nhẹ, chất cotton mềm mịn, phù hợp mặc đơn hoặc phối layer mùa hè.",
  },
  {
    id: "muscle-tee-sport",
    images: [
      "https://images.pexels.com/photos/10305224/pexels-photo-10305224.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/19537785/pexels-photo-19537785.jpeg?cs=srgb&dl=pexels-rao-qingwei-400570939-19537785.jpg&fm=jpg",
      "https://images.pexels.com/photos/5327532/pexels-photo-5327532.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Áo thun tay lỡ Muscle Tee",
    price: 400000,
    category: "Áo thun",
    gender: "nam",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 42,
    description:
      "Áo thun tay lỡ ôm bắp nhẹ, vải thun 4 chiều co giãn tốt, phù hợp cả tập luyện lẫn mặc phố.",
    badge: "BAN_CHAY",
  },

  // --- Sơ mi ---
  {
    id: "linen-shirt-nam",
    images: [
      "https://images.pexels.com/photos/6616675/pexels-photo-6616675.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/17901281/pexels-photo-17901281.jpeg?cs=srgb&dl=pexels-kamrujjamanjewel-17901281.jpg&fm=jpg",
      "https://images.pexels.com/photos/1984632/pexels-photo-1984632.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Sơ mi vải lanh Linen Shirt",
    price: 850000,
    category: "Sơ mi",
    gender: "nam",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 38,
    description:
      "Sơ mi vải lanh thoáng khí, bề mặt nhăn tự nhiên đặc trưng, thích hợp cho những ngày oi nóng cần sự thoải mái.",
  },
  {
    id: "flannel-shirt-caro",
    images: [
      "https://images.pexels.com/photos/1040871/pexels-photo-1040871.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/212951/pexels-photo-212951.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/16783370/pexels-photo-16783370.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Sơ mi flannel caro Flannel Check Shirt",
    price: 790000,
    category: "Sơ mi",
    gender: "nam",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 36,
    description:
      "Sơ mi flannel họa tiết caro ấm áp, chất vải dày mịn, mặc đơn hoặc khoác ngoài áo thun đều đẹp.",
    badge: "MOI",
  },
  {
    id: "satin-shirt-nu",
    images: [
      "https://images.pexels.com/photos/26100325/pexels-photo-26100325.jpeg?cs=srgb&dl=pexels-andrea-musto-135941147-26100325.jpg&fm=jpg",
      "https://images.pexels.com/photos/19652511/pexels-photo-19652511.jpeg?cs=tinysrgb&w=4082&fit=max",
      "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Sơ mi satin ánh nhẹ Satin Shirt",
    price: 820000,
    category: "Sơ mi",
    gender: "nu",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 35,
    description:
      "Sơ mi satin bề mặt ánh nhẹ sang trọng, form suông thoải mái, phù hợp cả đi làm và dự tiệc nhẹ.",
  },
  {
    id: "denim-shirt-unisex",
    images: [
      "https://images.pexels.com/photos/10004175/pexels-photo-10004175.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9789623/pexels-photo-9789623.jpeg?auto=compress&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&w=1260&h=750&dpr=1",
    ],
    name: "Sơ mi denim Denim Overshirt",
    price: 950000,
    category: "Sơ mi",
    gender: "unisex",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Sơ mi denim dáng overshirt có thể mặc như áo khoác nhẹ, chất vải bền màu qua nhiều lần giặt.",
  },

  // --- Quần jean ---
  {
    id: "slim-jeans-nam",
    images: [
      "https://images.pexels.com/photos/12181646/pexels-photo-12181646.jpeg",
      "https://images.pexels.com/photos/2815417/pexels-photo-2815417.jpeg",
      "https://images.pexels.com/photos/17858291/pexels-photo-17858291.jpeg",
    ],
    name: "Quần jean slim fit Slim Jeans",
    price: 890000,
    category: "Quần jean",
    gender: "nam",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần jean slim fit ôm vừa phải, vải denim co giãn nhẹ tạo cảm giác thoải mái khi vận động cả ngày.",
  },
  {
    id: "mom-jeans-nu",
    images: [
      "https://images.pexels.com/photos/16961277/pexels-photo-16961277.jpeg",
      "https://images.pexels.com/photos/1501214/pexels-photo-1501214.jpeg",
      "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg",
    ],
    name: "Quần jean ống rộng Mom Jeans",
    price: 920000,
    category: "Quần jean",
    gender: "nu",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần jean mom fit lưng cao, ống rộng rãi phong cách retro, dễ phối cùng áo thun hoặc áo crop.",
    badge: "BAN_CHAY",
  },
  {
    id: "skinny-jeans-nu",
    images: [
      "https://images.pexels.com/photos/2285500/pexels-photo-2285500.jpeg",
      "https://images.pexels.com/photos/1501214/pexels-photo-1501214.jpeg",
      "https://images.pexels.com/photos/16961277/pexels-photo-16961277.jpeg",
    ],
    name: "Quần jean skinny Skinny Jeans",
    price: 850000,
    category: "Quần jean",
    gender: "nu",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 38,
    description:
      "Quần jean skinny tôn dáng chân, chất denim co giãn 4 chiều, giữ form tốt sau thời gian dài mặc.",
  },
  {
    id: "straight-jeans-nam",
    images: [
      "https://images.pexels.com/photos/17858291/pexels-photo-17858291.jpeg",
      "https://images.pexels.com/photos/23910819/pexels-photo-23910819.jpeg",
      "https://images.pexels.com/photos/12181646/pexels-photo-12181646.jpeg",
    ],
    name: "Quần jean ống suông Straight Jeans",
    price: 900000,
    category: "Quần jean",
    gender: "nam",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần jean ống suông form basic dễ mặc, phù hợp mọi vóc dáng, phối được với hầu hết áo trong tủ đồ.",
  },

  // --- Quần (kaki/lanh/cargo) ---
  {
    id: "jogger-pants-kaki",
    images: [
      "https://images.pexels.com/photos/9901666/pexels-photo-9901666.jpeg",
      "https://images.pexels.com/photos/9499128/pexels-photo-9499128.jpeg",
      "https://images.pexels.com/photos/28879605/pexels-photo-28879605.jpeg",
    ],
    name: "Quần jogger kaki Jogger Pants",
    price: 650000,
    category: "Quần",
    gender: "unisex",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 42,
    description:
      "Quần jogger kaki bo gấu, lưng thun phối dây rút, thoải mái vận động mà vẫn gọn gàng khi ra ngoài.",
  },
  {
    id: "culottes-linen",
    images: [
      "https://images.pexels.com/photos/26425708/pexels-photo-26425708.jpeg",
      "https://images.pexels.com/photos/16983319/pexels-photo-16983319.jpeg",
      "https://images.pexels.com/photos/16983236/pexels-photo-16983236.jpeg",
    ],
    name: "Quần culottes lanh Linen Culottes",
    price: 780000,
    category: "Quần",
    gender: "nu",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 35,
    description:
      "Quần culottes ống rộng chất lanh thoáng mát, độ dài lửng qua mắt cá, phù hợp cả công sở và dạo phố.",
  },
  {
    id: "cargo-pants-unisex",
    images: [
      "https://images.pexels.com/photos/35043249/pexels-photo-35043249.jpeg",
      "https://images.pexels.com/photos/11716436/pexels-photo-11716436.jpeg",
      "https://images.pexels.com/photos/18393526/pexels-photo-18393526.jpeg",
    ],
    name: "Quần cargo túi hộp Cargo Pants",
    price: 750000,
    category: "Quần",
    gender: "unisex",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần cargo nhiều túi hộp tiện dụng, chất vải bền chắc, form suông rộng theo phong cách utility.",
    badge: "MOI",
  },

  // --- Áo khoác ---
  {
    id: "trench-coat-nu",
    images: [
      "https://images.pexels.com/photos/9968540/pexels-photo-9968540.jpeg",
      "https://images.pexels.com/photos/9968456/pexels-photo-9968456.jpeg",
      "https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg",
    ],
    name: "Áo khoác dạ dáng dài Trench Coat",
    price: 2100000,
    originalPrice: 2600000,
    category: "Áo khoác",
    gender: "nu",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 25,
    description:
      "Trench coat dáng dài kinh điển, đai thắt eo tôn dáng, phù hợp làm điểm nhấn cho outfit mùa lạnh.",
    badge: "SALE",
  },
  {
    id: "puffer-jacket-unisex",
    images: [
      "https://images.pexels.com/photos/10012896/pexels-photo-10012896.jpeg",
      "https://images.pexels.com/photos/7026775/pexels-photo-7026775.jpeg",
      "https://images.pexels.com/photos/8497715/pexels-photo-8497715.jpeg",
    ],
    name: "Áo phao nhẹ Puffer Jacket",
    price: 1450000,
    category: "Áo khoác",
    gender: "unisex",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 32,
    description:
      "Áo phao siêu nhẹ giữ nhiệt tốt, có thể gấp gọn khi không sử dụng, tiện mang theo khi di chuyển xa.",
  },
  {
    id: "windbreaker-jacket",
    images: [
      "https://images.pexels.com/photos/8497715/pexels-photo-8497715.jpeg",
      "https://images.pexels.com/photos/17167935/pexels-photo-17167935.jpeg",
      "https://images.pexels.com/photos/7026775/pexels-photo-7026775.jpeg",
    ],
    name: "Áo khoác gió Windbreaker",
    price: 690000,
    category: "Áo khoác",
    gender: "unisex",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo khoác gió cản gió nhẹ, chất vải nhanh khô, phù hợp mặc ngoài khi thời tiết chuyển mùa.",
  },
  {
    id: "suede-jacket-nam",
    images: [
      "https://images.pexels.com/photos/2766298/pexels-photo-2766298.jpeg",
      "https://images.pexels.com/photos/1687116/pexels-photo-1687116.jpeg",
      "https://images.pexels.com/photos/12797871/pexels-photo-12797871.jpeg",
    ],
    name: "Áo khoác da lộn Suede Jacket",
    price: 2350000,
    category: "Áo khoác",
    gender: "nam",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 20,
    description:
      "Áo khoác da lộn form regular, bề mặt da mềm có độ rủ tự nhiên, tạo điểm nhấn sang trọng cho outfit.",
    badge: "HOT",
  },
  {
    id: "cardigan-coat-nu",
    images: [
      "https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg",
      "https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg",
      "https://images.pexels.com/photos/9968456/pexels-photo-9968456.jpeg",
    ],
    name: "Áo khoác cardigan dáng dài Long Cardigan Coat",
    price: 1150000,
    category: "Áo khoác",
    gender: "nu",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 30,
    description:
      "Cardigan dáng dài qua gối, chất len dệt kim mềm mại, khoác ngoài tạo lớp ấm nhẹ nhàng mà vẫn thanh lịch.",
  },

  // --- Áo hoodie / áo len ---
  {
    id: "hoodie-basic-unisex",
    images: [
      "https://images.pexels.com/photos/17281224/pexels-photo-17281224.jpeg",
      "https://images.pexels.com/photos/8217415/pexels-photo-8217415.jpeg",
      "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg",
    ],
    name: "Áo hoodie nỉ bông Basic Hoodie",
    price: 590000,
    category: "Áo hoodie",
    gender: "unisex",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 45,
    description:
      "Áo hoodie nỉ bông form rộng rãi, mũ trùm điều chỉnh dây rút, món đồ basic không thể thiếu mùa se lạnh.",
    badge: "BAN_CHAY",
  },
  {
    id: "crewneck-sweatshirt",
    images: [
      "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg",
      "https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg",
      "https://images.pexels.com/photos/8217415/pexels-photo-8217415.jpeg",
    ],
    name: "Áo nỉ cổ tròn Crewneck Sweatshirt",
    price: 540000,
    category: "Áo hoodie",
    gender: "unisex",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo nỉ cổ tròn form regular, chất nỉ bông dày mịn giữ ấm tốt, dễ phối trong nhiều outfit đời thường.",
  },
  {
    id: "cable-knit-sweater",
    images: [
      "https://images.pexels.com/photos/11045730/pexels-photo-11045730.jpeg",
      "https://images.pexels.com/photos/6788923/pexels-photo-6788923.jpeg",
      "https://images.pexels.com/photos/4421760/pexels-photo-4421760.jpeg",
    ],
    name: "Áo len dệt cáp Cable Knit Sweater",
    price: 990000,
    category: "Áo len",
    gender: "nu",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 30,
    description:
      "Áo len họa tiết dệt cáp nổi khối, chất len dày ấm, mang lại vẻ ngoài ấm áp và tinh tế cho mùa đông.",
  },
  {
    id: "zip-hoodie-nam",
    images: [
      "https://images.pexels.com/photos/1080243/pexels-photo-1080243.png",
      "https://images.pexels.com/photos/881638/pexels-photo-881638.jpeg",
      "https://images.pexels.com/photos/6902604/pexels-photo-6902604.jpeg",
    ],
    name: "Áo hoodie khoá kéo Zip-up Hoodie",
    price: 650000,
    category: "Áo hoodie",
    gender: "nam",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo hoodie khoá kéo toàn thân tiện mặc mở, hai túi hộp phía trước, phù hợp mặc layer ngoài áo thun.",
  },
  {
    id: "half-zip-sweater",
    images: [
      "https://images.pexels.com/photos/11903147/pexels-photo-11903147.jpeg",
      "https://images.pexels.com/photos/5801328/pexels-photo-5801328.jpeg",
    ],
    name: "Áo len nửa khoá Half-zip Sweater",
    price: 890000,
    category: "Áo len",
    gender: "nam",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 32,
    description:
      "Áo len cổ nửa khoá phong cách smart-casual, chất len mềm không xù, phù hợp cả đi làm lẫn cuối tuần.",
    badge: "MOI",
  },

  // --- Đầm / Chân váy ---
  {
    id: "slip-dress-satin",
    images: [
      "https://images.pexels.com/photos/18269866/pexels-photo-18269866.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/20332983/pexels-photo-20332983.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/20332949/pexels-photo-20332949.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Đầm hai dây satin Slip Dress",
    price: 950000,
    category: "Đầm",
    gender: "nu",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 28,
    description:
      "Đầm hai dây chất satin rũ mềm, thiết kế tối giản tôn dáng, phù hợp mặc đơn hoặc phối cardigan.",
  },
  {
    id: "shirt-dress-nu",
    images: [
      "https://images.pexels.com/photos/4672086/pexels-photo-4672086.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/4672299/pexels-photo-4672299.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/920379/pexels-photo-920379.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Đầm sơ mi dáng suông Shirt Dress",
    price: 890000,
    category: "Đầm",
    gender: "nu",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 32,
    description:
      "Đầm dáng sơ mi form suông thoải mái, có thể thắt đai eo tuỳ chỉnh, dễ mặc đi làm lẫn dạo phố.",
  },
  {
    id: "denim-skirt-mini",
    images: [
      "https://images.pexels.com/photos/5181697/pexels-photo-5181697.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/28005263/pexels-photo-28005263.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/20276501/pexels-photo-20276501.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Chân váy denim ngắn Denim Mini Skirt",
    price: 590000,
    category: "Chân váy",
    gender: "nu",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 35,
    description:
      "Chân váy denim form ngắn năng động, chất vải bền form, dễ phối cùng áo thun hoặc áo sơ mi.",
  },
  {
    id: "maxi-dress-hoa",
    images: [
      "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/1865726/pexels-photo-1865726.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/2682514/pexels-photo-2682514.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Đầm maxi hoạ tiết hoa Floral Maxi Dress",
    price: 1090000,
    originalPrice: 1390000,
    category: "Đầm",
    gender: "nu",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 26,
    description:
      "Đầm maxi họa tiết hoa nhí, chất vải rũ nhẹ bay bổng, lựa chọn lý tưởng cho các buổi dạo biển hoặc du lịch.",
    badge: "SALE",
  },
  {
    id: "aline-skirt-midi",
    images: [
      "https://images.pexels.com/photos/16814760/pexels-photo-16814760.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/16814751/pexels-photo-16814751.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/12315369/pexels-photo-12315369.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Chân váy chữ A midi A-line Midi Skirt",
    price: 650000,
    category: "Chân váy",
    gender: "nu",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 34,
    description:
      "Chân váy chữ A dáng midi thanh lịch, form xoè nhẹ che khuyết điểm vùng hông, phù hợp đi làm hằng ngày.",
  },

  // --- Blazer / Vest ---
  {
    id: "slim-blazer-cong-so",
    images: [
      "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/8485714/pexels-photo-8485714.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Áo vest công sở dáng ôm Slim Blazer",
    price: 1690000,
    category: "Blazer",
    gender: "nu",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 24,
    description:
      "Blazer dáng ôm vừa vặn theo form người, thiết kế tối giản chuyên nghiệp, chuẩn mực cho môi trường công sở.",
  },
  {
    id: "double-breasted-blazer",
    images: [
      "https://images.pexels.com/photos/18851488/pexels-photo-18851488.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Blazer hai hàng khuy Double-breasted Blazer",
    price: 1990000,
    originalPrice: 2450000,
    category: "Blazer",
    gender: "nam",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 20,
    description:
      "Blazer hai hàng khuy phong cách lịch lãm, vai cấu trúc vừa phải, phù hợp cho các dịp cần sự trang trọng.",
    badge: "SALE",
  },

  // --- Đồ thể thao ---
  {
    id: "sport-legging-nu",
    images: [
      "https://images.pexels.com/photos/206341/pexels-photo-206341.jpeg",
      "https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg",
      "https://images.pexels.com/photos/3844000/pexels-photo-3844000.jpeg",
    ],
    name: "Quần legging tập thể thao Sport Legging",
    price: 490000,
    category: "Đồ thể thao",
    gender: "nu",
    tone: 3,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Quần legging ôm dáng co giãn 4 chiều, lưng cao nâng đỡ tốt, phù hợp tập gym, yoga hoặc chạy bộ.",
  },
  {
    id: "training-tank-nam",
    images: [
      "https://images.pexels.com/photos/17559312/pexels-photo-17559312.jpeg",
      "https://images.pexels.com/photos/5327539/pexels-photo-5327539.jpeg",
      "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg",
    ],
    name: "Áo tank tập gym Training Tank",
    price: 320000,
    category: "Đồ thể thao",
    gender: "nam",
    tone: 4,
    sizes: STANDARD_SIZES,
    stock: 40,
    description:
      "Áo tank ba lỗ thoáng khí, vải thấm hút mồ hôi nhanh khô, thoải mái vận động cường độ cao.",
  },
  {
    id: "active-shorts-unisex",
    images: [
      "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg",
      "https://images.pexels.com/photos/5037354/pexels-photo-5037354.jpeg",
      "https://images.pexels.com/photos/3763996/pexels-photo-3763996.jpeg",
    ],
    name: "Quần short thể thao Active Shorts",
    price: 380000,
    category: "Đồ thể thao",
    gender: "unisex",
    tone: 5,
    sizes: STANDARD_SIZES,
    stock: 42,
    description:
      "Quần short thể thao nhẹ, có lót trong, lưng thun co giãn thoải mái cho mọi bài tập vận động.",
    badge: "MOI",
  },
  {
    id: "running-windbreaker",
    images: [
      "https://images.pexels.com/photos/8497715/pexels-photo-8497715.jpeg",
      "https://images.pexels.com/photos/17167935/pexels-photo-17167935.jpeg",
      "https://images.pexels.com/photos/8034518/pexels-photo-8034518.jpeg",
    ],
    name: "Áo khoác gió chạy bộ Running Windbreaker",
    price: 720000,
    category: "Đồ thể thao",
    gender: "unisex",
    tone: 0,
    sizes: STANDARD_SIZES,
    stock: 30,
    description:
      "Áo khoác gió siêu nhẹ chuyên dụng khi chạy bộ, có lỗ thoát khí sau lưng, gọn nhẹ khi gấp mang theo.",
  },

  // --- Đồ ngủ ---
  {
    id: "silk-pyjama-set",
    images: [
      "https://images.pexels.com/photos/8416052/pexels-photo-8416052.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/8416048/pexels-photo-8416048.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/8416054/pexels-photo-8416054.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Bộ pyjama lụa Silk Pyjama Set",
    price: 890000,
    category: "Đồ ngủ",
    gender: "nu",
    tone: 1,
    sizes: STANDARD_SIZES,
    stock: 26,
    description:
      "Bộ đồ ngủ pyjama chất lụa mềm mịn mát lạnh, thiết kế tối giản sang trọng, thoải mái cả khi mặc ở nhà.",
  },
  {
    id: "cotton-sleep-set",
    images: [
      "https://images.pexels.com/photos/8416232/pexels-photo-8416232.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/8416240/pexels-photo-8416240.jpeg?auto=compress&cs=tinysrgb&w=1260",
      "https://images.pexels.com/photos/8416235/pexels-photo-8416235.jpeg?auto=compress&cs=tinysrgb&w=1260",
    ],
    name: "Bộ đồ ngủ cotton Cotton Sleep Set",
    price: 490000,
    category: "Đồ ngủ",
    gender: "unisex",
    tone: 2,
    sizes: STANDARD_SIZES,
    stock: 35,
    description:
      "Bộ đồ ngủ cotton thoáng mát thấm hút mồ hôi tốt, form rộng rãi thoải mái cho giấc ngủ ngon.",
  },

  // --- Giày ---
  {
    id: "classic-white-sneaker",
    images: [
      "https://images.pexels.com/photos/6698234/pexels-photo-6698234.jpeg",
      "https://images.pexels.com/photos/11946032/pexels-photo-11946032.jpeg",
      "https://images.pexels.com/photos/21419626/pexels-photo-21419626.jpeg",
    ],
    name: "Giày sneaker trắng basic Classic White Sneaker",
    price: 1250000,
    category: "Giày",
    gender: "unisex",
    tone: 3,
    sizes: ["38", "39", "40", "41", "42", "43"],
    stock: 40,
    description:
      "Giày sneaker trắng form basic dễ phối đồ, đế cao su êm chân, món đồ nền tảng cho mọi tủ giày.",
    badge: "BAN_CHAY",
  },
  {
    id: "leather-loafer-nam",
    images: [
      "https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg",
      "https://images.pexels.com/photos/34422195/pexels-photo-34422195.jpeg",
      "https://images.pexels.com/photos/1743397/pexels-photo-1743397.jpeg",
    ],
    name: "Giày loafer da Leather Loafer",
    price: 1490000,
    category: "Giày",
    gender: "nam",
    tone: 4,
    sizes: ["39", "40", "41", "42", "43", "44"],
    stock: 30,
    description:
      "Giày loafer da thật form thanh lịch, dễ xỏ không dây buộc, phù hợp phong cách smart-casual.",
  },
  {
    id: "ankle-boot-nu",
    images: [
      "https://images.pexels.com/photos/14089760/pexels-photo-14089760.jpeg",
      "https://images.pexels.com/photos/34708761/pexels-photo-34708761.jpeg",
      "https://images.pexels.com/photos/20408716/pexels-photo-20408716.jpeg",
    ],
    name: "Giày boot cổ thấp Ankle Boot",
    price: 1690000,
    category: "Giày",
    gender: "nu",
    tone: 5,
    sizes: ["36", "37", "38", "39", "40"],
    stock: 25,
    description:
      "Giày boot cổ thấp form ôm chân, chất da tổng hợp bền đẹp, tạo điểm nhấn cá tính cho outfit mùa thu đông.",
  },
  {
    id: "slide-sandal-unisex",
    images: [
      "https://images.pexels.com/photos/13698234/pexels-photo-13698234.jpeg",
      "https://images.pexels.com/photos/29320435/pexels-photo-29320435.jpeg",
      "https://images.pexels.com/photos/3342769/pexels-photo-3342769.jpeg",
    ],
    name: "Dép sandal quai ngang Slide Sandal",
    price: 450000,
    category: "Giày",
    gender: "unisex",
    tone: 0,
    sizes: ["38", "39", "40", "41", "42", "43"],
    stock: 45,
    description:
      "Dép sandal quai ngang đế êm, thiết kế tối giản tiện lợi, phù hợp mang ở nhà hoặc dạo biển.",
  },

  // --- Túi xách ---
  {
    id: "canvas-tote-bag",
    images: [
      "https://images.pexels.com/photos/20398749/pexels-photo-20398749.jpeg",
      "https://images.pexels.com/photos/3735146/pexels-photo-3735146.jpeg",
      "https://images.pexels.com/photos/29188519/pexels-photo-29188519.jpeg",
    ],
    name: "Túi tote vải canvas Canvas Tote Bag",
    price: 390000,
    category: "Túi xách",
    gender: "unisex",
    tone: 1,
    sizes: [],
    stock: 40,
    description:
      "Túi tote vải canvas bền chắc, dung tích rộng rãi tiện đựng đồ đi học đi làm, form tối giản dễ phối.",
  },
  {
    id: "leather-crossbody-bag",
    images: [
      "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg",
      "https://images.pexels.com/photos/8276590/pexels-photo-8276590.jpeg",
      "https://images.pexels.com/photos/932403/pexels-photo-932403.jpeg",
    ],
    name: "Túi đeo chéo da Leather Crossbody Bag",
    price: 990000,
    category: "Túi xách",
    gender: "nu",
    tone: 2,
    sizes: [],
    stock: 22,
    description:
      "Túi đeo chéo da tổng hợp form nhỏ gọn, nhiều ngăn tiện dụng, điểm nhấn tinh tế cho outfit hằng ngày.",
    badge: "HOT",
  },
  {
    id: "canvas-travel-backpack",
    images: [
      "https://images.pexels.com/photos/10425471/pexels-photo-10425471.jpeg",
      "https://images.pexels.com/photos/2581920/pexels-photo-2581920.jpeg",
      "https://images.pexels.com/photos/17887175/pexels-photo-17887175.jpeg",
    ],
    name: "Balo du lịch canvas Canvas Travel Backpack",
    price: 850000,
    category: "Túi xách",
    gender: "unisex",
    tone: 3,
    sizes: [],
    stock: 28,
    description:
      "Balo canvas dung tích lớn có ngăn đựng laptop, chất vải chống thấm nhẹ, phù hợp đi học, đi làm và du lịch ngắn ngày.",
    badge: "MOI",
  },

  // --- Phụ kiện ---
  {
    id: "genuine-leather-belt",
    images: [
      "https://images.pexels.com/photos/5103537/pexels-photo-5103537.jpeg",
      "https://images.pexels.com/photos/89783/belts-belt-buckle-leather-metal-89783.jpeg",
      "https://images.pexels.com/photos/31367058/pexels-photo-31367058.jpeg",
    ],
    name: "Thắt lưng da thật Genuine Leather Belt",
    price: 450000,
    category: "Phụ kiện",
    gender: "nam",
    tone: 4,
    sizes: [],
    stock: 40,
    description:
      "Thắt lưng da thật khoá kim loại chắc chắn, thiết kế tối giản, phù hợp cả trang phục công sở và đời thường.",
  },
  {
    id: "basic-cap-unisex",
    images: [
      "https://images.pexels.com/photos/844867/pexels-photo-844867.jpeg",
      "https://images.pexels.com/photos/38114107/pexels-photo-38114107.jpeg",
      "https://images.pexels.com/photos/33962425/pexels-photo-33962425.jpeg",
    ],
    name: "Mũ lưỡi trai basic Basic Cap",
    price: 280000,
    category: "Phụ kiện",
    gender: "unisex",
    tone: 5,
    sizes: [],
    stock: 45,
    description:
      "Mũ lưỡi trai form basic điều chỉnh được kích cỡ, chất vải bền màu, phụ kiện tiện dụng cho ngày nắng.",
  },
  {
    id: "wool-scarf-unisex",
    images: [
      "https://images.pexels.com/photos/1799895/pexels-photo-1799895.jpeg",
      "https://images.pexels.com/photos/6743977/pexels-photo-6743977.jpeg",
      "https://images.pexels.com/photos/6834235/pexels-photo-6834235.jpeg",
    ],
    name: "Khăn choàng len Wool Scarf",
    price: 350000,
    category: "Phụ kiện",
    gender: "unisex",
    tone: 0,
    sizes: [],
    stock: 38,
    description:
      "Khăn choàng len mềm mịn giữ ấm tốt, bản khăn vừa phải dễ phối, món phụ kiện cần thiết cho mùa lạnh.",
    badge: "MOI",
  },
  {
    id: "canvas-waist-bag",
    images: [
      "https://images.pexels.com/photos/9343479/pexels-photo-9343479.jpeg",
      "https://images.pexels.com/photos/8856496/pexels-photo-8856496.jpeg",
      "https://images.pexels.com/photos/3271065/pexels-photo-3271065.jpeg",
    ],
    name: "Túi đeo hông canvas Canvas Waist Bag",
    price: 320000,
    category: "Phụ kiện",
    gender: "unisex",
    tone: 1,
    sizes: [],
    stock: 36,
    description:
      "Túi đeo hông canvas nhỏ gọn tiện lợi, phù hợp đựng đồ cá nhân khi di chuyển hoặc đi chơi xa.",
  },
];

export type SeedTestimonial = {
  authorName: string;
  authorRole: string;
  quote: string;
  rating: number;
  avatarTone: number;
  displayOrder: number;
};

export const SEED_TESTIMONIALS: SeedTestimonial[] = [
  {
    authorName: "Minh Anh",
    authorRole: "Khách hàng tại Hà Nội",
    quote:
      "Chất liệu vượt mong đợi so với mức giá. Áo khoác dạ mặc qua một mùa đông vẫn giữ form rất tốt.",
    rating: 5,
    avatarTone: 0,
    displayOrder: 0,
  },
  {
    authorName: "Gia Bảo",
    authorRole: "Khách hàng tại TP. Hồ Chí Minh",
    quote:
      "Giao diện đặt hàng dễ dùng, thiết kế tối giản đúng gu mình thích. Sẽ tiếp tục ủng hộ shop.",
    rating: 5,
    avatarTone: 1,
    displayOrder: 1,
  },
  {
    authorName: "Thuỳ Linh",
    authorRole: "Khách hàng tại Đà Nẵng",
    quote:
      "Đóng gói cẩn thận, giao hàng nhanh. Chất vải sơ mi lụa mềm mịn hơn mình nghĩ.",
    rating: 4,
    avatarTone: 3,
    displayOrder: 2,
  },
  {
    authorName: "Đức Huy",
    authorRole: "Khách hàng tại Hà Nội",
    quote:
      "Mình thích cách phối màu trung tính của các sản phẩm, dễ mix đồ đi làm.",
    rating: 5,
    avatarTone: 2,
    displayOrder: 3,
  },
  {
    authorName: "Ngọc Trâm",
    authorRole: "Khách hàng tại Cần Thơ",
    quote:
      "Chính sách đổi trả rõ ràng, tư vấn size nhiệt tình qua tin nhắn.",
    rating: 5,
    avatarTone: 5,
    displayOrder: 4,
  },
];
