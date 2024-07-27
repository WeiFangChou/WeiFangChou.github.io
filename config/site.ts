export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "WEIFANG PORTFILIO",
  description: "Make beautiful websites regardless of your design experience.",
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
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const myExperience = {
  name: "經歷 Experience",
  experiences: [
    {
      startDate: "2023-03",
      endDate: "2024-07",
      title: "App 工程師",
      company: "亞路科技",
    },
    // {
    //   startDate: "2022-10",
    //   endDate: "2023-02",
    //   title: "軟體工程師",
    //   company: "藍新科技",
    // },
  ],
};

export const mySkills = {
  name: "技能 Skills",
  descption:
    "不斷精進設計技巧與學習前端語法，熟悉RWD網頁切版，具大小專案經驗，具快速統整能力，能夠在大量資訊中找出商家特點，針對其TA及企業風格設計，致力於打造更優質、更具吸引力的網站。",
  skills: [
    {
      typeName: "Frontend",
      skills: [
        {
          name: "Next.js",
          level: 3,
        },
        {
          name: "React.js",
          level: 3,
        },
        {
          name: "TypeScript",
          level: 3,
        },
        {
          name: "Tailwindcss",
          level: 3,
        },
      ],
    },
    {
      typeName: "Backend",
      skills: [
        {
          name: "Node.js",
          level: 3,
        },
        {
          name: "Express.js",
          level: 3,
        },
      ],
    },
    {
      typeName: "App",
      skills: [
        {
          name: "Android",
          level: 3,
        },
        {
          name: "iOS",
          level: 3,
        },
      ],
    },
  ],
};
export const myProjects = {
  name: "專案 Projects",
  description:
    "擁有超過160間形象網頁設計的豐富經驗，涵蓋了餐飲、零售、美業等多個產業類別，設計風格多樣，能夠根據客戶需求和行業特性，量身打造符合品牌形象的網頁設計。",
  projects: [
    {
      name: "NextUI",
      description:
        "我在這個專案中負責網頁設計與切版製作，獨立完成網站的Web和Mobile設計，同時，我也與客戶進行密切的溝通，協調風格定調和版位需求。我注重細節，致力於提供符合客戶需求的設計方案，並確保網站在不同平台上呈現出色的視覺效果。",
      image: "/nextui.png",
      Responsible: ["designer", "developer"],
      link: "https://nextui.org",
    },
  ],
};
