export type Locale = "vi" | "en";

export type PageId = "home" | "services" | "about" | "credential" | "contact";

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

export const navigationItems: readonly NavItem[] = [
  {
    pageId: "home",
    label: { vi: "Tổng quát", en: "Overview" },
    path: "/",
  },
  {
    pageId: "services",
    label: { vi: "Portfolio", en: "Portfolio" },
    path: "/services/",
  },
  {
    pageId: "about",
    label: { vi: "Về tôi", en: "About" },
    path: "/about/",
  },
  {
    pageId: "contact",
    label: { vi: "Liên hệ", en: "Contact" },
    path: "/contact/",
  },
];

export const getLocalizedPath = (locale: Locale, path: string): string => {
  return path;
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
    title: { vi: "Portfolio", en: "Portfolio" },
    mobileTitle: { vi: "Dịch Vụ", en: "Services" },
    kicker: { vi: "Dịch vụ sáng tạo", en: "Creative Services" },
  },
  about: {
    title: { vi: "About Us", en: "About Us" },
    mobileTitle: { vi: "About Us", en: "About Us" },
    kicker: { vi: "Dare To Breakthrough", en: "Dare To Breakthrough" },
  },
  credential: {
    title: { vi: "Dự án nổi bật", en: "Selected Projects" },
    mobileTitle: { vi: "Dự án nổi bật", en: "Selected Projects" },
    kicker: { vi: "Selected Credentials", en: "Selected Credentials" },
  },
  contact: {
    title: { vi: "Contact", en: "Contact" },
    mobileTitle: { vi: "Contact", en: "Contact" },
    kicker: { vi: "Contact", en: "Contact" },
  },
};

export const credentials: readonly CredentialItem[] = [
  {
    title: { vi: "2D Animation 3D CGI VFX", en: "2D Animation 3D CGI VFX" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-2d-3d-cgi-96e98a5a2f.gif",
      alt: { vi: "2D 3D CGI credential", en: "2D 3D CGI credential" },
    },
  },
  {
    title: { vi: "Amazon", en: "Amazon" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-amazon-0f7d8e2744.gif",
      alt: { vi: "Amazon credential", en: "Amazon credential" },
    },
  },
  {
    title: { vi: "Homeliving Interior", en: "Homeliving Interior" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-homeliving-e741324341.gif",
      alt: { vi: "Homeliving interior credential", en: "Homeliving interior credential" },
    },
  },
  {
    title: { vi: "Fashion Credential", en: "Fashion Credential" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-fashion-c425885c21.png",
      alt: { vi: "Fashion credential", en: "Fashion credential" },
    },
  },
  {
    title: { vi: "Design", en: "Design" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-design-94a1243cf0.png",
      alt: { vi: "Design credential", en: "Design credential" },
    },
  },
  {
    title: { vi: "Food Credential", en: "Food Credential" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-fb-be5a552c1d.png",
      alt: { vi: "Food credential", en: "Food credential" },
    },
  },
  {
    title: { vi: "Jewelry Credential", en: "Jewelry Credential" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-jewelry-f8f7170c62.png",
      alt: { vi: "Jewelry credential", en: "Jewelry credential" },
    },
  },
  {
    title: { vi: "Sportwear", en: "Sportwear" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-sportwear-03c8ceb490.png",
      alt: { vi: "Sportwear credential", en: "Sportwear credential" },
    },
  },
  {
    title: { vi: "Kids", en: "Kids" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-kids-8ac5d7ae27.png",
      alt: { vi: "Kids credential", en: "Kids credential" },
    },
  },
  {
    title: { vi: "Business Profile", en: "Business Profile" },
    image: {
      src: "/assets/portfolio/credential/thumbnail-profile-f2be92a3f9.gif",
      alt: { vi: "Business profile credential", en: "Business profile credential" },
    },
  },
];

export const aboutBlocks: readonly AboutBlock[] = [
  {
    eyebrow: {
      vi: "Dám phá vỡ khuôn mẫu - Học hỏi, Cảm nhận và Bắt đầu lại",
      en: "Dare To Break Patterns - To Unlearn, To Feel, To Begin Again",
    },
    vi: [
      "Mình tin rằng một dự án thành công không chỉ bắt đầu từ ý tưởng tốt, mà từ việc mọi người cùng hiểu đúng mục tiêu, phối hợp đúng nhịp.",
      "Mình không chỉ tạo chiến dịch, mà tìm kiếm những đột phá thực sự trong từng chiến dịch. Với mình, điều phối công việc là tạo ra sự kết nối đủ rõ ràng để mọi ý tưởng có thể được triển khai hiệu quả nhất.",
      "Mình ứng dụng công nghệ và AI không để thay thế, mà để khuếch đại sáng tạo. Để những ý tưởng đi sâu hơn, chạm đến cảm xúc nhiều hơn và tạo ra tác động có chủ đích.",
    ],
    en: [
      "I believe a successful project begins with people understanding the same goal, moving in the same rhythm and working toward one shared outcome.",
      "I am not just creating campaigns, I create breakthroughs. More than coordinating tasks, I create the clarity that helps ideas move into execution effectively.",
      "I use technology and AI not to replace creativity, but to amplify it, go deeper, feel more and create with intention.",
    ],
  },
  {
    eyebrow: {
      vi: "Dám vượt qua giới hạn - Khuyến khích phát triển khả năng sáng tạo",
      en: "Dare To Break Boundaries - Encouraging Creative Development",
    },
    vi: [
      "Mình không chỉ theo đuổi sự tăng trưởng, mà tìm kiếm sự phát triển trọn vẹn cho thương hiệu và cho cả những người ở phía sau thương hiệu.",
      "Trong công việc, mình không chỉ triển khai dự án, mà kiến tạo một văn hóa nơi sự sáng tạo được nuôi dưỡng, con người được phát triển và những chuẩn mực mới được định hình.",
      "Với kinh nghiệm từng hợp tác cùng nhiều thương hiệu lớn tại Việt Nam lẫn quốc tế, mình tự tin cùng bạn đưa ra các phương án tối ưu nhất.",
    ],
    en: [
      "I do not just pursue growth. I pursue the fullest expression of growth for brands and for the people behind them.",
      "I aim to build an environment where creativity flourishes, individuals thrive and new standards for the creative industry are shaped.",
      "With experience collaborating with major brands in Vietnam and internationally, I am ready to craft practical, measurable creative solutions.",
    ],
  },
];

