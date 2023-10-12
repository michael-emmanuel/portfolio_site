import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import artsyjewelsImg from "@/public/artsyjewels.png";
import canviiImg from "@/public/canvii.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Tester",
    location: "Piscataway, NJ",
    description:
      "I tested software and took part in the release of automated testing scripts which increased productivity significantly.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2015",
  },
  {
    title: "Graduated bootcamp",
    location: "New Brunswick, NJ",
    description:
      "I graduated after 6 months of studying. I immediately found a part-time job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
  },
  {
    title: "Front-End Developer",
    location: "New Brunswick, NJ",
    description:
      "I worked as a front-end developer part-time where I worked directly on the Rutgers homepage, I eventuall upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Application Developer",
    location: "Remote",
    description:
      "I worked as an application developer, where I touched the entire stack. My stack included React, TypeScript, Node.js, Docker and SQL.",
    icon: React.createElement(FaReact),
    date: "2018 - 2020",
  },
  {
    title: "Freelance Web Developer",
    location: "Remote",
    description:
      "I worked as a full stack developer, creating and maintaining frontend and backend components. The stack included React, TypeScript, Node.js, AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "I worked as a full stack developer and got a ton of exciting exposure with AWS. The stack included React, TypeScript, Python, Node.js, AWS.",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
      "I currently work as a software engineer where I build business applications and contribute to the architecture of highly scalable business solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - current",
  },
] as const;

export const projectsData = [
  {
    title: "Artsy Jewels",
    description:
      "I worked as a full-stack developer on this startup project. Customers can order sterling jewerly.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Shopify"],
    imageUrl: artsyjewelsImg,
  },
  {
    title: "CANVII",
    description:
      "Storefront for purchasing high quality frames and art pieces. I was the full-stack developer.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: canviiImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "AWS",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Docker",
] as const;
