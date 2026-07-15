import type { Locale, LocalizedText } from "./site";

export type PortfolioCategory =
  | "activation"
  | "bao_bi"
  | "event"
  | "key_visual"
  | "social"
  | "tvc";

export type PortfolioProject = {
  id: string;
  category: PortfolioCategory;
  title: LocalizedText;
  client: string;
  year: string;
  description: LocalizedText;
  brief?: LocalizedText;          // nguyên văn từ Info.txt
  thumbnail: string;
  gallery: string[];
  tags: string[];
  video?: string;
};

export const portfolioCategories: { id: PortfolioCategory; label: LocalizedText }[] = [
  { id: "key_visual", label: { vi: "Key Visual", en: "Key Visual" } },
  { id: "bao_bi", label: { vi: "Bao bì", en: "Packaging" } },
  { id: "tvc", label: { vi: "TVC", en: "TVC" } },
  { id: "activation", label: { vi: "Activation", en: "Activation" } },
  { id: "event", label: { vi: "Event", en: "Event" } },
  { id: "social", label: { vi: "Social", en: "Social" } },
];

export const portfolioProjects: readonly PortfolioProject[] = [
  // KEY VISUAL
  {
    id: "kun-k2",
    category: "key_visual",
    title: { vi: "KUN K2 Key Visual", en: "KUN K2 Key Visual" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Thể hiện hình ảnh bao bì mới với highlight tính năng K2 gắn kết Canxi vào xương.",
      en: "New packaging visuals highlighting K2 calcium absorption benefit."
    },
    brief: {
      vi: "1. Target Audience\nMom: 25 – 40 tuổi | Quan tâm hình ảnh, tính năng, sạch, đáng tin\nKid: 3 – 11 tuổi | Tận dụng hình ảnh Kun Brand\n2. Objective\nThể hiện hình ảnh bao bì mới\nHighlight tính năng sản phẩm (K2 gắn kết Canxi vào xương)\nThể hiện tính Fresh & purity của ngành hàng sữa tươi\n3. Creative cue\nCần có creative cue ở 2 yếu tố làm nên sản phẩm\nGắn kết (K2 gắn kết Canxi vào xương)\nCao lớn",
      en: "Target: Moms 25-40, Kids 3-11. Objectives: Show new packaging, highlight K2 benefit, fresh & purity. Creative cues: Connection + Growth."
    },
    thumbnail: "/data/key_visual/Kun_K2/KUNK2KV_HOPXANH.png",
    gallery: ["/data/key_visual/Kun_K2/KUNK2KV_HOPXANH.png"],
    tags: ["Key Visual", "K2", "Dairy"]
  },
  {
    id: "kun-galaxy",
    category: "key_visual",
    title: { vi: "KUN Galaxy Key Visual", en: "KUN Galaxy Key Visual" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Câu chuyện Chớp Chớp và Tám Tuốt du hành vũ trụ tìm kiếm hành tinh trái cây.",
      en: "Space travel story with fruit planets."
    },
    brief: {
      vi: "kể câu chuyện nhân vật Chớp Chớp và Tám Tuốt du hành vũ trụ để tìm kiếm những hành tinh trái cây.\nĐịnh hướng hình ảnh: Sử dụng tone & mood huyền bí của vũ trụ với background màu xanh của bầu trời để làm nổi bật màu sắc của sản phẩm. Phong cách thiết kế clean & clear tập trung vào một cụm duy nhất và to nhất trên KV được tạo thành từ sản phẩm, nhân vật và tagline. Visualize hình ảnh trái cây dưới dạng hành tinh để bổ trợ thể hiện câu chuyện vũ trụ.",
      en: "Story of Chớp Chớp & Tám Tuốt traveling the universe for fruit planets. Mysterious cosmic mood, clean & clear design focusing on one large cluster."
    },
    thumbnail: "/data/key_visual/Kun_galaxy/STC_AI_HORIZONTAL_CMYK.png",
    gallery: ["/data/key_visual/Kun_galaxy/STC_AI_HORIZONTAL_CMYK.png"],
    tags: ["Key Visual", "Cosmic", "Fruit"]
  },
  {
    id: "kun-bonggon",
    category: "key_visual",
    title: { vi: "KUN Bông Gòn Key Visual", en: "KUN Cotton Candy Key Visual" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Concept trong vũ trụ đầy sắc màu “Đảo Mùa Hè”. Hình ảnh kẹo bông gòn như đám mây thơ mộng.",
      en: "Summer Island universe concept with cotton candy as dreamy clouds."
    },
    brief: {
      vi: "Concept trong một vũ trụ đầy sắc màu và năng lượng “Đảo Mùa Hè”\nĐịnh hướng hình ảnh: Tone & mood tươi sáng, tự nhiên. Tập trung vào hình ảnh chủ đạo là kẹo bông gòn, được ví như hình ảnh của những đám mây thơ mộng.",
      en: "Colorful energetic “Summer Island” universe. Bright natural mood. Main image: cotton candy as dreamy clouds."
    },
    thumbnail: "/data/key_visual/Kun_bonggon/BONGGON_AI_HORIZONTAL_CMYK.png",
    gallery: ["/data/key_visual/Kun_bonggon/BONGGON_AI_HORIZONTAL_CMYK.png"],
    tags: ["Key Visual", "Summer", "Candy"]
  },
  {
    id: "kun-oi",
    category: "key_visual",
    title: { vi: "KUN Ổi Key Visual", en: "KUN Guava Key Visual" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Làm nổi bật trái ổi xanh lá – hồng. Cảm giác tươi ngon, mát lành.",
      en: "Highlight guava in green-pink. Fresh and refreshing feel."
    },
    brief: {
      vi: "Sử dụng các yếu tố visual dễ nhận biết với trẻ em (màu sắc tươi sáng, nhân vật hoạt hình của KUN). Làm nổi bật trái ổi, màu sắc đặc trưng của vị ổi (xanh lá – hồng). Tạo cảm giác sản phẩm tươi ngon, mát lành, bổ dưỡng. Background tươi mát, gần gũi thiên nhiên. Sữa trái cây tuôn trào cùng lát ổi hồng.",
      en: "Kid-friendly visuals, bright colors, KUN characters. Highlight guava green-pink. Fresh, juicy, nutritious feel. Guava garden background with flowing juice."
    },
    thumbnail: "/data/key_visual/Kun_oi/STCKUNOI_KV_R4_V5.png",
    gallery: ["/data/key_visual/Kun_oi/STCKUNOI_KV_R4_V5.png"],
    tags: ["Key Visual", "Guava", "Fruit", "Kid"]
  },
  {
    id: "kun-tao",
    category: "key_visual",
    title: { vi: "KUN Táo Key Visual", en: "KUN Apple Key Visual" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Nhân vật Chớp Chớp mời gọi nước ép Táo trong quả tách đôi.",
      en: "Chớp Chớp inviting apple juice in halved apple."
    },
    brief: {
      vi: "Ý tưởng hình ảnh chủ đạo: Cụm yếu tố đồ họa chính thể hiện hình ảnh nhân vật Chớp Chớp đang đưa tay ra mời gọi trải nghiệm sản phẩm nước ép Táo Kun, sản phẩm được đặt trong quả Táo tách đôi thể hiện tinh thần tự nhiên, nguyên chất thuần khiết đến từ trái cây thật. Dòng nước tạo nên sự tươi mát.",
      en: "Main visual: Chớp Chớp reaching for Kun Apple juice placed in halved real apple showing natural purity. Flowing water for freshness."
    },
    thumbnail: "/data/key_visual/Kun_tao/PREVIEW.png",
    gallery: ["/data/key_visual/Kun_tao/PREVIEW.png"],
    tags: ["Key Visual", "Apple", "Juice"]
  },

  // BAO BI
  {
    id: "kun-packaging",
    category: "bao_bi",
    title: { vi: "KUN Sữa Tươi Bao bì", en: "KUN Fresh Milk Packaging" },
    client: "KUN",
    year: "2025",
    description: {
      vi: "Giữ yếu tố Sữa tươi, nhấn mạnh HỖ TRỢ CAO LỚN VÀ ĐỀ KHÁNG, vitamin K2.",
      en: "Retain Fresh Milk elements, emphasize height & immunity support + K2."
    },
    brief: {
      vi: "Bare in mind: Giữ được yếu tố Sữa tươi trên bao bì\n- Nhấn mạnh end-benefit: HỖ TRỢ CAO LỚN VÀ ĐỀ KHÁNG\n- Emphasize RTB vitamin K2 có trong sữa tươi thông qua visual\n- Keep KUN EQUITY: DYNAMIC FUN & IMAGINATION\nCác yếu tố cần giữ lại trên packaging: Logo KUN và Lof, Claim “Hỗ trợ cao lớn và đề kháng”",
      en: "Keep Fresh Milk element. Emphasize height & immunity benefit + K2 vitamin. Maintain KUN equity: Dynamic Fun & Imagination. Keep logo, Lof, key claim."
    },
    thumbnail: "/data/bao_bi/kun/180_ID_R_30.png",
    gallery: ["/data/bao_bi/kun/180_ID_R_30.png"],
    tags: ["Packaging", "Dairy", "K2"]
  },
  {
    id: "nuvi-packaging",
    category: "bao_bi",
    title: { vi: "NuVi Sữa Chua Uống Bao bì", en: "NuVi Drinking Yogurt Packaging" },
    client: "NuVi",
    year: "2025",
    description: {
      vi: "Định vị cao cấp, hiện đại, tone màu tự nhiên, highlight functional benefit.",
      en: "Premium modern positioning, natural tones, functional benefits."
    },
    brief: {
      vi: "Phát triển bao bì các sản phẩm NuVi Sữa chua uống men sống với định vị mới cao cấp hơn, hiện đại hơn. Clean and clear label. Premium, modern. Nice, Attractive, kiddy. Các tone màu tự nhiên, xanh lá, xanh dương, trắng. Phối màu hiện đại, đơn giản, solid. Với mẹ: Highlight các yếu tố functional benefit. Với bé: Hình ảnh dễ thương, thu hút.",
      en: "New premium modern positioning for higher-income. Clean clear label. Natural tones green/blue/white. Modern simple solid colors. Functional benefits for moms, cute imagery for kids."
    },
    thumbnail: "/data/bao_bi/nuvi/baobi.jpg",
    gallery: [
      "/data/bao_bi/nuvi/baobi.jpg",
      "/data/bao_bi/nuvi/chai/CD.png",
      "/data/bao_bi/nuvi/lốc/CD_1.png"
    ],
    tags: ["Packaging", "Yogurt", "Premium"]
  },
  {
    id: "gumi-packaging",
    category: "bao_bi",
    title: { vi: "Gumi Hệ Thống Bao bì", en: "Gumi Packaging System" },
    client: "Gumi",
    year: "2025",
    description: {
      vi: "Hệ thống bao bì đa dạng cho cuộn gói, cuộn hộp, lát (19+ biến thể).",
      en: "Comprehensive packaging system across roll, box, slice formats (19+ variants)."
    },
    brief: {
      vi: "Thiết kế hệ thống bao bì nhất quán, hiện đại cho nhiều quy cách đóng gói sản phẩm Gumi (cuộn, gói, hộp, lát), đảm bảo tính nhận diện đồng bộ trên kệ hàng.",
      en: "Design a consistent and modern packaging system across multiple formats for Gumi (rolls, boxes, bags, slices), ensuring strong shelf recognition."
    },
    thumbnail: "/data/bao_bi/gumi/cuộn/gói/F1.png",
    gallery: [
      "/data/bao_bi/gumi/cuộn/gói/F1.png",
      "/data/bao_bi/gumi/cuộn/hộp/H1.png",
      "/data/bao_bi/gumi/lát/RBL.png"
    ],
    tags: ["Packaging", "System", "Variants"]
  },

  // TVC
  {
    id: "changshin-tvc",
    category: "tvc",
    title: { vi: "Changshin 30 Năm Corporate Video", en: "Changshin 30 Years Corporate Video" },
    client: "Changshin Vietnam",
    year: "2025",
    description: {
      vi: "Video kỷ niệm 30 năm với nhịp điệu nhanh, lấy cảm hứng từ chuyển động chân Nike.",
      en: "30-year anniversary video with dynamic Nike footstep rhythm."
    },
    brief: {
      vi: "Sản xuất video kỷ niệm 30 năm hoạt động tại Việt Nam cho Changshin Vietnam – đối tác gia công chiến lược của Nike. Dự án bao gồm toàn bộ quy trình Storyboard – Shooting – Editing, với định hướng xây dựng một corporate video mang nhịp điệu nhanh, hiện đại. Ý tưởng sáng tạo lấy cảm hứng từ chuyển động “nhịp chân” khi mang giày, được biên tập theo nhịp nhạc dồn dập. Video vừa tôn vinh sản phẩm, vừa dẫn dắt người xem khám phá quy trình một tập thể sản xuất giày Nike. Các cột mốc phát triển được thể hiện bằng collage art. Tagline “We made it”.",
      en: "30-year anniversary corporate video for Changshin (Nike strategic partner). Full production. Fast modern rhythm inspired by footsteps. Collage art for milestones. “We made it” tagline."
    },
    thumbnail: "/data/tvc/changshin/CHANGSHIN_CORPVIDEO_v5(compressed)_compressed.mp4",
    gallery: [],
    video: "/data/tvc/changshin/CHANGSHIN_CORPVIDEO_v5(compressed)_compressed.mp4",
    tags: ["TVC", "Corporate", "Nike"]
  },
  {
    id: "shinhan-life-tvc",
    category: "tvc",
    title: { vi: "Shinhan Life Corporate Video", en: "Shinhan Life Corporate Video" },
    client: "Shinhan Life Vietnam",
    year: "2025",
    description: {
      vi: "Corporate video truyền tải hành trình thương hiệu bảo hiểm bằng collage art hiện đại.",
      en: "Insurance brand journey told through modern collage art."
    },
    brief: {
      vi: "Sản xuất corporate video cho Shinhan Life Vietnam với mục tiêu truyền tải hành trình phát triển thương hiệu một cách sinh động và dễ tiếp cận. Movement đảm nhiệm trọn gói Storyboard – Casting Talent – Shooting – Editing. Video được triển khai với phong cách collage art hiện đại, kết hợp hình ảnh, typography và chuyển động linh hoạt nhằm biến các nội dung mang tính thông tin thành trải nghiệm thị giác thú vị.",
      en: "Corporate video for Shinhan Life Vietnam. Full production. Modern collage art style turning informational content into engaging visual experience."
    },
    thumbnail: "/data/tvc/shinhan_life/Shinhan_life.mp4",
    gallery: [],
    video: "/data/tvc/shinhan_life/Shinhan_life.mp4",
    tags: ["TVC", "Corporate", "Insurance"]
  },
  {
    id: "th-true-tea-tvc",
    category: "tvc",
    title: { vi: "TH True Tea TVC", en: "TH True Tea TVC" },
    client: "TH True Tea",
    year: "2025",
    description: {
      vi: "TVC Gen Z với 4 nhân vật trẻ và TH True Tea là refreshing companion.",
      en: "Gen Z TVC with 4 young characters and TH True Tea as daily refresh."
    },
    brief: {
      vi: "TVC TH TRUE TEA\nCâu chuyện theo chân TH True Tea như một người bạn đồng hành trong nhịp sống năng động hằng ngày của bốn bạn trẻ tại TP.HCM, mỗi người đại diện cho một hương vị sản phẩm khác nhau. Music producer, Designer Game, Stylist, Dancer. Trong từng khoảnh khắc, TH True Tea luôn xuất hiện như một “refreshing companion” giúp họ nạp lại năng lượng và duy trì sự hứng khởi. Movement đã hiện thực hóa ý tưởng này bằng cách xây dựng một mood TVC trẻ trung, tươi mới, thể hiện trọn vẹn tinh thần năng động và vibe đậm chất Gen Z.",
      en: "TH True Tea TVC following 4 young characters in HCMC (Music producer, Game Designer, Stylist, Dancer). Tea as their daily refreshing companion. Youthful fresh Gen Z mood."
    },
    thumbnail: "/data/tvc/th_true_tea/color_1014_compressed.mp4",
    gallery: [],
    video: "/data/tvc/th_true_tea/color_1014_compressed.mp4",
    tags: ["TVC", "Gen Z", "Beverage"]
  },
  {
    id: "th-true-food-tvc",
    category: "tvc",
    title: { vi: "TH True Food TVC Tết 2026", en: "TH True Food Tết 2026 TVC" },
    client: "TH True Food",
    year: "2025",
    description: {
      vi: "Mở rộng từ TVC cũ, bổ sung phân cảnh phù hợp platform “Hạnh phúc” Tết 2026.",
      en: "Extended from previous TVC with new scenes for 2026 Happiness platform."
    },
    brief: {
      vi: "Năm 2025, TH đã xây dựng platform truyền thông (Hạnh phúc) dịp Tết âm lịch dành cho các sản phẩm đồ uống và thực phẩm. Chiến lược Tết 2026 mong muốn tiếp tục truyền tải thông điệp hạnh phúc và cần tìm cách thể hiện câu chuyện theo 1 cách sáng tạo và hấp dẫn hơn. MM đã dựa trên TVC cũ để thêm các phân cảnh bổ sung phù hợp với định hướng 2026 hơn.",
      en: "TH built Happiness platform for Tết 2025. 2026 campaign wants more creative storytelling. Extended from old TVC with new scenes aligned to 2026 direction."
    },
    thumbnail: "/data/tvc/th_true_food/Food_Online_5_2412_compressed.mp4",
    gallery: [],
    video: "/data/tvc/th_true_food/Food_Online_5_2412_compressed.mp4",
    tags: ["TVC", "Tết", "Food"]
  },
  {
    id: "th-true-tea-tet-tvc",
    category: "tvc",
    title: { vi: "TH True Tea Tết TVC", en: "TH True Tea Tết TVC" },
    client: "TH True Tea",
    year: "2025",
    description: {
      vi: "Phiên bản Tết của TH True Tea, tiếp nối platform Hạnh phúc 2026.",
      en: "Tết edition of TH True Tea continuing Happiness platform."
    },
    brief: {
      vi: "Năm 2025, TH đã xây dựng platform truyền thông (Hạnh phúc) dịp Tết âm lịch dành cho các sản phẩm đồ uống và thực phẩm. Chiến lược Tết 2026 mong muốn tiếp tục truyền tải thông điệp hạnh phúc và cần tìm cách thể hiện câu chuyện theo 1 cách sáng tạo và hấp dẫn hơn.",
      en: "TH Happiness platform for Tết. 2026 wants more creative storytelling."
    },
    thumbnail: "/data/tvc/th_true_tea_tet/Tea_Online_0701_notext_compressed.mp4",
    gallery: [],
    video: "/data/tvc/th_true_tea_tet/Tea_Online_0701_notext_compressed.mp4",
    tags: ["TVC", "Tết", "Beverage"]
  },

  // ACTIVATION
  {
    id: "korean-melon-activation",
    category: "activation",
    title: { vi: "Korean Melon Activation", en: "Korean Melon Activation" },
    client: "aT Center",
    year: "2025",
    description: {
      vi: "Activation quảng bá dưa lê Hàn Quốc với booth clean-minimal và trò chơi tương tác.",
      en: "Korean melon promotional activation with clean-minimal booth."
    },
    brief: {
      vi: "aT Center (cầu nối chiến lược thúc đẩy xuất khẩu nông sản, thực phẩm Hàn Quốc ra thế giới) hợp tác cùng Movement triển khai activation hoạt động quảng bá trái dưa lê Hàn Quốc lần đầu nhập khẩu chính ngạch vào Việt Nam.\nMovement thiết kế booth với tạo hình nhân vật dưa lê thân thiện, đáng yêu. Không gian trưng bày được xây dựng theo phong cách clean - minimal thường thấy của Hàn Quốc, kết hợp chất liệu mang hơi hướng nông nghiệp như gỗ, lót rơm, giỏ mây đựng dưa lê. Các hashtag về lợi ích của trái dưa lê được lồng ghép trong khu vực check-in. Bên cạnh đó, khu trưng bày tích hợp mini booth dùng thử để PG cắt dưa mời khách hàng dùng, kết hợp với trò chơi ném vòng nhằm tăng tính tương tác.",
      en: "aT Center x Movement activation for first official Korean melon import to Vietnam. Friendly melon character booth. Clean-minimal Korean style with wood, straw, rattan. Benefit hashtags at check-in. Sampling + ring toss game for interaction."
    },
    thumbnail: "/data/activation/korean_melon/0705_01.png",
    gallery: ["/data/activation/korean_melon/0705_01.png"],
    tags: ["Activation", "Booth", "Agri"]
  },

  // EVENT (no brief, only assets)
  {
    id: "changshin-event",
    category: "event",
    title: { vi: "Changshin Event Photography", en: "Changshin Event Photography" },
    client: "Changshin",
    year: "2025",
    description: { vi: "Bộ ảnh sự kiện Changshin – đối tác gia công Nike.", en: "Event photography for Changshin (Nike partner)." },
    brief: {
      vi: "Bộ ảnh ghi lại toàn bộ hoạt động, không khí sôi nổi và các khoảnh khắc đáng nhớ của sự kiện kỷ niệm Changshin.",
      en: "Photography collection capturing all key activities, vibrant atmosphere and memorable moments of the Changshin event."
    },
    thumbnail: "/data/event/changshin/z7963746452497_e41813fd7b19bd21adf8895af7f6043f.jpg",
    gallery: [
      "/data/event/changshin/z7963746452497_e41813fd7b19bd21adf8895af7f6043f.jpg",
      "/data/event/changshin/z7963746505913_e21e520cfc152c22de43d53885c6fb59.jpg",
      "/data/event/changshin/z7963746599242_b272792292a7950b6bfa22f49437413d.jpg",
      "/data/event/changshin/z7963746667820_bfdad8605075b01d11b2a3c1528b3591.jpg",
      "/data/event/changshin/z7963746780353_174eb980dadd6fce18a36bcfd681c5e0.jpg",
      "/data/event/changshin/z7963746888814_09f7819934a7e6fe82d76b119ff17a61.jpg",
      "/data/event/changshin/z7963746971249_afed52592b8b03b9fe6b94e8d58d8633.jpg",
      "/data/event/changshin/z7963747133175_fa8e008edf0edebb471b9b515f04a451.jpg",
      "/data/event/changshin/z7963747209595_aade279e2fccba1c5c25a718a15cd650.jpg",
      "/data/event/changshin/z7963747394460_1ff260fba0953044457de8581a9706b1.jpg",
      "/data/event/changshin/z7963747654507_a03930f3801ac7bacb8f778a05f3e77e.jpg",
      "/data/event/changshin/z7963747902607_f790abcfdb005baa975f6cd2bea67e1e.jpg"
    ],
    tags: ["Event", "Photography"]
  },
  {
    id: "locknlock-event",
    category: "event",
    title: { vi: "LocknLock Event Photography", en: "LocknLock Event Photography" },
    client: "LocknLock",
    year: "2025",
    description: { vi: "Bộ ảnh sự kiện LocknLock.", en: "LocknLock event photography." },
    brief: {
      vi: "Bộ ảnh sự kiện ghi lại không khí, cách bài trí không gian và các hoạt động kết nối của thương hiệu LocknLock.",
      en: "Event photography capturing the brand atmosphere, space layout and engaging activities for LocknLock."
    },
    thumbnail: "/data/event/LocknLock/z7963710188558_3a66def7902a2e566e1238102159c980.jpg",
    gallery: [
      "/data/event/LocknLock/z7963710188558_3a66def7902a2e566e1238102159c980.jpg",
      "/data/event/LocknLock/z7963710450923_1bee0db7006758848ff8b277fde5355d.jpg",
      "/data/event/LocknLock/z7963711007023_7503d5ec6f8fcfcba2475c428b2e56f4.jpg",
      "/data/event/LocknLock/z7963711245954_9c627fcf5dd66e079378cf351a5b7cca.jpg",
      "/data/event/LocknLock/z7963711455531_a9094edc070565b2329c5c9acde78487.jpg",
      "/data/event/LocknLock/z7963711709095_c85a0db98d8b0e2d6efb914ac936ffcf.jpg",
      "/data/event/LocknLock/z7963711745436_8a3e774db2a2b4fb436bf1d3b8f6cab7.jpg"
    ],
    tags: ["Event", "Photography"]
  },
  {
    id: "mekong-event",
    category: "event",
    title: { vi: "Mekong Event Photography", en: "Mekong Event Photography" },
    client: "Mekong",
    year: "2025",
    description: { vi: "Hình ảnh sự kiện Mekong.", en: "Mekong event photography." },
    brief: {
      vi: "Hình ảnh tư liệu chất lượng cao ghi lại các khoảnh khắc, không khí tổ chức và đại biểu tham dự sự kiện Mekong.",
      en: "High-quality event photography capturing key moments, organizational atmosphere and delegates at the Mekong event."
    },
    thumbnail: "/data/event/mekong/z7963730182446_f9bbe0dfa2c593459865607da3f6ebe1.jpg",
    gallery: [
      "/data/event/mekong/z7963730182446_f9bbe0dfa2c593459865607da3f6ebe1.jpg",
      "/data/event/mekong/z7963730397983_126cf7597e8e85becad75b3e843e24d3.jpg",
      "/data/event/mekong/z7963730701236_7094625a9cca2aa2be49c4d303b2e13a.jpg",
      "/data/event/mekong/z7963731626749_7c6c63887b8c34ae12d7989d2d75eac1.jpg",
      "/data/event/mekong/z7963731626797_619aaa88014034ff451ee9c78cb6b932.jpg",
      "/data/event/mekong/z7963731699204_275d4b4c4c17223f8d7852e4c43f3ffd.jpg",
      "/data/event/mekong/z7963731802201_5137b05a79dcf16bbb4cd51501ddc70d.jpg"
    ],
    tags: ["Event", "Photography"]
  },
  {
    id: "shinhan-event",
    category: "event",
    title: { vi: "Shinhan Event Photography", en: "Shinhan Event Photography" },
    client: "Shinhan",
    year: "2025",
    description: { vi: "Bộ ảnh sự kiện Shinhan.", en: "Shinhan event photography." },
    brief: {
      vi: "Hình ảnh ghi nhận không khí tổ chức sự kiện chuyên nghiệp và các hoạt động tương tác khách hàng của Shinhan.",
      en: "Event photography documenting the professional organizational atmosphere and client interactions for Shinhan."
    },
    thumbnail: "/data/event/shinhan/z7963748135982_8b26de58a635c64aa99f41d7bcb23328.jpg",
    gallery: [
      "/data/event/shinhan/z7963748135982_8b26de58a635c64aa99f41d7bcb23328.jpg",
      "/data/event/shinhan/z7963757217532_248c52f58e674602683ef2b3e6fa8672.jpg",
      "/data/event/shinhan/z7963757965239_ca5ee2531504b34a63c98303c784c09c.jpg",
      "/data/event/shinhan/z7963758036136_5a56acbbbf9fefa05875cab3cadbc39e.jpg",
      "/data/event/shinhan/z7963758070334_29af8e81fc914377b232d47a9ef109e3.jpg",
      "/data/event/shinhan/z7963758162221_1c2cb28f878030f401bc9649cc9f325e.jpg"
    ],
    tags: ["Event", "Photography", "Finance"]
  },

  // SOCIAL
  {
    id: "chinsu-social",
    category: "social",
    title: { vi: "Chinsu Social Content", en: "Chinsu Social Content" },
    client: "Chinsu",
    year: "2025",
    description: { vi: "Nội dung social cho Chinsu USA – Instagram @chinsu_usa.", en: "Social content for Chinsu USA Instagram." },
    brief: {
      vi: "Xây dựng định hướng nội dung và hình ảnh cho kênh Instagram chính thức của Chinsu tại thị trường Mỹ, tập trung vào phong cách hiện đại và tiếp cận khách hàng quốc tế.",
      en: "Establish content and visual direction for Chinsu USA official Instagram channel, focusing on modern aesthetics and international appeal."
    },
    thumbnail: "/data/social/Chinsu/Info.txt",
    gallery: [],
    tags: ["Social", "Instagram"]
  }
];
