'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Copy } from 'lucide-react';
import { SocialIcon } from './social-icons';

interface ContactRowProps {
  icon: string;
  label: string;
  value?: string;
  href: string;
  reducedMotion?: boolean;
  isEmail?: boolean;
  badge?: string;
  featured?: boolean;
}

// Solid background colors for each social platform
const colorMap: Record<string, string> = {
  skool: 'bg-[#7058e3] hover:bg-[#7058e3]/90 shadow-sm',
  website: 'bg-[#7058e3] hover:bg-[#7058e3]/90 shadow-sm',
  email: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  youtube: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  tiktok: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  instagram: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  twitter: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  linkedin: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
  github: 'bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-white/10 shadow-sm',
};

export function ContactRow({
  icon,
  label,
  value,
  href,
  reducedMotion = false,
  isEmail = false,
  badge,
  featured = false,
}: ContactRowProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isEmail && value) {
      e.preventDefault();
      navigator.clipboard?.writeText(value);
      // You could add a toast notification here
    }
  };

  const bgColor = colorMap[icon] || colorMap.email;

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      target={href && !isEmail ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      className="group block relative"
    >
      {/* Badge */}
      {badge && (
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          animate={{
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="bg-[#5ee5b3]/20 border border-[#5ee5b3]/40 text-[#5ee5b3] px-2 py-0.5 rounded-full text-xs font-semibold">
            {badge}
          </div>
        </motion.div>
      )}

      <div
        className={`relative flex items-center justify-between p-3 md:p-5 rounded-xl ${bgColor} text-white overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-100 ${
          featured ? 'ring-2 ring-[#7058e3]/60 ring-offset-2 ring-offset-[#121212]' : ''
        }`}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
            <SocialIcon icon={icon} className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <span className="text-sm md:text-base font-semibold tracking-wide font-[family-name:var(--font-manrope)]">
            {value || label}
          </span>
        </div>
        <div className="text-white/80 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
          {isEmail ? (
            <Copy className="w-5 h-5 transition-transform duration-300" />
          ) : (
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
          )}
        </div>

      </div>
    </motion.a>
  );
}
