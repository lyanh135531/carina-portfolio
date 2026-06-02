import type { Locale, LocalizedText } from "@/data/site";

export type LocalizedList = Readonly<Record<Locale, readonly string[]>>;

export type ProfileMetric = Readonly<{
  value: LocalizedText;
  label: LocalizedText;
}>;

export type ProfileIntro = Readonly<{
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  primaryAction: LocalizedText;
  secondaryAction: LocalizedText;
  metrics: readonly ProfileMetric[];
}>;

export type ProfileNarrative = Readonly<{
  eyebrow: LocalizedText;
  title: LocalizedText;
  paragraphs: LocalizedList;
}>;

export type ProfileExperience = Readonly<{
  role: LocalizedText;
  company: string;
  period: string;
  summary: LocalizedText;
  bullets: LocalizedList;
  scopes: readonly LocalizedText[];
}>;

export type ProfileCapability = Readonly<{
  title: LocalizedText;
  summary: LocalizedText;
}>;

export type ProfileSectionLabels = Readonly<{
  experienceEyebrow: LocalizedText;
  experienceTitle: LocalizedText;
  capabilitiesEyebrow: LocalizedText;
  capabilitiesTitle: LocalizedText;
  scopeLabel: LocalizedText;
}>;

export const profileIntro: ProfileIntro = {
  eyebrow: {
    vi: "Career Overview",
    en: "Career Overview",
  },
  title: {
    vi: "Account Executive / Producer",
    en: "Account Executive / Producer",
  },
  summary: {
    vi: "Kết nối client, creative, production và product team để biến brief thành kế hoạch triển khai rõ ràng, kiểm soát timeline, feedback, deliverables và chất lượng đầu ra.",
    en: "Connecting clients, creative teams, production crews and product teams to turn briefs into clear delivery plans across timeline, feedback, deliverables and output quality.",
  },
  primaryAction: {
    vi: "Xem kinh nghiệm",
    en: "View experience",
  },
  secondaryAction: {
    vi: "Năng lực chính",
    en: "Core capabilities",
  },
  metrics: [
    {
      value: { vi: "2022 - 2026", en: "2022 - 2026" },
      label: {
        vi: "Account, triển khai và sản xuất",
        en: "Account, implementation and production",
      },
    },
    {
      value: { vi: "US & Canada", en: "US & Canada" },
      label: {
        vi: "Khách hàng phần mềm quốc tế",
        en: "International software clients",
      },
    },
    {
      value: { vi: "TVC / Event / Digital", en: "TVC / Event / Digital" },
      label: {
        vi: "Phạm vi creative production",
        en: "Creative production scope",
      },
    },
    {
      value: { vi: "Client - Creative - Tech", en: "Client - Creative - Tech" },
      label: {
        vi: "Điều phối đa bộ phận",
        en: "Cross-functional coordination",
      },
    },
  ],
};

export const profileNarrative: ProfileNarrative = {
  eyebrow: {
    vi: "Career Logic",
    en: "Career Logic",
  },
  title: {
    vi: "Biết nói chuyện với business, creative và technical team",
    en: "Fluent across business, creative and technical teams",
  },
  paragraphs: {
    vi: [
      "Nền tảng account trong SaaS giúp tôi hiểu cách biến nhu cầu vận hành thành giải pháp triển khai thực tế, từ requirement, onboarding đến xử lý vấn đề sau delivery.",
      "Kinh nghiệm producer trong creative agency mở rộng năng lực đó sang chiến dịch truyền thông, sản xuất, vendor và creative execution, nơi timeline, feedback và chất lượng đầu ra cần được kiểm soát liên tục.",
    ],
    en: [
      "My account foundation in SaaS shaped how I translate operational needs into practical implementation plans, from requirements and onboarding to post-delivery issue handling.",
      "Producer experience in a creative agency extended that discipline into campaigns, production, vendors and creative execution, where timeline, feedback and output quality need constant control.",
    ],
  },
};

export const profileExperiences: readonly ProfileExperience[] = [
  {
    role: {
      vi: "Account Executive / Producer",
      en: "Account Executive / Producer",
    },
    company: "Movement Creative Lab",
    period: "2024 - 2026",
    summary: {
      vi: "Quản lý khách hàng và điều phối triển khai chiến dịch truyền thông tích hợp, sản xuất và creative execution từ brief đến delivery.",
      en: "Managed client relationships and coordinated integrated communication campaigns, production and creative execution from brief to delivery.",
    },
    bullets: {
      vi: [
        "Làm đầu mối trực tiếp với client: tiếp nhận brief, tư vấn hướng triển khai, quản lý kỳ vọng và xử lý feedback.",
        "Điều phối strategy, creative, design, production và vendor; kiểm soát timeline, deliverables, revisions và chất lượng đầu ra.",
        "Theo dõi ngân sách, tiến độ sản xuất và quy trình pre-production, production, post-production cho TVC, event, activation và creative assets.",
      ],
      en: [
        "Acted as the direct client contact for briefs, execution direction, expectation management and feedback handling.",
        "Coordinated strategy, creative, design, production and vendor teams while controlling timelines, deliverables, revisions and output quality.",
        "Tracked budget, production progress and pre-production, production and post-production workflows for TVC, event, activation and creative assets.",
      ],
    },
    scopes: [
      { vi: "TVC production", en: "TVC production" },
      { vi: "Event & activation", en: "Event & activation" },
      { vi: "Packaging design", en: "Packaging design" },
      { vi: "Key visual development", en: "Key visual development" },
      { vi: "2D / 3D creative assets", en: "2D / 3D creative assets" },
      { vi: "Social / digital assets", en: "Social / digital assets" },
    ],
  },
  {
    role: {
      vi: "Account Executive",
      en: "Account Executive",
    },
    company: "Công ty Cổ phần IDTEK",
    period: "2022 - 2024",
    summary: {
      vi: "Tư vấn, quản lý khách hàng và triển khai phần mềm quản lý doanh nghiệp cho thị trường quốc tế, đặc biệt là Mỹ và Canada.",
      en: "Consulted, managed clients and implemented business management software for international markets, especially the US and Canada.",
    },
    bullets: {
      vi: [
        "Thu thập yêu cầu, phân tích nhu cầu sử dụng và đề xuất giải pháp phần mềm phù hợp với quy trình vận hành của khách hàng.",
        "Điều phối giữa khách hàng và đội ngũ kỹ thuật để đảm bảo tiến độ triển khai, onboarding và training sử dụng hệ thống.",
        "Theo dõi issue trong quá trình vận hành, duy trì quan hệ khách hàng và đảm bảo trải nghiệm dịch vụ ổn định.",
      ],
      en: [
        "Collected requirements, analyzed user needs and proposed software solutions aligned with client operating workflows.",
        "Coordinated between clients and technical teams to keep implementation, onboarding and system training on track.",
        "Monitored operational issues, maintained client relationships and supported a stable service experience.",
      ],
    },
    scopes: [
      { vi: "Business management software", en: "Business management software" },
      { vi: "Nail Spa / Salon software", en: "Nail Spa / Salon software" },
      { vi: "Sports booking system", en: "Sports booking system" },
      { vi: "Onboarding & training", en: "Onboarding & training" },
      { vi: "Requirement analysis", en: "Requirement analysis" },
      { vi: "US & Canada clients", en: "US & Canada clients" },
    ],
  },
];

export const profileCapabilities: readonly ProfileCapability[] = [
  {
    title: {
      vi: "Client Partnership",
      en: "Client Partnership",
    },
    summary: {
      vi: "Tiếp nhận brief, tư vấn hướng triển khai, quản lý kỳ vọng và duy trì quan hệ khách hàng trong suốt vòng đời dự án.",
      en: "Brief intake, execution consulting, expectation management and client relationship ownership throughout the project lifecycle.",
    },
  },
  {
    title: {
      vi: "Project Delivery",
      en: "Project Delivery",
    },
    summary: {
      vi: "Chuyển mục tiêu kinh doanh thành timeline, deliverables, revision flow và các đầu việc rõ ràng cho từng đội ngũ.",
      en: "Turning business goals into clear timelines, deliverables, revision flows and workstreams for every team involved.",
    },
  },
  {
    title: {
      vi: "Creative Production",
      en: "Creative Production",
    },
    summary: {
      vi: "Điều phối production house, ekip, hậu kỳ, vendor và creative output cho TVC, event, activation và digital assets.",
      en: "Coordinating production houses, crews, post-production, vendors and creative output for TVC, event, activation and digital assets.",
    },
  },
  {
    title: {
      vi: "SaaS Implementation",
      en: "SaaS Implementation",
    },
    summary: {
      vi: "Phân tích requirement, triển khai phần mềm, onboarding, training và xử lý issue vận hành cho khách hàng quốc tế.",
      en: "Requirement analysis, software implementation, onboarding, training and operational issue handling for international clients.",
    },
  },
  {
    title: {
      vi: "Operational Thinking",
      en: "Operational Thinking",
    },
    summary: {
      vi: "Giữ dự án đi đúng hướng bằng cách nhìn rõ ràng giữa nhu cầu client, nguồn lực internal, ràng buộc ngân sách và chất lượng delivery.",
      en: "Keeping projects on track by balancing client needs, internal resources, budget constraints and delivery quality.",
    },
  },
];

export const profileSectionLabels: ProfileSectionLabels = {
  experienceEyebrow: {
    vi: "Selected Experience",
    en: "Selected Experience",
  },
  experienceTitle: {
    vi: "Kinh nghiệm nổi bật",
    en: "Career Highlights",
  },
  capabilitiesEyebrow: {
    vi: "Working Range",
    en: "Working Range",
  },
  capabilitiesTitle: {
    vi: "Năng lực chính",
    en: "Core Capabilities",
  },
  scopeLabel: {
    vi: "Phạm vi công việc",
    en: "Work scope",
  },
};
