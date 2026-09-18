import React from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { AppIcon } from './Icons';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  setActivePage: (page: PageView) => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenWhatsApp }) => {
  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-cream-50 pt-16 pb-12 border-t border-forest-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-forest-700/40">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" variant="dark" onClick={() => handleNavClick('home')} />
            <p className="text-sage-200 text-sm leading-relaxed max-w-sm font-sans pt-2">
              Healthyzone is a registered Health Maintenance Organization (HMO) in Nigeria dedicated to everyday health, preventive screenings, and structured lifestyle guidance.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-700/40 text-sage-200 text-xs border border-forest-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                HMO Healthcare & Lifestyle Services • Nigeria
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-sage-200 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-cream-50/90 font-sans">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-500 transition-colors py-1 text-left"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-amber-500 transition-colors py-1 text-left"
                >
                  Our Care & Wellness Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-amber-500 transition-colors py-1 text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-sage-200 font-sans">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-cream-50/90 font-sans">
              <button
                onClick={onOpenWhatsApp}
                className="flex items-start gap-2.5 text-left group hover:text-amber-500 transition-colors"
              >
                <AppIcon name="WhatsappLogo" size={20} color="#C9DCC7" className="group-hover:text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-cream-50 group-hover:text-amber-500">
                    {COMPANY_INFO.whatsappNumber}
                  </div>
                  <div className="text-xs text-sage-200">
                    Tap to start an instant WhatsApp conversation
                  </div>
                </div>
              </button>

              <div className="flex items-start gap-2.5">
                <AppIcon name="MapPin" size={20} color="#C9DCC7" className="shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-cream-50">{COMPANY_INFO.location}</div>
                  <div className="text-xs text-sage-200">Serving individuals, families, and organizations</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <AppIcon name="Clock" size={20} color="#C9DCC7" className="shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-cream-50">{COMPANY_INFO.operatingHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-200/80 font-sans">
          <p>© {new Date().getFullYear()} Healthyzone HMO. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Health Maintenance Organization (HMO) • Preventive Care & Lifestyle Management Demo
          </p>
        </div>
      </div>
    </footer>
  );
};
