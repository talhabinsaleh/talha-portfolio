export const profile = {
  name: "Talha Bin Saleh",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "talhabinsalehasif32@gmail.com",
  github: "https://github.com/talhabinsaleh",
  linkedin: "https://www.linkedin.com/in/talha-bin-saleh/",
  seoPortfolio: "https://talha-bin-saleh.netlify.app/",
  intro:
    "I build modern, fast web apps with React, Next.js and TypeScript — from pixel-matched interfaces to authentication and databases. A CSE student who ships real projects to production.",
};

export const stats = [
  { value: "4", label: "Live web apps" },
  { value: "3+", label: "Years building for the web" },
  { value: "10+", label: "WordPress sites shipped" },
];

export const about = [
  "I'm Talha, a full-stack developer from Dhaka studying B.Sc. in Computer Science at Daffodil Institute of IT. I like turning designs into clean, responsive interfaces and wiring them up to real data.",
  "My recent work covers the full stack: typed React components, Next.js App Router pages, sign-in with email, Google and GitHub through BetterAuth, and MongoDB-backed data — each one deployed on Vercel with every push to main.",
  "Before writing apps I spent years building WordPress sites and doing SEO at Yaaply, so I care about speed, accessibility and pages that search engines can actually read.",
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "DaisyUI"],
  },
  {
    title: "Backend & Auth",
    items: ["Next.js server side", "BetterAuth", "OAuth (Google, GitHub)", "MongoDB Atlas", "Protected routes", "JSON"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Vercel", "Vite", "VS Code", "Figma", "Penpot"],
  },
  {
    title: "Also comfortable with",
    items: ["WordPress", "WooCommerce", "Technical SEO", "C", "Python", "Gemini API"],
  },
];

export const learning = ["Node.js", "Express", "REST APIs", "MongoDB queries", "JWT"];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  stack: string[];
  image: string;
  live: string;
  code: string;
  date: string;
};

export const projects: Project[] = [
  {
    title: "Bazar Dor",
    tagline: "Bangla market price tracker",
    description:
      "Today's prices for rice, lentils, oil, vegetables, fish and more, with day-over-day changes and market-by-market prices across Bangladesh's 6 divisions.",
    points: [
      "Email, Google and GitHub login with BetterAuth + MongoDB Atlas",
      "Protected product pages and profile editing",
      "Price ticker, top risers/fallers and sorting that handles Bengali numerals",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "DaisyUI", "BetterAuth", "MongoDB"],
    image: "/projects/bazar-dor-talha.png",
    live: "https://bazar-dor-talha.vercel.app",
    code: "https://github.com/talhabinsaleh/bazar-dor",
    date: "Oct 2026",
  },
  {
    title: "FitLog",
    tagline: "Gym workout library",
    description:
      "A dark-themed workout library where users browse exercises, build a personal plan and save favourites.",
    points: [
      "Plan and saved workouts persist with React Context + localStorage",
      "Pixel-matched UI from a Figma design, fully responsive",
      "Toast notifications and GitHub-connected Vercel deploys",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "React Context"],
    image: "/projects/fitlog-nu-nine.png",
    live: "https://fitlog-nu-nine.vercel.app",
    code: "https://github.com/talhabinsaleh/fitlog",
    date: "Sep 2026",
  },
  {
    title: "DevStack",
    tagline: "Tech stack builder",
    description:
      "Explore 12 developer technologies and build your own stack, with data loaded from a JSON file.",
    points: [
      "Responsive cards with ratings, difficulty and badges",
      "\"Your Stack\" sidebar with duplicate protection and toasts",
      "React hooks (useState / useEffect) with Vite",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    image: "/projects/devstack-theta.png",
    live: "https://devstack-theta.vercel.app",
    code: "https://github.com/talhabinsaleh/devstack",
    date: "Sep 2026",
  },
  {
    title: "Gemini Quiz Wizard",
    tagline: "AI quiz generator",
    description:
      "Generates quizzes on any topic using Google's Gemini API, built to explore JavaScript and API integration.",
    points: [
      "Calls the Gemini API straight from the browser",
      "API key stays in the user's own browser storage",
      "Plain JavaScript, no framework",
    ],
    stack: ["JavaScript", "Gemini API", "HTML", "CSS"],
    image: "/projects/quiz.png",
    live: "https://talhabinsaleh.github.io/Project-By-AI/",
    code: "https://github.com/talhabinsaleh/Project-By-AI",
    date: "2026",
  },
];

export const journey = [
  {
    period: "2023 — Present",
    title: "SEO Specialist & Web Developer",
    place: "Yaaply Limited",
    text: "Build WordPress and WooCommerce sites and grow them with technical SEO, performance audits and link building.",
  },
  {
    period: "2026",
    title: "Complete Web Development",
    place: "Programming Hero",
    text: "Hands-on React, Next.js and TypeScript projects, each shipped with real auth, data and deployments.",
  },
  {
    period: "In progress",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Daffodil Institute of IT",
    text: "Data structures, algorithms, networking and programming in C and Python.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];
