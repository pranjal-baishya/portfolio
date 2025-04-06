export interface Bio {
  name: string
  roles: string[]
  description: string
  github: string
  resume: string
  linkedin: string
  twitter: string
  insta: string
  facebook: string
  email: string
}

export interface Skill {
  name: string
  image: string
}

export const enum SkillTitle {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DEV_OPS = "DevOps",
  MOBILE = "Mobile",
  OTHERS = "Others",
}
export interface SkillCategory {
  title: SkillTitle
  skills: Skill[]
}

export interface Experience {
  id: number
  img: string
  role: string
  company: string
  date: string
  desc: string
  skills: string[]
  doc?: string
  companyUrl?: string
}

export interface Education {
  id: number
  img: string
  school: string
  date: string
  grade: string
  desc: string
  degree: string
}

export interface ProjectMember {
  name: string
  img: string
  linkedin: string
  github: string
}

export const enum ProjectCategory {
  ALL = "all",
  WEB_APP = "web app",
  ANDROID_APP = "android app",
}
export interface Project {
  id: number
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  category: ProjectCategory
  github: string
  webapp: string
  member?: ProjectMember[]
}
