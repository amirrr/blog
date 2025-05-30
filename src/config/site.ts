// src/config/site.ts

interface SiteConfig {
  siteName: string;
  name: {
    first: string;
    last: string;
  };
  title: string;
  email: string;
  socials: {
    github: string; // URL
    linkedin: string; // URL
  };
  university?: string; // Optional
  aboutMe: string[]; // Array of paragraphs
  newsItems: Array<{ date: string; content: string }>;
  footerGhUser: {
    name: string;
    url: string;
  };
  profileImage: string | undefined; // Path to profile image
  profileImageAlt: string;
}

export const siteConfig: SiteConfig = {
  siteName: "Firstname Lastname's personal blog", // Update with your name
  name: {
    first: "Firstname.",
    last: "Lastname",
  },
  title: "Software Engineer",
  email: "scholar@example.com",
  socials: {
    github: "https://github.com", // Your personal GitHub profile
    linkedin: "https://linkedin.com", // Your personal LinkedIn profile
  },
  university: "[Your University Name]",
  aboutMe: [
    "Hello! I'm someone, a passionate software engineer. My academic journey is driven by a curiosity to unravel complex problems and contribute meaningful solutions that can shape the future.",
    "Beyond academics, I enjoy hiking, photography, and exploring new programming languages. I believe in a balanced approach to life and work, finding inspiration in both intellectual pursuits and creative outlets.",
  ],
  newsItems: [
    {
      date: "January 2023",
      content:
        "I am thrilled to announce that I have joined the University of Washington as a PhD student in Computer Science and Engineering.",
    },
    {
      date: "January 2023",
      content:
        "I am excited to share that I have been awarded the prestigious Microsoft Fellowship for my PhD studies.",
    },
    {
      date: "August 2022",
      content:
        "I am excited to announce that I have joined the University of Oxford as a DPhil student in Computer Science.",
    },
    {
      date: "June 2022",
      content:
        "I am thrilled to share that I have been awarded the prestigious Google PhD Fellowship for my research in Computer Science.",
    },
    {
      date: "January 2022",
      content:
        "I am excited to announce that I have joined the University of Cambridge as a PhD student in Computer Science.",
    },
  ],
  footerGhUser: {
    name: "github",
    url: "https://github.com/github",
  },
  profileImage: undefined, // Path to your profile image in the public directory e.g. "/images/profile.jpg"
  profileImageAlt: "Profile picture of Firstname Lastname",
};
