export type SiteConfig = typeof siteConfig;
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

export const siteConfig = {
  name: "WEIFANG PORTFOLIO",
  description: "WeiFang Chou Portfolio",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [],
  links: {
    github: "https://github.com/WeiFangChou",
  },
  resume: {
    link: "/resume.pdf",
  },
};

export const myProfile = {
  name: "周暐芳 WeiFang",
  description:
    "我熱衷於App開發，並積極拓展後端技能。我享受不斷學習和挑戰自我的過程，致力於在設計與開發領域追求卓越。我將持續學習最新的開發技術，勇於超越自我，目標成為一名全方位的全端工程師。",
  avatar: "/avator.jpg",
};

export const myExperience = {
  name: "經歷 Experience",
  experiences: [
    {
      startDate: "2023.03",
      endDate: "2024.07",
      title: "App 開發工程師",
      company: "亞路科技股份有限公司",
    },
    {
      startDate: "2021.11",
      endDate: "2023.02",
      title: "軟體工程師",
      company: "緯創軟體股份有限公司",
    },
    {
      startDate: "2016.09",
      endDate: "2020.06",
      title: "資訊網路工程系",
      company: "龍華科技大學",
    },
  ],
};

export const mySkills = {
  name: "技能 Skills",
  description:
    "我對新技術充滿好奇，目前正在深入研究學習Next.JS 和TailWind CSS，以提升前端開發能力。同時也持續學習App開發技能，並積極開發更完整的專案。",
  skills: [
    {
      typeName: "App",
      skills: [
        {
          name: "Swift",
          level: 4.5,
        },
        {
          name: "Flutter",
          level: 4,
        },
      ],
    },
    {
      typeName: "Front-end",
      skills: [
        {
          name: "TailwindCSS",
          level: 2,
        },
      ],
    },
    {
      typeName: "Back-end",
      skills: [
        {
          name: "TypeScript",
          level: 3.5,
        },
        {
          name: "Next.js",
          level: 3.5,
        },
        {
          name: "Node.js",
          level: 4,
        },
        {
          name: "Express.js",
          level: 3.5,
        },
      ],
    },

    {
      typeName: "Framework",
      skills: [
        {
          name: "Cocoapods",
          level: 5,
        },
        {
          name: "SwiftPackageManager",
          level: 5,
        },
      ],
    },
  ],
};
export const myProjects = {
  name: "專案 Projects",
  description:
    "曾參與故宮精品與亞路科技的App開發，具備豐富的電商與社群平台開發經驗，能針對不同產業需求，提供客製化的解決方案，並提升產品的用戶體驗與商業價值。",
  projects: [
    {
      name: "故宮精品網路商城 App",
      description:
        "成功開發故宮精品網路商城App，採用Flutter實現跨平台開發，並通過資安認證與無障礙檢測。透過生動的互動方式呈現故宮文物，提升用戶體驗，成功將故宮文物推向全球，並帶動了線上銷售額的成長。",
      image: ["/assets/img/npmshops.png"],
      responsible: ["Flutter開發", "WebView整合", "Apple Pay"],
      link: "https://www.npmshops.com",
    },
    {
      name: "Slash123 App",
      description:
        "成功開發Slash123網紅活動平台App，採用Flutter實現跨平台開發，並整合多種社群API。平台透過精準的演算法推薦，成功促成了眾多網紅與品牌的合作，提升了行銷效率，並為品牌帶來了可觀的曝光量。",
      image: ["/assets/img/slash.png"],
      responsible: ["Flutter開發", "第三方登入", "API串接"],
      link: "https://slash123.com",
    },
  ],
};
