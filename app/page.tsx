'use client';

import { ProfileSection } from '@/components/profile-section';
import { SectionTitle } from '@/components/section-title';
import { ContactsList } from '@/components/contacts-list';
import { FloatingBackground } from '@/components/floating-background';
import { siteConfig } from '@/config/site-config';

export default function Home() {
  const reducedMotion = false; // You can add prefers-reduced-motion detection here

  return (
    <div className="h-screen overflow-hidden bg-[#121212] relative">
      <FloatingBackground />
      <div className="container main-content mx-auto px-4 py-8 md:py-16 max-w-6xl relative z-10 h-full flex items-center justify-center">
        {/* Main content */}
        <div className="w-full max-w-4xl">
            {/* Mobile: Vertical layout */}
            <div className="md:hidden">
              <ProfileSection
                name={siteConfig.name}
                profileImage={siteConfig.profileImage}
                reducedMotion={reducedMotion}
              />
              <SectionTitle name={siteConfig.name} reducedMotion={reducedMotion} />
              <div className="space-y-3">
                <ContactsList links={siteConfig.links} reducedMotion={reducedMotion} />
              </div>
            </div>

            {/* Desktop: Two column layout - Picture+Name left, Buttons right */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center">
              {/* Left: Profile + Name */}
              <div className="flex flex-col items-center">
                <ProfileSection
                  name={siteConfig.name}
                  profileImage={siteConfig.profileImage}
                  reducedMotion={reducedMotion}
                />
                <SectionTitle name={siteConfig.name} reducedMotion={reducedMotion} />
              </div>

              {/* Right: Buttons in single column */}
              <div className="space-y-3">
                <ContactsList links={siteConfig.links} reducedMotion={reducedMotion} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
