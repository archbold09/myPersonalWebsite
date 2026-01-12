// Personal information types
export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  description: string;
  emails: string[];
  phones: string[];
  social: SocialLinks;
  location: string;
  languages?: string[];
  mainSkills?: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
  website?: string;
}

// Experience and education types
export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  period: string;
  year: string;
  type: 'work' | 'freelance' | 'education';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  year: string;
}

// Skills types
export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools' | 'design';
  icon: string;
  iconUrl?: string;
  color: string;
  level: number;
}

// Project types
export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  gallery: string[];
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  features: string[];
  links?: ProjectLinks;
  year: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
}

// Methodology types
export interface MethodologyStep {
  id: number;
  title: string;
  titleEs: string;
  titleEn: string;
  description: string;
  descriptionEs: string;
  descriptionEn: string;
  icon: string;
  image?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
}
