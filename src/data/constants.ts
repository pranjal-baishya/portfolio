import {
  Bio as BioType,
  Experience,
  Education,
  Project,
  SkillCategory,
  ProjectCategory,
  SkillTitle,
} from "./types"

import alphaSenseLogo from "../images/alphasenseLogo.jpeg"
import sentieoLogo from "../images/sentieoLogo.png"
import ccNITSLogo from "../images/ccNITSLogo.png"
import NITSImage from "../images/NITSImage.jpg"
import SANNalbariImage from "../images/SANNalbariImage.png"
import Vidyabharti from "../images/Vidyabharti.png"
import sudokuWeb from "../images/sudokuWeb.png"
import sudokuMobile from "../images/sudokuMobile.png"
import portfolioImage from "../images/portfolioImage.png"
import mathPuzzleGame from "../images/mathPuzzleGame.png"
import ChatAppImage from "../images/chatAppImage.png"

export const Bio: BioType = {
  name: "Pranjal Baishya",
  roles: [
    "Full Stack Developer",
    "Android Developer",
    "Programmer",
    "Problem Solver",
  ],
  description:
    "I'm a tech enthusiast passionate about solving complex problems and building scalable systems. Always exploring new technologies, I focus on writing clean, efficient code and creating robust solutions. Continuously learning, I thrive in dynamic environments and enjoy turning ideas into high-performing results.",
  github: "https://github.com/pranjal-baishya",
  resume:
    "https://drive.google.com/file/d/1lS4TUvWITQKhXEmhI40HptfxHj8k9Zym/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/pranjal-baishya-46a411174/",
  twitter: "https://twitter.com/PranjalBaishya",
  insta: "https://www.instagram.com/pranjal._.baishya/",
  facebook: "https://www.facebook.com/prodyunmya.baishya/",
  email: "pbaishya318@gmail.com",
}

export const skills: SkillCategory[] = [
  {
    title: SkillTitle.FRONTEND,
    skills: [
      {
        name: "React.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "GraphQL",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "Redux",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      },
      {
        name: "Zustand",
        image:
          "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/favicon.ico",
      },
      {
        name: "HTML5",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS3",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "SCSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Vitest",
        image: "https://vitest.dev/logo.svg",
      },
      {
        name: "PWA",
        image:
          "https://raw.githubusercontent.com/webmaxru/progressive-web-apps-logo/master/pwalogo.svg",
      },
      {
        name: "Styled Components",
        image: "https://styled-components.com/logo.png",
      },
      {
        name: "Axios",
        image: "https://axios-http.com/assets/logo.svg",
      },
    ],
  },
  {
    title: SkillTitle.BACKEND,
    skills: [
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "GraphQL",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "REST APIs",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "JWT",
        image: "https://jwt.io/img/pic_logo.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "Socket.IO",
        image: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
      },
      {
        name: "WebSocket",
        image: "https://cdn.worldvectorlogo.com/logos/websocket.svg",
      },
      {
        name: "Mongoose",
        image:
          "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png",
      },
      {
        name: "Cookie Parser",
        image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      },
      {
        name: "Prisma",
        image: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
      },
      {
        name: "Redis",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      },
    ],
  },
  {
    title: SkillTitle.DEV_OPS,
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
      },
      {
        name: "GitHub",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg",
      },
      {
        name: "GitHub Actions",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Jenkins",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "AWS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
    ],
  },
  {
    title: SkillTitle.MOBILE,
    skills: [
      {
        name: "Android",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
      },
      {
        name: "Kotlin",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original-wordmark.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain-wordmark.svg",
      },
      {
        name: "Android Studio",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original-wordmark.svg",
      },
      {
        name: "Gradle",
        image: "https://cdn.worldvectorlogo.com/logos/gradle.svg",
      },
      {
        name: "Flutter",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
      },
      {
        name: "Dart",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original-wordmark.svg",
      },
    ],
  },
  {
    title: SkillTitle.OTHERS,
    skills: [
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Figma",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      },
      {
        name: "Adobe XD",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Cursor",
        image:
          "https://registry.npmmirror.com/@lobehub/icons-static-png/1.43.0/files/light/cursor.png",
      },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: 0,
    img: alphaSenseLogo,
    role: "Software Engineer II",
    company: "AlphaSense",
    date: "April 2024 - Present",
    desc: "As a Senior Software Engineer at AlphaSense, I led the migration of several high-impact modules from a monolithic architecture to microservices, resulting in a ~30% improvement in system scalability and deployment efficiency. I contributed across both frontend and backend, working extensively with GraphQL and Node.js services. I enhanced the platform's GenSearch and Deep Research capabilities by developing clean ui and implementing smart caching on both the GraphQL layer and frontend, leading to ~30% faster data retrieval and ~25% reduction in page load times. I also implemented lazy loading strategies for performance optimization and ensured robustness through comprehensive unit testing with Vitest. I worked with Kubernetes for service deployment and configuration, and actively debugged and resolved critical issues related to feature storage and environment-level inconsistencies, helping stabilize core services in production.",
    skills: [
      "React",
      "TypeScript",
      "NodeJs",
      "GraphQL",
      "Apollo Client",
      "Lazy Loading",
      "Microservices",
      "Kubernetes (K8s)",
      "Argocd",
      "Docker",
      "Material UI",
      "Figma",
      "S3",
      "Prometheus",
      "Grafana",
      "Message Queue",
      "AWS",
      "Vitest",
      "ESLint",
      "Cursor",
      "Jenkins",
      "Webpack",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },
  {
    id: 1,
    img: alphaSenseLogo,
    role: "Software Engineer",
    company: "AlphaSense",
    date: "January 2023 - March 2024",
    desc: "At AlphaSense, I contributed across multiple teams, delivering full-stack features across React, GraphQL, backend services, and internal tools. I led the frontend development of the Image Search experience, adapting rapidly to evolving specs and accelerating release timelines by ~12%. Over time, I significantly improved code quality and reusability, enabling faster development cycles. I played a major role in revamping the Industry/Company Summary feature implementing reusable widgets and components while reorganizing legacy code for better maintainability and reducing bugs by ~20%. I developed reusable event-tracking hooks used across multiple modules, improving product usage insights by ~30%. Additionally, I delivered critical bug fixes, integrated the Smart Summary export feature, and contributed to reducing tech debt in different module which collectively led to a ~15–20% uplift in user engagement, enterprise feature adoption, and overall product reliability.",
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Storybook",
      "Component Library",
      "Node Js",
      "Next Js",
      "AWS",
      "GraphQL",
      "Apollo Server",
      "Jest",
      "Jenkins",
      "ESLint",
      "Prettier",
      "Scss",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
  },
  {
    id: 2,
    img: sentieoLogo,
    role: "Software Engineer",
    company: "Sentieo",
    date: "June 2021 - December 2022",
    desc: "Transformed the company's legacy website into a high-performance Progressive Web App (PWA) within 3 days of joining, leading to ~15% faster load times and contributing to a ~10% increase in mobile user retention. Designed and implemented a custom JavaScript keyboard navigation library, inspired by Mousetrap, for enterprise-wide internal use, improving accessibility and user workflow efficiency across power users. Engineered and deployed scalable, reusable UI components, accelerating feature development velocity and consistency for Sentieo Vega. Enhanced the user analytics infrastructure to enable deep usage tracking and actionable insights, empowering product strategy and contributing to a ~12% lift in feature adoption.",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node Js",
      "Scss",
      "Webpack",
      "Service Worker",
      "Jest",
      "Storybook",
      "Jenkins",
      "Docker",
      "Nginx",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "GDSC NIT Silchar",
    date: "June 2020 - February 2021",
    desc: "As a core member of GDSC, I collaborated with fellow developers on innovative Android projects, strengthening my skills in mobile development and cross-functional teamwork. I actively contributed to the tech community by organizing and participating in hackathons, study jams, and workshops. During this period, I also published my first Android application, Math Number Puzzles, which has surpassed 10,000+ downloads on the Google Play Store, marking a significant personal milestone in my development journey.",
    skills: [
      "Leadership",
      "Java",
      "Kotlin",
      "XML",
      "Firebase",
      "Git",
      "GitHub",
      "Android Studio",
      "Gradle",
      "Android SDK",
      "Shared Preferences",
      "Google Play Console",
      "Retrofit",
      "Admob",
      "Jetpack",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  },
  {
    id: 4,
    img: ccNITSLogo,
    role: "Technical member",
    company: "Coding CLub NIT Silchar",
    date: "January 2020 - April 2021",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Competitive Programming",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Machine Learning",
    ],
  },
]

export const education: Education[] = [
  {
    id: 0,
    img: NITSImage,
    school: "National Institute of Technology, Silchar",
    date: "Jul 2017 - May 2021",
    grade: "8.56 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at National Institute of Technology, Silchar. I have completed 4 semesters and have a CGPA of 8.56. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at NIT Silchar, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: SANNalbariImage,
    school: "Sankardev Academy, Nalbari, Assam",
    date: "Apr 2014 - Jun 2016",
    grade: "87.4%",
    desc: "I completed my class 12 high school education at Sankardev Academy, Nalbari, where I studied Science with Computer Science.",
    degree: "XII(Higher Secondary), Science",
  },
  {
    id: 2,
    img: Vidyabharti,
    school: "Sankardeva sishu vidya niketan, Dhamdhama, Assam",
    date: "Feb 2014",
    grade: "91%",
    desc: "I completed my class 10 education at Sankardeva sishu vidya niketan, where I studied Science with Computer Application.",
    degree: "X(Secondary), Science",
  },
]

export const projects: Project[] = [
  {
    id: 11,
    title: "Sudoku",
    date: "April 2025",
    description:
      "A modern, feature-rich Sudoku game with multiple difficulty levels, dark mode, and intuitive controls. Challenge yourself with daily puzzles, track your progress, and enjoy a clean, distraction-free gaming experience.",
    image: sudokuWeb,
    tags: [
      "Dart",
      "Flutter",
      "C++",
      "CMake",
      "Swift",
      "C",
      "Html",
      "CSS",
      "CI/CD",
    ],
    category: ProjectCategory.WEB_APP,
    member: [
      {
        name: "Pranjal Baishya",
        img: "https://github.com/pranjal-baishya.png",
        linkedin: "https://www.linkedin.com/in/pranjal-baishya/",
        github: "https://github.com/pranjal-baishya",
      },
    ],
    github: "https://github.com/pranjal-baishya/sudoku",
    webapp: "https://pranjal-baishya.github.io/sudoku/",
  },
  {
    id: 0,
    title: "Portfolio Website",
    date: "Jan 2025 - April 2025",
    description:
      "A modern and interactive portfolio website showcasing my professional journey and technical expertise. Built with cutting-edge web technologies, this portfolio features smooth animations, and responsive design. The website includes sections for projects, skills, experience timeline, and a contact form with email integration.",
    image: portfolioImage,
    tags: [
      "React.js",
      "React Router",
      "TypeScript",
      "Vite",
      "Material UI",
      "Framer Motion",
      "EmailJS",
      "Styled Components",
      "CI/CD",
    ],
    category: ProjectCategory.WEB_APP,
    github: "https://github.com/pranjal-baishya/Portfolio",
    webapp: "https://pranjal-baishya.github.io/Portfolio/",
  },
  {
    id: 1,
    title: "Full Stack Chat App",
    date: "March 2025",
    description:
      "This is a modern, full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) using TypeScript throughout the codebase. The application leverages Socket.IO to enable real-time bidirectional communication between users, allowing for instant message delivery and updates.",
    image: ChatAppImage,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "bcryptjs",
      "Zustand",
      "Socket.IO",
      "DaisyUI",
      "TypeScript",
    ],
    category: ProjectCategory.WEB_APP,
    github: "https://github.com/pranjal-baishya/fullstack-chat-app",
    webapp: "https://fullstack-chat-app-glyx.onrender.com/",
  },
  {
    id: 2,
    title: "Collaborative Editor",
    date: "Feb 2025",
    description:
      "A Collaborative Editor that enables real-time document editing among multiple users. The frontend uses React with Draft.js for rich text editing capabilities, allowing users to create and edit documents with formatting. Real-time collaboration is implemented using WebSocket connections (ws package), enabling instant synchronization of changes between different users editing the same document. The backend is built with Node.js and uses MongoDB (via Mongoose) for data persistence.",
    image:
      "https://github.com/pranjal-baishya/collaborative-editor/raw/main/assets/collaborative-editor.png",
    tags: [
      "React",
      "Draft.js",
      "WebSocket",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Styled Components",
      "Axios",
      "Nodemon",
      "Mongoose",
    ],
    category: ProjectCategory.WEB_APP,
    github: "https://github.com/pranjal-baishya/collaborative-editor",
    webapp: "https://collaborative-editor.netlify.app/",
  },
  {
    id: 3,
    title: "Math Number Puzzles",
    date: "Dec 2021 - Apr 2022",
    description:
      "App Is Currently In Playstore 10000+ Downloads. This puzzle game challenges your normal way of thinking. The main objective of this game is to find the hidden patterns in the puzzles. This game helps you to stretch your limit of intelligence, increases your observation skills, enhance your logical reasoning capability, forces you to think in an unconventional way,enhance your out-of-the-box thinking, improves your IQ.",
    image: mathPuzzleGame,
    tags: ["Java", "Android Studio", "Gradle", "Android SDK", "XML", "Admob"],
    category: ProjectCategory.ANDROID_APP,
    member: [
      {
        name: "Pranjal Baishya",
        img: "https://github.com/pranjal-baishya.png",
        linkedin: "https://www.linkedin.com/in/pranjal-baishya/",
        github: "https://github.com/pranjal-baishya",
      },
    ],
    github: "https://github.com/pranjal-baishya/Math-Number-Puzzles",
    webapp:
      "https://play.google.com/store/apps/details?id=com.pranjal.mathnumberpuzzles",
  },
  {
    id: 7,
    title: "Sudoku",
    date: "April 2025",
    description:
      "A modern, feature-rich Sudoku game with multiple difficulty levels, dark mode, and intuitive controls. Challenge yourself with daily puzzles, track your progress, and enjoy a clean, distraction-free gaming experience.",
    image: sudokuMobile,
    tags: ["Dart", "Flutter", "Android SDK", "Gradle", "Html", "CSS", "CI/CD"],
    category: ProjectCategory.ANDROID_APP,
    member: [
      {
        name: "Pranjal Baishya",
        img: "https://github.com/pranjal-baishya.png",
        linkedin: "https://www.linkedin.com/in/pranjal-baishya/",
        github: "https://github.com/pranjal-baishya",
      },
    ],
    github: "https://github.com/pranjal-baishya/sudoku",
    webapp:
      "https://play.google.com/store/apps/details?id=com.pranjalbaishya.sudoku",
  },
]
