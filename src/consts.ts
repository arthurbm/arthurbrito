import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Arthur Brito",
  EMAIL: "arthurmedeiros32@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software Engineer passionate about innovation, full stack development, and generative AI.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Thoughts and insights on software engineering, AI, and technology.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My professional journey in software engineering and product development.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A showcase of my technical projects and research work in software development and AI.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/arthurbm"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/arthur-brito-medeiros",
  }
];
