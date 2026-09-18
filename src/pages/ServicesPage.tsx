import React, { useState } from 'react';
import { PageView, ServiceItem } from '../types';
import { SERVICES_DATA, COMPANY_INFO } from '../data/content';
import { AppIcon } from '../components/Icons';
import { SwooshDivider } from '../components/Illustrations';
import { Button } from '../components/Button';

interface ServicesPageProps {
  setActivePage: (page: PageView) => void;
  onOpenWhatsApp: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setActivePage,
  onOpenWhatsApp,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Care', 'Wellness', 'Ongoing Care', 'Family Care', 'Corporate', 'Guidance'];

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="w-full">
      {/* Services Header */}
      <section className="pt-32 pb-14 sm:pt-36 sm:pb-16 bg-cream-100/60 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream-50 border border-sage-200 text-xs font-semibold text-forest-700">
              <span>Care & Wellness Directory</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest-950 leading-tight">
              Structured health plans for every stage of living.
            </h1>
            <p className="text-lg text-ink-500 font-sans leading-relaxed">
              Healthyzone organizes your preventive check-ups, lifestyle improvements, and care navigation into dependable, transparent plans.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-8">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium font-sans transition-all cursor-pointer ${
                    active
                      ? 'bg-forest-700 text-cream-50 shadow-sm font-semibold'
                      : 'bg-cream-50 text-ink-900 border border-sage-200/80 hover:bg-cream-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-cream-50 rounded-2xl p-7 border border-sage-200 shadow-[0_2px_12px_rgba(11,46,31,0.04)] hover:shadow-[0_6px_22px_rgba(11,46,31,0.08)] flex flex-col justify-between hover:border-forest-500/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-sage-200/60 flex items-center justify-center">
                      <AppIcon name={service.iconName} size={22} color="#1B5E3A" />
                    </div>
                    <span className="text-xs font-medium text-forest-700 bg-cream-100 px-2.5 py-1 rounded border border-sage-200">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-forest-950 font-semibold mb-3">
                    {service.name}
                  </h3>

                  <p className="text-sm text-ink-900 leading-relaxed font-sans mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-sage-200/70 mb-6">
                    <div className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                      Core Inclusions
                    </div>
                    <ul className="space-y-1.5">
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ink-500 font-sans">
                          <AppIcon name="Check" size={14} color="#1B5E3A" className="shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                  <span className="text-xs text-ink-500 font-mono">{service.cadence}</span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSelectService(service)}
                    trailingIcon="ArrowRight"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <SwooshDivider className="mt-16" />
        </div>
      </section>

      {/* Prominent Bottom CTA */}
      <section className="py-20 bg-[#0B2E1F] text-cream-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 leading-tight">
            Need advice on which care plan suits you or your family?
          </h2>
          <p className="text-sage-200 text-base max-w-xl mx-auto font-sans">
            Our team in Nigeria is available on WhatsApp to walk you through recommended screening schedules, family plans, and wellness options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="amber"
              size="lg"
              onClick={onOpenWhatsApp}
              icon="WhatsappLogo"
              className="w-full sm:w-auto"
            >
              Message on WhatsApp ({COMPANY_INFO.whatsappNumber})
            </Button>

            <Button
              variant="secondary-dark"
              size="lg"
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto"
            >
              Send Written Request
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
