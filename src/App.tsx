/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, ServiceItem, WellnessArticle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceModal } from './components/ServiceModal';
import { ArticleModal } from './components/ArticleModal';
import { ScrollToTop } from './components/ScrollToTop';
import { AppIcon } from './components/Icons';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<WellnessArticle | null>(null);

  // Sync hash routing on initial load and popstate
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services') {
        setActivePage('services');
      } else if (hash === 'contact') {
        setActivePage('contact');
      } else if (hash === 'home' || hash === '') {
        setActivePage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToPage = (page: PageView) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    const defaultMsg = 'Hello Healthyzone, I would like to learn more about your health and lifestyle plans.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-ink-900 font-sans selection:bg-sage-200 selection:text-forest-950">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateToPage}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={navigateToPage}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
            onSelectService={(svc) => setSelectedService(svc)}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={navigateToPage}
            onOpenWhatsApp={() => handleOpenWhatsApp('Hello Healthyzone, I am exploring your care plans directory.')}
            onSelectService={(svc) => setSelectedService(svc)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onOpenWhatsApp={() => handleOpenWhatsApp('Hello Healthyzone, I am contacting your team for care support.')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={navigateToPage}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectContact={() => {
          setSelectedService(null);
          navigateToPage('contact');
        }}
      />

      {/* Wellness Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Scroll to Top Action Button (Appears past hero) */}
      <ScrollToTop />

      {/* Floating WhatsApp Quick Action Button (Fixed Bottom-Right) */}
      <aside aria-label="WhatsApp quick contact">
        <button
          onClick={() => handleOpenWhatsApp()}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1B5E3A] hover:bg-[#0B2E1F] text-cream-50 shadow-[0_6px_24px_rgba(11,46,31,0.25)] transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-forest-700"
          aria-label="Direct WhatsApp chat with Healthyzone"
        >
          <AppIcon name="WhatsappLogo" size={22} color="#FAF7F0" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </button>
      </aside>
    </div>
  );
}
