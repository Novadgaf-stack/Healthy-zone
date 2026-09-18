import React, { useState, useEffect } from 'react';
import { AppIcon } from './Icons';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal when user scrolls past approx 450px (beyond hero)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className="fixed bottom-24 right-6 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-cream-50 text-forest-700 border border-sage-200 shadow-[0_4px_18px_rgba(11,46,31,0.14)] hover:bg-forest-700 hover:text-cream-50 hover:-translate-y-1 transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-forest-700 cursor-pointer group"
    >
      <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
        <AppIcon name="ArrowUp" size={20} color="currentColor" />
      </span>
    </button>
  );
};
