export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  specialization: string;
  intro: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export interface AboutData {
  fullName: string;
  initials: string;
  photo?: string;
  degree: string;
  yearLevel: string;
  currentRole: string;
  paragraphs: string[];
  careerGoal: string;
  interests: string[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  keyFeatures: string[];
  challenge: string;
  learned: string;
  github?: string;
  demo?: string;
  thumbnail?: string;
  aiVisuals: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  handle: string;
  href: string;
}

export interface ContactData {
  name: string;
  email: string;
  links: ContactLink[];
}

export interface SiteConfig {
  /** Where the site is published: origin only, no trailing slash. */
  url: string;
}

export const siteConfig: SiteConfig = {
  url: "https://yourusername.github.io",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroData = {
  name: "John Andrew T. Garcia",
  title: "Full-Stack Developer",
  tagline: "I build practical web applications.",
  specialization: "Backend · Full-Stack · Cybersecurity",
  intro:
    "I'm a 2nd-year Information Technology student who likes turning ideas into working software — from clean frontends to the APIs and databases behind them.",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: {
    label: "GitHub",
    href: "https://github.com/UnsightII",
    external: true,
  },
};

export const about: AboutData = {
  fullName: "John Andrew T. Garcia",
  initials: "JG",
  degree: "BSIT — Bachelor of Science in Information Technology",
  yearLevel: "2nd Year",
  currentRole: "Student",
  paragraphs: [
    "I'm an Information Technology student who enjoys the full arc of building software — from sketching an idea to shipping something people can actually use. Most of my time goes into web development: thinking in TypeScript and React, and wiring up the APIs and databases behind the UI.",
    "I care about code that's readable and easy to maintain, and I like understanding how the pieces of a bigger system fit together. Outside of class, you'll usually find me at a chessboard or in a video game, chasing the same two things: strategy and the next interesting challenge.",
  ],
  careerGoal: "To become a full-stack developer building practical apps end-to-end.",
  // Portrait asset used in the about section.
  photo: "/1v1.jpg",
  interests: ["Chess", "Video Games"],
};

export const projects: Project[] = [
  {
    id: "taskflow",
    name: "TaskFlow",
    type: "Web App",
    description:
      "A drag-and-drop task manager for organizing study work and personal to-dos.",
    problem:
      "Keeping track of tasks across classes and personal projects, scattered across too many apps.",
    solution:
      "A single kanban-style board where tasks can be created, dragged between columns, and filtered by tag and due date.",
    role: "Solo developer — planned, designed, built, and documented.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    keyFeatures: [
      "Drag-and-drop kanban board",
      "Tag and due-date filters",
      "Dark-mode UI",
      "Local and cloud sync",
    ],
    challenge:
      "Making drag-and-drop feel smooth while keeping the board state consistent across updates.",
    learned:
      "Learned to structure state so one interaction updates several UI pieces at once, and to keep the API clean for the frontend to consume.",
    github: "https://github.com/yourusername/taskflow",
    demo: "https://your-portfolio.example.com",
    aiVisuals: true,
  },
  {
    id: "studysync",
    name: "StudySync",
    type: "Full-Stack Web App",
    description:
      "A study-session tracker with focused timers, streak tracking, and per-topic notes.",
    problem:
      "It's hard to stay consistent with study habits when there's no easy way to see progress.",
    solution:
      "A focus-timer app that records sessions, builds streaks, and keeps notes organized by topic.",
    role: "Frontend focus, with auth and user profiles.",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    keyFeatures: [
      "Pomodoro timer",
      "Streaks and stats dashboard",
      "Per-topic notes",
      "Auth and profiles",
    ],
    challenge:
      "Designing the stats views so they stayed lightweight and readable on any screen.",
    learned:
      "Learned to model relational data, and how small UX details decide whether people come back daily.",
    github: "https://github.com/yourusername/studysync",
    aiVisuals: false,
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "HTML", "CSS"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Docker"] },
  { label: "Other", items: ["Figma", "Linux", "Notion", "Agile / Scrum"] },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Plan",
    description:
      "Break the problem down, research what's available, and define what success looks like before writing any code.",
  },
  {
    title: "Design",
    description:
      "Sketch the UI and map out data flow and components so the structure is clear before building.",
  },
  {
    title: "Develop",
    description:
      "Implement in small, focused pieces — one feature at a time — keeping the code readable and the build green.",
  },
  {
    title: "Test",
    description:
      "Run through edge cases, test interactions by hand, and fix issues as they surface.",
  },
  {
    title: "Improve",
    description:
      "Review, refactor, and gather feedback, then ship the next iteration.",
  },
];

export const contact: ContactData = {
  name: "John Andrew T. Garcia",
  email: "johnandrewgarcia123@gmail.com",
  links: [
    { label: "Email", handle: "johnandrewgarcia123@gmail.com", href: "mailto:johnandrewgarcia123@gmail.com" },
    { label: "GitHub", handle: "@UnsightII", href: "https://github.com/UnsightII" },
    { label: "LinkedIn", handle: "andrew-garcia-7357243a7", href: "https://www.linkedin.com/in/andrew-garcia-7357243a7" },
    { label: "Discord", handle: "unsightii#0882", href: "https://discord.com/users/unsightii" },
  ],
};