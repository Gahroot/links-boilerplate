/**
 * Site Configuration
 *
 * Update this file with your personal information to customize your link page.
 * Replace all placeholder values with your actual data.
 */

export interface SocialLink {
  icon: 'youtube' | 'tiktok' | 'instagram' | 'twitter' | 'linkedin' | 'github' | 'email' | 'skool' | 'website';
  label: string;
  value?: string; // Display value (optional, defaults to label)
  href: string;
  onClick?: () => void;
  badge?: string; // Optional badge text like "New", "Hiring", "Limited Spots"
  featured?: boolean; // Highlight this button with special styling
}

export interface SiteConfig {
  // Profile Information
  name: string;
  title: string;
  description: string;
  profileImage: string; // Path to your profile image in /public folder

  // Social Media Links
  links: SocialLink[];

  // SEO & Meta
  seo: {
    title: string;
    description: string;
    ogImage: string; // Path to Open Graph image in /public folder
    url: string; // Your deployed URL
    twitterHandle?: string;
  };

  // Styling
  theme: {
    fontFamily: string; // Custom font family (make sure to import in layout)
  };
}

export const siteConfig: SiteConfig = {
  // Profile Information
  name: 'Nolan Grout',
  title: 'AI Automation & Education',
  description: 'Learn AI, automate your business, and stay ahead of the curve.',
  profileImage: '/images/nolan-headshot.jpg',

  // Social Media Links
  links: [
    {
      icon: 'skool',
      label: 'Skool',
      value: 'Learn AI with me (Skool)',
      href: 'https://www.skool.com/the-prestyj-blueprint-7395/about',
      badge: 'Community',
      featured: true,
    },
    {
      icon: 'website',
      label: 'Prestyj.com',
      value: 'Integrate AI into your business',
      href: 'https://prestyj.com',
      badge: 'Services',
      featured: true,
    },
    {
      icon: 'youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/@agenticnolan',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nolan-grout-1b4390385/',
    },
  ],

  // SEO & Meta Tags
  seo: {
    title: 'Nolan Grout - AI Automation & Education | Prestyj',
    description: 'Learn AI, automate your business, and stay ahead of the curve.',
    ogImage: '/og-image.png',
    url: 'https://links.prestyj.com',
  },

  // Theme Configuration
  theme: {
    fontFamily: "'Inter', sans-serif",
  },
};
