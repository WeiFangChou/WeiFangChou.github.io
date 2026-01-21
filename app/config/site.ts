import { JSX } from "react";
import { CredlyIcon, ExpressIcon, FastAPIIcon, FlutterIcon, GithubIcon, IllustratorIcon, LinkedInIcon, MediumIcon, NextjsIcon, PhotoshopIcon, SwiftIcon, TailwindIcon, TypeScriptIcon, XIcon } from "../components/imgs/icons";

export const myProfessions = [
  " iOS Developer",
  3000,
  "Flutter Developer",
  3000,
  "Full-Stack Developer",
  3000,
  "Photographer",
  3000,
];

type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "WEIFANG PORTFOLIO",
  description: "WeiFang Chou Portfolio",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Skills",
      href: "#skill",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#project",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};

export const myProfile = {
  name: "周暐芳 WeiFang",
  description:
    "我熱衷於App開發，並積極拓展後端技能。我享受不斷學習和挑戰自我的過程，致力於在設計與開發領域追求卓越。我將持續學習最新的開發技術，勇於超越自我，目標成為一名全方位的全端工程師。",
  avatar: "/avatar.png",
  skillsDescription: "我對新技術充滿好奇，目前正在深入研究學習Next.JS 和TailWind CSS，以提升前端開發能力。同時也持續學習App開發技能，並積極開發更完整的專案。",
  experienceDescription: "我對新技術充滿好奇，目前正在深入研究學習Next.JS 和TailWind CSS，以提升前端開發能力。同時也持續學習App開發技能，並積極開發更完整的專案。",
  projectDescription: "曾參與故宮精品與亞路科技的App開發，具備豐富的電商與社群平台開發經驗，能針對不同產業需求，提供客製化的解決方案，並提升產品的用戶體驗與商業價值。",
  appStoreLink: "https://apple.co/45Rfb5r",
  playStoreLink: "https://play.google.com/store/apps/developer?id=WeiFang",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/WeiFangChou?ref=fangs.dev",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chouweifang/",
      icon: LinkedInIcon,
    },
    {
      label: "Medium",
      href: "https://medium.com/@chou.wei.fang",
      icon: MediumIcon,
    },
    {
      label: "X",
      href: "https://x.com/chouweifang",
      icon: XIcon,
    },
    {
      label: "Credly",
      href: "https://www.credly.com/users/chouweifang",
      icon: CredlyIcon,
    },
  ],
  resume: "/resume.pdf",
  contact: "#contact",
};

export type Experience = {
  startDate: string;
  endDate: string;
  title: string;
  icon?: string;
  location: string;
  company: string;
  description: string;
};

export const myExperience: Experience[] = [
  {
    startDate: "2025.02",
    endDate: "2025.07",
    title: "iOS Engineer",
    company: "台灣利優資訊科技有限公司",
    location: "台北市信義區",
    icon: '/image/experiences/nityo.jpg',
    description:
      "於Nityo在國泰銀行擔任駐點iOS工程師，參與官方行動銀行 App 的首頁改版與功能修改，負責 iOS UI調整及與後端 API 的串接，確保功能穩定且使用者體驗提升。",
  },
  {
    startDate: "2023.03",
    endDate: "2024.07",
    title: "App 開發工程師",
    company: "亞路科技股份有限公司",
    location: "台北市中正區",
    icon: '/image/experiences/noonspace.jpg',
    description:
      "主要負責App開發，使用Flutter實現跨平台開發，並整合多種社群API。平台透過精準的演算法推薦，成功促成了眾多網紅與品牌的合作，提升了行銷效率，並為品牌帶來了可觀的曝光量。",
  },
  {
    startDate: "2021.11",
    endDate: "2023.02",
    title: "軟體工程師",
    company: "緯創軟體股份有限公司",
    location: "新竹市東區",
    icon: '/image/experiences/wits.png',
    description:
      "在 WITS 擔任全端軟體工程師，主要負責企業級軟體解決方案的開發與維護。參與大型專案的系統架構設計，使用多種技術棧包含 .NET、Java 和 JavaScript。負責客戶需求分析、系統設計文件撰寫，以及跨團隊協作確保專案順利進行。期間累積了豐富的企業軟體開發經驗和團隊合作能力。",
  },
  {
    startDate: "2019.07",
    endDate: "2020.01",
    title: "資訊助理工程師",
    company: "仁大資訊股份有限公司",
    location: "新北市五股區",
    icon: '/image/experiences/hpi.jpg',
    description:
      "擔任資訊助理工程師，負責公司內部系統維護和技術支援工作。協助開發和維護企業資源規劃系統（ERP），學習資料庫管理和系統整合技術。參與用戶培訓和技術文件撰寫，培養了良好的溝通能力和解決問題的技巧。這段經歷為我後續的軟體開發生涯奠定了堅實的基礎。",
  },
  {
    startDate: "2016.09",
    endDate: "2020.06",
    title: "資訊網路工程系",
    company: "龍華科技大學",
    location: "桃園市龜山區",
    icon: '/image/experiences/lhu.png',
    description:
      "主修資訊網路工程，學習程式設計、資料庫管理、網路架構和系統分析等核心技能。積極參與程式設計競賽和專題製作，培養了扎實的程式設計基礎和問題解決能力。畢業專題聚焦於App開發，這段學習經歷激發了我對 App 開發的熱忱，並為日後的職業發展方向奠定了重要基礎。",
  },
];

export type MainSkill = {
  typeName: string;
  skills: SubSkill[];
};

export type SubSkill = {
  name: string;
  level: number;
  icon: ({ height, width }: { height?: number; width?: number }) => JSX.Element;
};

export const mySkills: MainSkill[] = [
  {
    typeName: "Mobile",
    skills: [
      {
        name: "Swift",
        level: 3,
        icon: SwiftIcon,
      },
      {
        name: "Flutter",
        level: 3.5,
        icon: FlutterIcon,
      },
    ],
  },
  {
    typeName: "Front-end",
    skills: [

      {
        name: "Next.js",
        level: 3.5,
        icon: NextjsIcon,
      },
      {
        name: "TailwindCSS",
        level: 2,
        icon: TailwindIcon,
      },
      {
        name: "TypeScript",
        level: 3.5,
        icon: TypeScriptIcon,
      },
    ],
  },
  {
    typeName: "Back-end",
    skills: [

      {
        name: "FastAPI",
        level: 3.5,
        icon: FastAPIIcon,
      },
      {
        name: "Express.js",
        level: 3.5,
        icon: ExpressIcon,
      },
    ],
  },
  {
    typeName: "Design",
    skills: [
      {
        name: "Illustrator",
        level: 3.5,
        icon: IllustratorIcon,
      },
      {
        name: "Photoshop",
        level: 2.5,
        icon: PhotoshopIcon,
      },
    ],
  },
];

type Project = {
  name: string;
  description: string;
  image: string[];
  responsible: string[];
  links: string[];
};

export const workProjects: Project[] = [
  {
    name: "木根樂器",
    description:
      "木根樂器是一款透過藍牙連接電子鋼琴的應用程式，讓使用者輕鬆控制、練習與管理琴音，提升彈奏體驗。",
    image: ["/image/projects/piano-banner.png"],
    responsible: ["iOS", "Android", "藍芽"],
    links: ["https://apple.co/49xqNOn", "https://play.google.com/store/apps/details?id=com.weifang.pianocontrol"],
  },
  {
    name: "Cohomebuy",
    description:
      "CohomeBuy 是一個專為購屋家庭打造的居家合購平台，從裝修、空調到家具家電，整合同一社區的購買需求，以團購的方式爭取更優的價格與服務。",
    image: ["/image/projects/cohomebuy.png"],
    responsible: ["WordPress開發", "API串接", "SEO優化"],
    links: ["https://cohomebuy.com"],
  },
  {
    name: "GoodShare",
    description:
      "《好享 GoodShare》是B2B2C的社群電商媒合平臺。目的就是打造一個網紅、品牌商、創作者以及消費者的共好生態圈。每年不定期舉辦O2O媒合活動，内容涵蓋文創美食、科技生活、時尚精品等商品，並提供合理的激勵獎金。",
    image: ["/image/projects/goodshare.png"],
    responsible: ["WordPress開發", 'WooCommerce', "API串接", "SEO優化"],
    links: ["https://goodshare.shop"],
  },
  {
    name: "Cube App",
    description:
      "於Nityo在國泰銀行擔任駐點iOS工程師，參與官方行動銀行 App 的首頁改版與功能優化，負責 iOS 介面優化及與後端 API 的串接，確保功能穩定且使用者體驗提升。",
    image: ["/image/projects/cubeapp.jpeg"],
    responsible: ["iOS 開發", "Swift", 'Objective-C', "API串接"],
    links: ["https://apple.co/3Gsy1Yg"],
  },
  {
    name: "故宮精品網路商城 App",
    description:
      "成功開發故宮精品網路商城App，採用Flutter實現跨平台開發，並通過資安認證與無障礙檢測。透過生動的互動方式呈現故宮文物，提升用戶體驗，成功將故宮文物推向全球，並帶動了線上銷售額的成長。",
    image: ["/image/projects/npmshops.png"],
    responsible: ["Flutter開發", "WebView整合", "Apple Pay", "資安L3", "無障礙檢測"],
    links: ["https://apps.apple.com/tw/app/national-palace-museum-shop/id6466132852?l=en-GB", "https://play.google.com/store/apps/details?id=com.npm.shopnpmshops"],
  },
  {
    name: "Slash123 App",
    description:
      "成功開發Slash123網紅活動平台App，採用Flutter實現跨平台開發，並整合多種社群API。平台透過精準的演算法推薦，成功促成了眾多網紅與品牌的合作，提升了行銷效率，並為品牌帶來了可觀的曝光量。",
    image: ["/image/projects/slash.png"],
    responsible: ["Flutter開發", "第三方登入", "API串接"],
    links: ["https://slash123.com", "https://apple.co/4qAwkcW", "https://play.google.com/store/apps/details?id=com.noonspace.slashslash"],
  },
];


export const myProjects: Project[] = [
  {
    name: "舖可BookCourt",
    description:
      "打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
    image: ["/image/projects/building.jpeg"],
    responsible: ["SwiftUI", "App Clips", "FastAPI", "Next.JS"],
    links: ["https://bookcourt.tw", "https://apps.apple.com/us/app/bookcourt/id6736594027", "https://play.google.com/store/apps/details?id=com.weifang.bookcourt"],
  },
  {
    name: "WebNotify",
    description:
      "WebNotify 是一款專為 iOS 設計的網頁變動通知應用程式。它能夠自動監控使用者指定的網頁，當網頁內容發生變化時，立即透過推播通知提醒使用者。這對於需要即時掌握資訊更新的用戶來說，是一個非常實用的工具。",
    image: ["https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3e/bb/bf/3ebbbfbc-3117-f751-4142-91c8cf18443a/Simulator_Screenshot_-_iPhone_17_Pro_Max_-_2025-09-10_at_13.03.11.png/460x998bb.webp"],
    responsible: ["SwiftUI", "Background Fetch"],
    links: ["https://apple.co/468G6eG"],
  },
  {
    name: "QRCoder",
    description:
      "",
    image: ["/image/projects/building.jpeg"],
    responsible: ["SwiftUI", "Safari Extension"],
    links: ["https://apps.apple.com/us/app/qrcoder-二維碼產生器/id6751326100"],
  },
];

export type AppInfo = {
  id: string;
  name: string;
  appStoreLink: string;
  playStoreLink?: string;
  privacyTitle?: string;
  privacyContent?: {
    informationCollected?: string[];
    dataUsage?: string[];
    contactEmail?: string;
  };
};

export const myApps: Record<string, AppInfo> = {
  webnotify: {
    id: "webnotify",
    name: "WebNotify",
    appStoreLink: "https://apps.apple.com/us/app/webnotify-網頁變動通知/id6743679166",
    privacyTitle: "隱私權政策",
    privacyContent: {
      informationCollected: [],
      dataUsage: [],
      contactEmail: "app@fangs.dev"
    }
  },
  qrcoder: {
    id: "qrcoder",
    name: "QRCoder",
    appStoreLink: "https://apps.apple.com/us/app/qrcoder-二維碼產生器/id6751326100",
    privacyTitle: "QRCoder Privacy Policy",
    privacyContent: {
      informationCollected: [],
      dataUsage: ["Generating QR codes", "Improving app performance", "Providing QR code history feature"],
      contactEmail: "app@fangs.dev"
    }
  },
  piano: {
    id: "piano",
    name: "木根樂器",
    appStoreLink: "https://apps.apple.com/tw/app/%E6%9C%A8%E6%A0%B9%E6%A8%82%E5%99%A8/id6756510770?l=en-GB",
    privacyTitle: "Piano Privacy Policy",
    privacyContent: {
      informationCollected: [],
      dataUsage: ["iOS", "Android", "Bluetooth"],
      contactEmail: "app@fangs.dev"
    }
  }
};
