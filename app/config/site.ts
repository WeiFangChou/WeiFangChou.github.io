import { JSX } from "react";
import { CocoapodsIcon, CredlyIcon, ExpressIcon, FlutterIcon, GithubIcon, IllustratorIcon, LinkedInIcon, LogosNodejsIcon, MediumIcon, NextjsIcon, PhotoshopIcon, SwiftIcon, TailwindIcon, TypeScriptIcon, XIcon } from "../components/imgs/icons";

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
  avatar: "/avatar.jpg",
  skillsDescription: "我對新技術充滿好奇，目前正在深入研究學習Next.JS 和TailWind CSS，以提升前端開發能力。同時也持續學習App開發技能，並積極開發更完整的專案。",
  experienceDescription: "我對新技術充滿好奇，目前正在深入研究學習Next.JS 和TailWind CSS，以提升前端開發能力。同時也持續學習App開發技能，並積極開發更完整的專案。",
  projectDescription: "曾參與故宮精品與亞路科技的App開發，具備豐富的電商與社群平台開發經驗，能針對不同產業需求，提供客製化的解決方案，並提升產品的用戶體驗與商業價值。",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/WeiFangChou",
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
    startDate: "2023.03",
    endDate: "2024.07",
    title: "App 開發工程師",
    company: "亞路科技股份有限公司",
    location: "台北市中正區",
    icon: '/image/experience/noonspace.jpg',
    description:
      "我們打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
  },
  {
    startDate: "2021.11",
    endDate: "2023.02",
    title: "軟體工程師",
    location: "新竹市東區",
    company: "緯創軟體股份有限公司",
    icon: '/image/experience/wits.svg',
    description:
      "我們打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
  },
  {
    startDate: "2019.07",
    endDate: "2020.01",
    title: "資訊助理工程師",
    company: "仁大資訊股份有限公司",
    location: "新北市五股區",
    icon: '/image/experience/wits.svg',
    description:
      "我們打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
  },
  {
    startDate: "2016.09",
    endDate: "2020.06",
    title: "資訊網路工程系",
    company: "龍華科技大學",
    location: "桃園市龜山區",
    icon: '/image/experience/lhu.png',
    description:
      "我們打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
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
        level: 4.5,
        icon: SwiftIcon,
      },
      {
        name: "Flutter",
        level: 4,
        icon: FlutterIcon,
      },
    ],
  },
  {
    typeName: "Front-end",
    skills: [
      {
        name: "TailwindCSS",
        level: 2,
        icon: TailwindIcon,
      },
    ],
  },
  {
    typeName: "Back-end",
    skills: [
      {
        name: "TypeScript",
        level: 3.5,
        icon: TypeScriptIcon,
      },
      {
        name: "Next.js",
        level: 3.5,
        icon: NextjsIcon,
      },
      {
        name: "Node.js",
        level: 4,
        icon: LogosNodejsIcon,
      },
      {
        name: "Express.js",
        level: 3.5,
        icon: ExpressIcon,
      },
    ],
  },

  {
    typeName: "Framework",
    skills: [
      {
        name: "Cocoapods",
        level: 5,
        icon: CocoapodsIcon,
      },
      {
        name: "SwiftPackageManager",
        level: 5,
        icon: SwiftIcon,
      },
    ],
  },
  {
    typeName: "Design",
    skills: [
      {
        name: "Illustrator",
        level: 5,
        icon: IllustratorIcon,
      },
      {
        name: "Photoshop",
        level: 5,
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
  link: string;
};

export const myProjects: Project[] = [
  {
    name: "舖可BookCourt",
    description:
      "我們打造了一個創新的線上平台，連接運動場地與使用者。平台不僅提供場地預約服務，更整合了零打運動課程，滿足使用者多元化的運動需求。透過大數據分析，我們能更精準地掌握市場趨勢，為商家提供更有效的行銷策略。",
    image: ["/image/projects/building.jpeg"],
    responsible: ["iOS Swift", "App Clips", "Python FastAPI", "Next.JS", "TailwindCSS"],
    link: "https://bookcourt.tw",
  },
  {
    name: "故宮精品網路商城 App",
    description:
      "成功開發故宮精品網路商城App，採用Flutter實現跨平台開發，並通過資安認證與無障礙檢測。透過生動的互動方式呈現故宮文物，提升用戶體驗，成功將故宮文物推向全球，並帶動了線上銷售額的成長。",
    image: ["/image/projects/npmshops.png"],
    responsible: ["Flutter開發", "WebView整合", "Apple Pay", "資安L3", "無障礙檢測"],
    link: "https://www.npmshops.com",
  },
  {
    name: "Slash123 App",
    description:
      "成功開發Slash123網紅活動平台App，採用Flutter實現跨平台開發，並整合多種社群API。平台透過精準的演算法推薦，成功促成了眾多網紅與品牌的合作，提升了行銷效率，並為品牌帶來了可觀的曝光量。",
    image: ["/image/projects/slash.png"],
    responsible: ["Flutter開發", "第三方登入", "API串接"],
    link: "https://slash123.com",
  },
];
