export interface NavLink {
  label: string;
  fragment: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
}
