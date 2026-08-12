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
};

const STANDARD_SIZES = ["S", "M", "L", "XL"];

export const SEED_PRODUCTS: SeedProduct[] = [
  {
    id: "wool-overcoat",
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
