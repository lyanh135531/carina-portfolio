export type Locale = "vi" | "en";

export type PageId = "home" | "services" | "about" | "credential" | "blog" | "contact";

export type LocalizedText = Readonly<Record<Locale, string>>;

export type NavItem = Readonly<{
  pageId: PageId;
  label: LocalizedText;
  path: string;
}>;

export type ServiceId =
  | "commercial"
  | "fashion"
  | "creative-design"
  | "commercial-videography"
  | "catalogue-ecommerce"
  | "digital-image-retouch"
  | "integrated-marketing"
  | "animation";

export type ImageAsset = Readonly<{
  src: string;
  alt: LocalizedText;
}>;

export type ServiceItem = Readonly<{
  id: ServiceId;
  title: LocalizedText;
  image: ImageAsset;
  href: string;
  disabled?: true;
}>;

export type BlogPost = Readonly<{
  date: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: ImageAsset;
  disabled?: true;
}>;

export type CredentialItem = Readonly<{
  title: LocalizedText;
  image: ImageAsset;
  disabled?: true;
}>;

export type AboutBlock = Readonly<{
  eyebrow: LocalizedText;
  vi: readonly string[];
  en: readonly string[];
}>;

export type PageMeta = Readonly<{
  title: LocalizedText;
  mobileTitle: LocalizedText;
  kicker: LocalizedText;
}>;

export const defaultLocale: Locale = "vi";

export const locales: readonly Locale[] = ["vi", "en"];

export const navigationItems: readonly NavItem[] = [
  {
    pageId: "home",
    label: { vi: "Tổng quát", en: "Overview" },
    path: "/",
  },
  {
    pageId: "services",
    label: { vi: "Portfolio", en: "Portfolio" },
    path: "/tron-services",
  },
  {
    pageId: "about",
    label: { vi: "Freelancer", en: "Freelancer" },
    path: "/about-tron",
  },
];

export const routeByPageId: Readonly<Record<PageId, string>> = {
  home: "/",
  services: "/tron-services",
  about: "/about-tron",
  credential: "/tron-credential",
  blog: "/blog",
  contact: "/contact",
};

export const getLocalizedPath = (locale: Locale, path: string): string => {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
};

export const pageMeta: Readonly<Record<PageId, PageMeta>> = {
  home: {
    title: {
      vi: "Carina Portfolio - Account Executive / Producer",
      en: "Carina Portfolio - Account Executive / Producer",
    },
    mobileTitle: {
      vi: "Carina Portfolio",
      en: "Carina Portfolio",
    },
    kicker: {
      vi: "Career Overview",
      en: "Career Overview",
    },
  },
  services: {
    title: { vi: "Tròn Service", en: "Tròn Service" },
    mobileTitle: { vi: "Dịch Vụ Tròn House", en: "Tròn Service" },
    kicker: { vi: "Dịch vụ sáng tạo", en: "Creative Services" },
  },
  about: {
    title: { vi: "About Us", en: "About Us" },
    mobileTitle: { vi: "About Us", en: "About Us" },
    kicker: { vi: "Dare To Breakthrough", en: "Dare To Breakthrough" },
  },
  credential: {
    title: { vi: "Our Projects", en: "Our Projects" },
    mobileTitle: { vi: "Our Projects", en: "Our Projects" },
    kicker: { vi: "Selected Credentials", en: "Selected Credentials" },
  },
  blog: {
    title: { vi: "Blog", en: "Blog" },
    mobileTitle: { vi: "Blog", en: "Blog" },
    kicker: { vi: "Creative In You", en: "Creative In You" },
  },
  contact: {
    title: { vi: "Contact", en: "Contact" },
    mobileTitle: { vi: "Contact", en: "Contact" },
    kicker: { vi: "Contact Tròn", en: "Contact Tròn" },
  },
};

export const assets = {
  logo: "/assets/tronhouse/home/logo.jpg",
  orbitLogo: "/assets/tronhouse/home/render-final-yellow-square-1-1dca030dd7.gif",
  cosmicHero: "/assets/tronhouse/home/anh-nen-cover-b32bbfbf9e.jpg",
  serviceHero: "/assets/tronhouse/services/cover-fb-0310-dfc90a463b.jpg",
  homeCampaignA: "/assets/tronhouse/home/1759489307168-5aba5c97eb.png",
  homeCampaignB: "/assets/tronhouse/home/hinh-anh-23-04-2026-luc-16-39-9ae2ce6a1c.jpg",
} as const;

export const services: readonly ServiceItem[] = [
  {
    id: "commercial",
    title: { vi: "Commercial", en: "Commercial" },
    href: "/commercial-campaign",
    image: {
      src: "/assets/tronhouse/home/dich-vu-commercial-800-1068-px-1-4a802baadb.gif",
      alt: { vi: "Commercial campaign", en: "Commercial campaign" },
    },
  },
  {
    id: "fashion",
    title: { vi: "Fashion", en: "Fashion" },
    href: "/fashion-campaign",
    image: {
      src: "/assets/tronhouse/home/dv-fashion-b8310eec39.gif",
      alt: { vi: "Fashion campaign", en: "Fashion campaign" },
    },
  },
  {
    id: "creative-design",
    title: { vi: "Creative Design", en: "Creative Design" },
    href: "/creative-concept",
    image: {
      src: "/assets/tronhouse/home/dich-vu-creative-800-1068-px-c2c63ea8e1.gif",
      alt: { vi: "Creative design", en: "Creative design" },
    },
  },
  {
    id: "commercial-videography",
    title: { vi: "Commercial Videography", en: "Commercial Videography" },
    href: "/tvc-videography-film",
    image: {
      src: "/assets/tronhouse/home/dv-video-final-4e151314e6.gif",
      alt: { vi: "Commercial videography", en: "Commercial videography" },
    },
  },
  {
    id: "catalogue-ecommerce",
    title: { vi: "Catalogue Ecommerce", en: "Catalogue Ecommerce" },
    href: "/catalogue-ecommerce",
    image: {
      src: "/assets/tronhouse/home/dich-vu-cata-800-1068-px-06bf8e6505.gif",
      alt: { vi: "Catalogue ecommerce", en: "Catalogue ecommerce" },
    },
  },
  {
    id: "digital-image-retouch",
    title: { vi: "Digital Image Retouch", en: "Digital Image Retouch" },
    href: "/digital-image-retouch",
    image: {
      src: "/assets/tronhouse/home/dich-vu-di-800-1068-px-1-c55ae648b0.gif",
      alt: { vi: "Digital image retouch", en: "Digital image retouch" },
    },
  },
  {
    id: "integrated-marketing",
    title: {
      vi: "Integrated Marketing Communication",
      en: "Integrated Marketing Communication",
    },
    href: "/IMC",
    image: {
      src: "/assets/tronhouse/home/brand1-c2f5e204b6.gif",
      alt: {
        vi: "Integrated marketing communication",
        en: "Integrated marketing communication",
      },
    },
  },
  {
    id: "animation",
    title: { vi: "2D - 3D Animation Videography", en: "2D - 3D Animation Videography" },
    href: "/2D-3D-animation-cgi",
    image: {
      src: "/assets/tronhouse/home/dich-vu-2d-3d-1-1c563cb859.gif",
      alt: { vi: "2D and 3D animation", en: "2D and 3D animation" },
    },
  },
];

export const blogPosts: readonly BlogPost[] = [
  {
    date: "08-05-2026",
    title: {
      vi: "Các xu hướng thiết kế đáng chú ý nhất năm 2026",
      en: "Notable Design Trends In 2026",
    },
    excerpt: {
      vi: "Năm 2026 đánh dấu sự chuyển dịch rõ rệt của ngành thiết kế sau làn sóng bùng nổ AI. Người dùng tìm kiếm nhiều hơn ở cảm xúc, tính chân thật và dấu ấn con người.",
      en: "Design in 2026 moves beyond polished visuals toward emotional, authentic and human-centered experiences after the AI boom.",
    },
    image: {
      src: "/assets/tronhouse/home/images-1-1-979ded4238.jpg",
      alt: { vi: "Xu hướng thiết kế 2026", en: "Design trends 2026" },
    },
  },
  {
    date: "06-05-2026",
    title: {
      vi: "Designer và AI: Sự thay đổi của ngành thiết kế năm 2026",
      en: "Designers And AI: How Design Changes In 2026",
    },
    excerpt: {
      vi: "AI đang trở thành một phần quen thuộc trong quy trình thiết kế hiện đại, hỗ trợ kỹ thuật để đội ngũ tập trung vào chiến lược, trải nghiệm và chất lượng tổng thể.",
      en: "AI is becoming familiar in modern design workflows, helping teams move from manual tasks to strategy, experience and overall quality.",
    },
    image: {
      src: "/assets/tronhouse/home/1759489307168-5aba5c97eb.png",
      alt: { vi: "Designer và AI", en: "Designer and AI" },
    },
  },
  {
    date: "23-04-2026",
    title: {
      vi: "AI và thời trang 2026: Sự cộng tác giữa sức mạnh thuật toán và trực giác con người",
      en: "AI And Fashion 2026: Algorithms Meet Human Intuition",
    },
    excerpt: {
      vi: "Trong nhiều phòng thiết kế, ý tưởng đầu tiên có thể đến từ một dòng lệnh, một bảng dữ liệu hoặc một mô phỏng do AI đề xuất chỉ trong vài giây.",
      en: "In many design rooms, first ideas now come from prompts, datasets or AI simulations proposed in seconds.",
    },
    image: {
      src: "/assets/tronhouse/home/hinh-anh-23-04-2026-luc-16-39-9ae2ce6a1c.jpg",
      alt: { vi: "AI và thời trang", en: "AI and fashion" },
    },
  },
  {
    date: "23-04-2026",
    title: {
      vi: "10 ứng dụng AI đột phá trong các chiến dịch marketing hiện nay",
      en: "10 Breakthrough AI Applications In Marketing Campaigns",
    },
    excerpt: {
      vi: "AI đang thay đổi cách các thương hiệu phân tích dữ liệu, phát triển ý tưởng, cá nhân hóa thông điệp và đo lường hiệu quả chiến dịch.",
      en: "AI is changing how brands analyze data, develop ideas, personalize messages and measure campaign performance.",
    },
    image: {
      src: "/assets/tronhouse/blog/hinh-anh-23-04-2026-luc-14-06-5d63094b40.jpg",
      alt: { vi: "Ứng dụng AI trong marketing", en: "AI in marketing" },
    },
  },
  {
    date: "22-04-2026",
    title: {
      vi: "Khám phá ngay 10 công cụ AI tạo hình ảnh tốt nhất 2026",
      en: "Explore 10 Leading AI Image Tools In 2026",
    },
    excerpt: {
      vi: "Các công cụ tạo hình ảnh bằng AI mở ra quy trình sáng tạo nhanh hơn cho concept, moodboard và thử nghiệm hình ảnh thương hiệu.",
      en: "AI image tools unlock faster creative workflows for concepts, moodboards and brand visual experiments.",
    },
    image: {
      src: "/assets/tronhouse/blog/tao-anh-bang-ai-ee4f8a976d.png",
      alt: { vi: "Công cụ tạo ảnh bằng AI", en: "AI image tools" },
    },
  },
  {
    date: "17-04-2026",
    title: {
      vi: "Amazon 2026: AI đang thay đổi cách quảng cáo thế nào?",
      en: "Amazon 2026: How AI Is Changing Advertising",
    },
    excerpt: {
      vi: "Từ tối ưu nội dung đến gợi ý quảng cáo, AI đang trở thành cánh tay đắc lực cho người bán hàng trên các sàn thương mại điện tử.",
      en: "From content optimization to ad recommendations, AI is becoming a practical assistant for ecommerce sellers.",
    },
    image: {
      src: "/assets/tronhouse/blog/amazon-a8a04d6dce.jpg",
      alt: { vi: "Amazon và AI", en: "Amazon and AI" },
    },
  },
];

export const credentials: readonly CredentialItem[] = [
  {
    title: { vi: "2D Animation 3D CGI VFX", en: "2D Animation 3D CGI VFX" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-2d-3d-cgi-96e98a5a2f.gif",
      alt: { vi: "2D 3D CGI credential", en: "2D 3D CGI credential" },
    },
  },
  {
    title: { vi: "Amazon", en: "Amazon" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-amazon-0f7d8e2744.gif",
      alt: { vi: "Amazon credential", en: "Amazon credential" },
    },
  },
  {
    title: { vi: "Homeliving Interior", en: "Homeliving Interior" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-homeliving-e741324341.gif",
      alt: { vi: "Homeliving interior credential", en: "Homeliving interior credential" },
    },
  },
  {
    title: { vi: "Fashion Credential", en: "Fashion Credential" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-fashion-c425885c21.png",
      alt: { vi: "Fashion credential", en: "Fashion credential" },
    },
  },
  {
    title: { vi: "Design", en: "Design" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-design-94a1243cf0.png",
      alt: { vi: "Design credential", en: "Design credential" },
    },
  },
  {
    title: { vi: "Food Credential", en: "Food Credential" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-fb-be5a552c1d.png",
      alt: { vi: "Food credential", en: "Food credential" },
    },
  },
  {
    title: { vi: "Jewelry Credential", en: "Jewelry Credential" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-jewelry-f8f7170c62.png",
      alt: { vi: "Jewelry credential", en: "Jewelry credential" },
    },
  },
  {
    title: { vi: "Sportwear", en: "Sportwear" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-sportwear-03c8ceb490.png",
      alt: { vi: "Sportwear credential", en: "Sportwear credential" },
    },
  },
  {
    title: { vi: "Kids", en: "Kids" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-kids-8ac5d7ae27.png",
      alt: { vi: "Kids credential", en: "Kids credential" },
    },
  },
  {
    title: { vi: "Business Profile", en: "Business Profile" },
    image: {
      src: "/assets/tronhouse/credential/thumbnail-profile-f2be92a3f9.gif",
      alt: { vi: "Business profile credential", en: "Business profile credential" },
    },
  },
];

export const aboutBlocks: readonly AboutBlock[] = [
  {
    eyebrow: {
      vi: "Dare To Break Patterns - To Unlearn, To Feel, To Begin Again",
      en: "Dare To Break Patterns - To Unlearn, To Feel, To Begin Again",
    },
    vi: [
      "TRÒN là một fullstack creative marketing agency với tư duy đột phá, nơi những ý tưởng táo bạo được chuyển hóa thành giải pháp chiến lược, kết hợp nhuần nhuyễn giữa sáng tạo, công nghệ và dữ liệu.",
      "Chúng tôi không chỉ tạo chiến dịch, mà tìm kiếm những đột phá thực sự trong từng chiến dịch. Với TRÒN, sáng tạo không dừng ở ý tưởng, đó là chìa khóa để thương hiệu vượt qua giới hạn.",
      "TRÒN ứng dụng công nghệ và AI không để thay thế, mà để khuếch đại sáng tạo. Để những ý tưởng đi sâu hơn, chạm đến cảm xúc nhiều hơn và tạo ra tác động có chủ đích.",
    ],
    en: [
      "TRÒN is a breakthrough full stack creative marketing agency where daring ideas meet strategic execution, blending creativity, technology and data to unlock brand potential.",
      "We are not just creating campaigns, we create breakthroughs. At TRÒN, creativity is more than expression; it is a business force.",
      "We use technology and AI not to replace creativity, but to amplify it, go deeper, feel more and create with intention.",
    ],
  },
  {
    eyebrow: {
      vi: "Dare To Break Boundaries - We Encourage Self-Creative Development",
      en: "Dare To Break Boundaries - We Encourage Self-Creative Development",
    },
    vi: [
      "Chúng tôi không chỉ theo đuổi sự tăng trưởng, mà tìm kiếm sự phát triển trọn vẹn cho thương hiệu và cho cả những người ở phía sau thương hiệu.",
      "Tại TRÒN, chúng tôi không chỉ xây dựng chiến dịch, mà kiến tạo một văn hóa nơi sự sáng tạo được nuôi dưỡng, con người được phát triển và những chuẩn mực mới được định hình.",
      "Với đội ngũ kinh nghiệm từng hợp tác cùng nhiều thương hiệu lớn tại Việt Nam lẫn quốc tế, TRÒN tự tin cùng bạn đưa ra các phương án tối ưu nhất.",
    ],
    en: [
      "We do not just pursue growth. We pursue the fullest expression of growth for brands and for the people behind them.",
      "At TRÒN, we build a culture where creativity flourishes, individuals thrive and new standards for the creative industry are shaped.",
      "With experience collaborating with major brands in Vietnam and internationally, TRÒN is ready to craft practical, measurable creative solutions.",
    ],
  },
];

export const clientLogos: readonly ImageAsset[] = [
  { src: "/assets/tronhouse/home/acfc-0072a7cd09.png", alt: { vi: "ACFC", en: "ACFC" } },
  { src: "/assets/tronhouse/home/thien-long-db58e73c67.png", alt: { vi: "Thiên Long", en: "Thien Long" } },
  { src: "/assets/tronhouse/home/masan-consumer-4e90d4eef6.png", alt: { vi: "Masan", en: "Masan" } },
  { src: "/assets/tronhouse/home/nike-by-acfc-7bbf768e4f.png", alt: { vi: "Nike", en: "Nike" } },
  { src: "/assets/tronhouse/home/vietnam-airlines-47eb9696d4.png", alt: { vi: "Vietnam Airlines", en: "Vietnam Airlines" } },
  { src: "/assets/tronhouse/home/amazon-final-77423225dd.png", alt: { vi: "Amazon", en: "Amazon" } },
  { src: "/assets/tronhouse/home/ikea-final-2b83fd3f5c.png", alt: { vi: "IKEA", en: "IKEA" } },
  { src: "/assets/tronhouse/home/couple-tx-5ec14b8e1d.png", alt: { vi: "Couple TX", en: "Couple TX" } },
  { src: "/assets/tronhouse/home/lazada-9b63437c3f.png", alt: { vi: "Lazada", en: "Lazada" } },
  { src: "/assets/tronhouse/home/all-0000-nivea-fix-cb7b2b28e5.png", alt: { vi: "Nivea", en: "Nivea" } },
  { src: "/assets/tronhouse/home/all-0008-sony-1-11a297f028.png", alt: { vi: "Sony", en: "Sony" } },
  { src: "/assets/tronhouse/home/all-0005-vivo-4486d770b9.png", alt: { vi: "Vivo", en: "Vivo" } },
];
