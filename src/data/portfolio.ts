import type { IconType } from "react-icons";
import { FiShield, FiCode, FiLock } from "react-icons/fi";
import {
  SiBetterauth,
  SiC,
  SiCss,
  SiDaisyui,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiMongodb,
  SiNextdotjs,
  SiPenpot,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

export const profile = {
  name: "Talha Bin Saleh",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "talhabinsalehasif32@gmail.com",
  phone: "+880 1700-547094",
  whatsapp: "+880 1700-547094",
  github: "https://github.com/talhabinsaleh",
  linkedin: "https://www.linkedin.com/in/talha-bin-saleh/",
  seoPortfolio: "https://talha-bin-saleh.netlify.app/",
  photo: "/talha.jpg",
  resume: "/Talha-Bin-Saleh-Resume.pdf",
  intro:
    "I build modern, fast web apps with React, Next.js and TypeScript — from pixel-matched interfaces to authentication and databases. A CSE student who ships real projects to production.",
};

export const stats = [
  { value: "4+", label: "Live web apps" },
  { value: "3+", label: "Years building for the web" },
  { value: "10+", label: "WordPress sites shipped" },
];

export const about = {
  journey: [
    "My journey started with WordPress. At Yaaply I built business websites and WooCommerce stores, and doing SEO for them taught me how much speed, structure and clean markup matter.",
    "Wanting to build things WordPress couldn't, I went back to the fundamentals — HTML, CSS and JavaScript — and then joined Programming Hero's web development course. Since then I've moved from vanilla JS to React, TypeScript and Next.js, and shipped apps with real sign-in and MongoDB data.",
  ],
  work: [
    "I enjoy frontend work most: taking a Figma design and turning it into a responsive, accessible interface that matches it pixel for pixel. I also like the moment a page connects to real data — auth flows, protected routes and forms that just work.",
  ],
  hobbies: [
    { name: "Sports", text: "Playing and following sports keeps me active and taught me teamwork long before code did." },
    { name: "Travel", text: "Exploring new places and people — always planning the next trip." },
    { name: "Gaming", text: "Games are how I unwind, and figuring out how they work is half the fun." },
  ],
};

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; items: Skill[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#663399" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
    ],
  },
  {
    title: "Backend & Auth",
    items: [
      { name: "Next.js server", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "BetterAuth", icon: SiBetterauth, color: "#FFFFFF" },
      { name: "OAuth", icon: FiLock, color: "#7CF2C4" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Protected routes", icon: FiShield, color: "#7CF2C4" },
      { name: "JSON", icon: SiJson, color: "#FFFFFF" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Vite", icon: SiVite, color: "#9467FF" },
      { name: "VS Code", icon: FiCode, color: "#3B9EF0" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Penpot", icon: SiPenpot, color: "#FFFFFF" },
    ],
  },
  {
    title: "Also comfortable with",
    items: [
      { name: "WordPress", icon: SiWordpress, color: "#3C9BD5" },
      { name: "WooCommerce", icon: SiWoocommerce, color: "#A066D6" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#4B8BBE" },
      { name: "Gemini API", icon: SiGooglegemini, color: "#8E75FF" },
    ],
  },
];

export const learning = ["Node.js", "Express", "REST APIs", "MongoDB queries", "JWT"];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  challenges: string[];
  future: string[];
  image: string;
  live: string;
  code: string;
  date: string;
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    tagline: "Bangla market price tracker",
    summary:
      "Today's prices for rice, lentils, oil, vegetables, fish and more, with day-over-day changes across Bangladesh's 6 divisions.",
    description:
      "Bazar Dor (বাজার দর) is a Bangla-first market price tracker. It shows today's prices for everyday groceries — rice, lentils, oil, vegetables, fish, meat, eggs, milk and spices — with day-over-day changes and market-by-market prices from bazars across Bangladesh's 6 divisions. Visitors can browse freely, and signed-in users can open detailed product pages and edit their profile.",
    features: [
      "Login with email/password, Google and GitHub using BetterAuth with a MongoDB Atlas adapter",
      "Protected product detail pages and a profile page users can edit",
      "Scrolling price ticker plus the top 6 price risers and fallers of the day",
      "Category pages with numeric sorting that correctly handles Bengali numerals",
      "Custom DaisyUI theme, loading skeletons and toast notifications",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "DaisyUI", "BetterAuth", "MongoDB Atlas"],
    challenges: [
      "Sorting prices written in Bengali digits (৳১২০) — they sort as text, so I convert them to numbers before comparing.",
      "Linking accounts: a user who signed up with email and later used Google with the same address had to land in the same account, which needed BetterAuth's account-linking settings.",
      "Duplicate sign-ups appeared to succeed because of an auto sign-in option; I removed it and handled the sign-up → sign-out flow on the client so errors show correctly.",
      "Pages felt slow because the database is in Singapore, so I pinned the Vercel functions to the same region.",
    ],
    future: [
      "Price history charts for each product",
      "Price alerts by email when an item drops below a set price",
      "Let verified users submit prices from their local bazar",
      "An English/Bangla language switch",
    ],
    image: "/projects/bazar-dor-talha.png",
    live: "https://bazar-dor-talha.vercel.app",
    code: "https://github.com/talhabinsaleh/bazar-dor",
    date: "Oct 2026",
  },
  {
    slug: "fitlog",
    title: "FitLog",
    tagline: "Gym workout library",
    summary:
      "A dark-themed workout library where users browse exercises, build a personal plan and save favourites.",
    description:
      "FitLog is a dark, no-nonsense gym companion. Users browse a library of workouts, add the ones they want to today's plan, and save favourites for later. Everything is built from a Figma design and works on phones as well as it does on desktop.",
    features: [
      "Workout library with categories and detail views",
      "Personal plan and saved workouts kept in React Context",
      "State saved to localStorage, so the plan survives page reloads",
      "Toast notifications for every add and remove action",
      "Pixel-matched UI from the Figma design, fully responsive",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "React Context", "react-toastify"],
    challenges: [
      "Reading from localStorage during server rendering caused hydration mismatches, so the saved state loads only after the page mounts.",
      "Matching the Figma design exactly — spacing, font sizes and colors — across mobile, tablet and desktop.",
      "Keeping the plan and saved lists in sync between pages without a database, which I solved with one shared Context.",
    ],
    future: [
      "User accounts so plans sync across devices",
      "A workout timer and set/rep tracking",
      "Weekly progress charts",
    ],
    image: "/projects/fitlog-nu-nine.png",
    live: "https://fitlog-nu-nine.vercel.app",
    code: "https://github.com/talhabinsaleh/fitlog",
    date: "Sep 2026",
  },
  {
    slug: "devstack",
    title: "DevStack",
    tagline: "Tech stack builder",
    summary: "Explore 12 developer technologies and build your own stack, with data loaded from a JSON file.",
    description:
      "DevStack is a React app for exploring developer technologies and putting together your own stack. Technology data loads from a JSON file and is shown as responsive cards with ratings, difficulty levels and badges. Picks go into a \"Your Stack\" sidebar.",
    features: [
      "Technology data fetched from a JSON file with a loading spinner",
      "Responsive card grid (3 / 2 / 1 columns) with ratings, difficulty and badges",
      "\"Your Stack\" sidebar with add, remove and remove-all",
      "Duplicate protection with a warning toast",
      "One gradient defined in a single place drives the whole brand look",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS v4", "react-toastify"],
    challenges: [
      "Learning when to use useEffect: the JSON has to load once on mount, not on every render.",
      "Stopping the same technology from being added twice and telling the user why.",
      "Keeping one gradient consistent across the logo, hero and buttons without repeating it.",
    ],
    future: [
      "Save stacks with a shareable link",
      "Filter and search technologies by category",
      "Compare two technologies side by side",
    ],
    image: "/projects/devstack-theta.png",
    live: "https://devstack-theta.vercel.app",
    code: "https://github.com/talhabinsaleh/devstack",
    date: "Sep 2026",
  },
  {
    slug: "gemini-quiz-wizard",
    title: "Gemini Quiz Wizard",
    tagline: "AI quiz generator",
    summary: "Generates quizzes on any topic using Google's Gemini API, built to explore JavaScript and API integration.",
    description:
      "Gemini Quiz Wizard generates multiple-choice quizzes on any topic using Google's Gemini API. Users enter their own API key, pick a topic, and get a quiz they can answer right in the browser. I built it to practise JavaScript, fetch and working with a real API.",
    features: [
      "Calls the Gemini API straight from the browser",
      "The user's API key is validated and stays in their own browser storage",
      "Quiz generated on any topic, answered and scored on the page",
      "Plain HTML, CSS and JavaScript — no framework",
    ],
    stack: ["JavaScript", "Gemini API", "HTML", "CSS", "GitHub Pages"],
    challenges: [
      "Getting the AI to return questions in a consistent format the page could display.",
      "Handling a wrong or missing API key with a clear message instead of a broken page.",
      "Keeping the key safe without a backend, by never sending it anywhere except Google.",
    ],
    future: [
      "Rebuild it in React with TypeScript",
      "Move the API call to a server so users don't need their own key",
      "Difficulty levels and a score history",
    ],
    image: "/projects/quiz.png",
    live: "https://talhabinsaleh.github.io/Project-By-AI/",
    code: "https://github.com/talhabinsaleh/Project-By-AI",
    date: "2026",
  },
];

export type TimelineItem = { period: string; title: string; place: string; text: string };

export const experience: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "SEO Specialist & Web Developer",
    place: "Yaaply Limited",
    text: "Build WordPress and WooCommerce sites and grow them with technical SEO, performance audits and link building. Also upgrade and maintain an internal AI blog-publishing tool (Python, Flask, WordPress REST API) — added batch publishing of up to 8 articles, featured-image and infographic uploads, automatic internal linking and quality checks, and team access over the office network.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2023 — 2026",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Daffodil Institute of IT, Dhaka",
    text: "Data structures, algorithms, computer networks, databases and programming in C and Python.",
  },
  {
    period: "Alim (HSC equivalent)",
    title: "Higher Secondary — GPA 5.00 out of 5.00",
    place: "Pabna Islamia Madrasah, Pabna",
    text: "Completed higher secondary education under the Bangladesh Madrasah Education Board with a perfect GPA.",
  },
  {
    period: "2026",
    title: "Complete Web Development Course",
    place: "Programming Hero",
    text: "Hands-on React, Next.js and TypeScript projects, each shipped with real auth, data and deployments.",
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];
