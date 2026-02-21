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

// Gradient colors for each social platform
const gradientMap: Record<string, string> = {
  skool: 'from-[#7058e3] to-[#5e48c8] hover:from-[#5e48c8] hover:to-[#4d3aab] shadow-[#7058e3]/25 hover:shadow-[#7058e3]/40',
  website: 'from-[#5ee5b3] to-[#4cc99a] hover:from-[#4cc99a] hover:to-[#3db385] shadow-[#5ee5b3]/25 hover:shadow-[#5ee5b3]/40',
  email: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  youtube: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  tiktok: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  instagram: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  twitter: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  linkedin: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
  github: 'from-[#1e1e1e] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#333333] shadow-white/5 hover:shadow-white/10',
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

  const gradient = gradientMap[icon] || gradientMap.email;

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
          <div className="bg-gradient-to-r from-[#7058e3] to-[#5ee5b3] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
            {badge}
          </div>
        </motion.div>
      )}

      <div
        className={`relative flex items-center justify-between p-3 md:p-5 rounded-lg md:rounded-xl bg-gradient-to-r ${gradient} text-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 ${
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

        {/* Shine effect - handled by CSS for now */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full pointer-events-none transition-all duration-600 ease-in-out" />
      </div>
    </motion.a>
  );
}
