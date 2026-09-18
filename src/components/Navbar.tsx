import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { AppIcon } from './Icons';
import { Button } from './Button';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenWhatsApp,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? 'py-2.5 sm:py-3.5 px-3 sm:px-6'
          : 'py-4 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <header
        className={`mx-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'max-w-[980px] rounded-2xl bg-cream-50/95 backdrop-blur-[14px] border border-sage-200/90 shadow-[0_8px_30px_rgba(11,46,31,0.08),0_1px_3px_rgba(0,0,0,0.04)] px-4 sm:px-6 py-2.5 sm:py-3'
            : 'max-w-7xl w-full bg-cream-50/80 backdrop-blur-sm border-b border-sage-200/50 py-2 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="animate-in fade-in duration-300">
            <Logo
              size="md"
              variant="light"
              onClick={() => handleNavClick('home')}
              className="focus-visible:outline-2 focus-visible:outline-forest-700 rounded-lg cursor-pointer transition-transform hover:scale-[1.01]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all relative rounded-lg font-sans select-none cursor-pointer ${
                    isActive
                      ? 'text-forest-700 font-semibold bg-cream-100/70'
                      : 'text-ink-500 hover:text-forest-950 hover:bg-cream-100/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {/* Amber-500 bespoke underline for active link */}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-amber-500 rounded-full animate-in fade-in duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg text-forest-700 hover:text-forest-950 hover:bg-sage-200/40 transition-colors cursor-pointer"
              title="Chat directly on WhatsApp"
            >
              <AppIcon name="WhatsappLogo" size={18} color="#1B5E3A" />
              <span className="font-mono text-xs tracking-tight">{COMPANY_INFO.whatsappNumber}</span>
            </button>

            <Button
              variant="amber"
              size="sm"
              onClick={() => handleNavClick('contact')}
              trailingIcon="ArrowRight"
            >
              Talk to Us
            </Button>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Icon + Hamburger */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={onOpenWhatsApp}
              className="p-2 rounded-lg text-forest-700 hover:bg-cream-100 transition-colors cursor-pointer"
              aria-label="Direct WhatsApp Contact"
            >
              <AppIcon name="WhatsappLogo" size={22} color="#1B5E3A" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-900 hover:bg-cream-100 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileMenuOpen}
            >
              <AppIcon
                name={mobileMenuOpen ? 'X' : 'List'}
                size={22}
                color="#1C1B17"
              />
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-sage-200/80 bg-cream-50 rounded-2xl p-4 shadow-xl border border-sage-200 animate-in fade-in slide-in-from-top-2 duration-200 space-y-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl text-left transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-cream-100 text-forest-700 font-semibold'
                        : 'text-ink-900 hover:bg-cream-100/70 hover:text-forest-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-sage-200/70 flex flex-col gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                icon="WhatsappLogo"
                className="w-full"
              >
                WhatsApp: {COMPANY_INFO.whatsappNumber}
              </Button>

              <Button
                variant="amber"
                size="sm"
                onClick={() => handleNavClick('contact')}
                className="w-full"
              >
                Talk to Healthyzone
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
