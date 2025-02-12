import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  travelai,
  zhoupu,
  weier,
  tripguide,
  threejs, furniture_custom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Zhoupu Data Co., Ltd",
    icon: zhoupu,
    iconBg: "#383E56",
    date: "Dec 2021 - Jul 2023",
    points: [
      "Developed and maintained a multi-tenant Canal real-time data collection platform.",
      "Optimized the FlinkCDC replenishment process and explored replacing Canal with Flink CDC for data collection.",
      "Designed and implemented real-time data warehouses, including development of real-time wide tables and dimension tables.",
      "Built API services for data aggregation and real-time analytics.",
      "Automated routine tasks using scripting languages to improve efficiency and reduce manual errors.",
      "Integrated real-time streaming technologies for business-critical monitoring and analytics.",
      "Developed a full-domain marketing user profile label system and maintained data warehouses across seven domains.",
      "Constructed a standardized data warehouse indicator system and created data lexicons.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Weiera Technology Co., Ltd",
    icon: weier,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Dec 2021",
    points: [
      "Collaborated on ETL (Extract, Transform, Load) tasks, ensuring data integrity and pipeline stability.",
      "Fine-tuned query performance and optimized database structures for efficient data retrieval and reporting.",
      "Enhanced collaboration across teams by creating detailed technical documentation for big data solutions.",
      "Developed a data quality rule system and standardized data warehouse development processes.",
      "Migrated legacy systems to cloud-based platforms for improved scalability and performance.",
      "Implemented real-time streaming technologies and developed visualization tools for strategic decision-making.",
      "Conducted performance testing to optimize system configurations and maximize resource utilization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
        "Evan is an outstanding full-stack developer with a deep understanding of data processing and scalable architecture.",
    name: "Alex Johnson",
    designation: "CTO",
    company: "Tech Innovations",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
        "Evan's expertise in big data and real-time streaming transformed our analytics infrastructure.",
    name: "Sophia Lee",
    designation: "Data Engineer",
    company: "DataFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    testimonial:
        "His ability to integrate AI-driven insights into applications makes him a game-changer in the industry.",
    name: "Michael Chen",
    designation: "AI Researcher",
    company: "DeepTech Labs",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const projects = [
  {
    name: "AI-Powered Travel App",
    description:
        "An AI-driven travel companion that provides real-time itinerary recommendations, booking assistance, and smart trip planning.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AI Agent",
        color: "pink-text-gradient",
      },
    ],
    image: travelai,
    source_code_link: "https://www.nicedays.ai/",
  },
  {
    name: "Chicago Global Furniture Customization",
    description:
        "A platform offering fully customizable furniture solutions tailored to global clients, integrating AI-driven design recommendations and real-time order tracking.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "3D Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: furniture_custom,
    source_code_link: "https://furnituresmart.solutions/",
  },,
  {
    name: "Real-time Data Platform",
    description:
        "A high-performance real-time data processing system built for large-scale business intelligence, integrating Flink, Kafka, and Canal.",
    tags: [
      {
        name: "Flink",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "green-text-gradient",
      },
      {
        name: "Canal",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nicedays233",
  },
  {
    name: "Marketing User Profile System",
    description:
        "A full-domain marketing user profiling system that integrates data warehouse management, real-time data processing, and AI-driven recommendations.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Data Warehouse",
        color: "green-text-gradient",
      },
      {
        name: "ETL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nicedays233",
  },
];

export { services, technologies, experiences, testimonials, projects };
