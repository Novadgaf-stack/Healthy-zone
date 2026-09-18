import React from 'react';
import { PageView, ServiceItem, WellnessArticle } from '../types';
import { HeroLineArt, SwooshDivider, LeafAccent } from '../components/Illustrations';
import { AppIcon } from '../components/Icons';
import { Button } from '../components/Button';
import { WellnessChecker } from '../components/WellnessChecker';
import { CompanyImpact } from '../components/CompanyImpact';
import {
  SERVICES_DATA,
  WELLNESS_ARTICLES,
  HOW_IT_WORKS_STEPS,
  VALUE_PROPOSITIONS,
  COMPANY_INFO,
} from '../data/content';

interface HomePageProps {
  setActivePage: (page: PageView) => void;
  onOpenWhatsApp: (message?: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectArticle: (article: WellnessArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onOpenWhatsApp,
  onSelectService,
  onSelectArticle,
}) => {
  const featuredService = SERVICES_DATA.find((s) => s.featured) || SERVICES_DATA[0];
  const otherServices = SERVICES_DATA.filter((s) => s.id !== featuredService.id).slice(0, 3);

  const scrollToWellnessCheck = () => {
    const el = document.getElementById('wellness-check');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Restored Luminous Cream-50 Canvas with Premium Typography) */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-cream-50 via-cream-100/35 to-cream-50 border-b border-sage-200/60">
        {/* Subtle ambient leaf accent for organic depth */}
        <div className="absolute top-10 right-1/4 opacity-10 pointer-events-none select-none text-forest-700">
          <LeafAccent size={320} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column: Copy & Actions */}
            <div
              className="lg:col-span-7 space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-forwards"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Functional Entry Prompt */}
              <div>
                <button
                  type="button"
                  onClick={scrollToWellnessCheck}
                  className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-50 border border-sage-200 text-xs font-medium text-forest-700 transition-all cursor-pointer shadow-subtle hover:border-forest-700/40 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-forest-700"
                >
                  <AppIcon name="Sparkle" size={14} color="#1B5E3A" />
                  <span>Not sure where to start? Take the 2-minute wellness check</span>
                  <span className="text-amber-500 font-bold transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>
              </div>

              {/* H1 Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.08] tracking-tight font-semibold">
                Everyday health management built for real life.
              </h1>

              {/* Supporting Sentence */}
              <p className="text-lg sm:text-xl text-ink-500 max-w-2xl font-sans leading-relaxed">
                From scheduled vital screenings to personalized lifestyle guidance, Healthyzone helps you take control of your health before unexpected illness interrupts your life.
              </p>

              {/* Action Buttons (Enhanced Button System with Premium Radii & Shimmer) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="amber"
                  size="lg"
                  onClick={scrollToWellnessCheck}
                  trailingIcon="ArrowRight"
                >
                  Take the Wellness Check
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onOpenWhatsApp()}
                  icon="WhatsappLogo"
                >
                  Talk to Us on WhatsApp
                </Button>
              </div>

              {/* Reassurance Metrics */}
              <div className="pt-6 border-t border-sage-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-semibold text-forest-950">
                    Proactive
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5 font-sans">
                    Scheduled preventive checks
                  </div>
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl font-semibold text-forest-950">
                    Direct Chat
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5 font-sans">
                    Care triage on WhatsApp
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="font-serif text-xl sm:text-2xl font-semibold text-forest-950">
                    Nigeria-Wide
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5 font-sans">
                    Family & individual coverage
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Column: Custom Line-Art Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="p-6 sm:p-8 rounded-3xl bg-cream-100/70 border border-sage-200/90 shadow-[0_8px_30px_rgba(11,46,31,0.06)]">
                <HeroLineArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE INTERACTIVE WELLNESS CHECK */}
      <WellnessChecker
        onNavigateContact={() => {
          setActivePage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWhatsApp={(msg) => onOpenWhatsApp(msg)}
      />

      {/* 3. TRUST & VALUE SECTION */}
      <section className="py-24 bg-cream-50 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
              Why Structured Care Matters
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight">
              Traditional healthcare waits for symptoms. Healthyzone starts before they occur.
            </h2>
            <p className="text-base sm:text-lg text-ink-500 leading-relaxed pt-1 font-sans">
              In Nigeria, most medical spending happens during late-stage emergencies. Conditions like hypertension and pre-diabetes rarely display early pain, meaning you can feel completely fine while risks compound silently. A structured HMO partner gives you steady baseline visibility throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div
                key={idx}
                className="bg-cream-100/70 p-8 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.04)] hover:border-forest-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-sage-200/60 flex items-center justify-center text-forest-700 font-mono text-xs font-semibold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-xl text-forest-950 font-semibold">
                    {prop.title}
                  </h3>
                </div>
                <p className="text-ink-500 text-sm sm:text-base leading-relaxed font-sans">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPANY IMPACT SECTION (Minimalist Recharts & Asymmetric Outcomes) */}
      <CompanyImpact />

      {/* 5. SERVICES PREVIEW (Asymmetric Layout) */}
      <section className="py-24 bg-cream-50 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                Core Care Areas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight">
                Preventive plans shaped for individual and family routines.
              </h2>
              <p className="text-base text-ink-500 font-sans">
                Explore our primary care services below, or view the complete directory with detailed schedules and inclusions.
              </p>
            </div>

            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              trailingIcon="ArrowRight"
              className="self-start md:self-end"
            >
              View All Services
            </Button>
          </div>

          {/* ASYMMETRIC SERVICES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Large Card (7 cols) */}
            <div className="lg:col-span-7 bg-cream-100/60 rounded-3xl p-8 sm:p-10 border border-forest-500/25 shadow-[0_4px_24px_rgba(11,46,31,0.05)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-forest-700 text-cream-50 text-xs font-medium">
                    <AppIcon name="Sparkle" size={14} color="#FAF7F0" />
                    <span>Featured Routine Care</span>
                  </div>
                  <span className="text-xs font-medium text-forest-700 bg-sage-200/60 px-2.5 py-1 rounded-md">
                    {featuredService.cadence}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 mb-4 font-semibold">
                  {featuredService.name}
                </h3>

                <p className="text-ink-900 text-base leading-relaxed mb-6 font-sans">
                  {featuredService.fullDescription}
                </p>

                <div className="pt-4 border-t border-sage-200/80 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                    Plan Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {featuredService.keyFeatures.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-900 font-sans">
                        <AppIcon name="Check" size={18} color="#1B5E3A" className="shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onSelectService(featuredService)}
                  trailingIcon="ArrowRight"
                >
                  Learn More & Details
                </Button>
                <span className="text-xs text-ink-500 font-sans">
                  Ideal for working professionals
                </span>
              </div>
            </div>

            {/* Companion Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {otherServices.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => onSelectService(svc)}
                  className="bg-cream-100/60 p-6 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.04)] hover:shadow-[0_6px_20px_rgba(11,46,31,0.08)] hover:border-forest-500/40 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectService(svc)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <AppIcon name={svc.iconName} size={20} color="#1B5E3A" />
                        <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                          {svc.category}
                        </span>
                      </div>
                      <span className="text-xs text-ink-500 font-mono">{svc.cadence}</span>
                    </div>

                    <h4 className="font-serif text-xl text-forest-950 font-semibold mb-2">
                      {svc.name}
                    </h4>
                    <p className="text-ink-500 text-sm leading-relaxed font-sans line-clamp-2">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sage-200/60 flex items-center justify-between">
                    <Button variant="text" size="sm" trailingIcon="ArrowRight">
                      View Plan Scope
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. "YOUR HEALTH, YOUR LIFESTYLE" SECTION */}
      <section className="py-24 bg-cream-100/40 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                Real-Life Health Integration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight">
                Your Health, Your Lifestyle.
              </h2>
              <p className="text-base text-ink-500 leading-relaxed font-sans">
                Health recommendations often sound disconnected from real Nigerian schedules. Telling someone in Lagos to "avoid stress" or "cook three separate meals daily" is unrealistic.
              </p>
              <p className="text-base text-ink-900 leading-relaxed font-sans">
                Healthyzone designs care routines around the food you actually eat, the commute you face, and the dependents you support. We focus on incremental, high-leverage habits that produce lasting vitality.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenWhatsApp()}
                  icon="WhatsappLogo"
                >
                  Discuss Your Lifestyle Profile
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-cream-50 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-200/60 flex items-center justify-center">
                  <AppIcon name="Heartbeat" size={22} color="#1B5E3A" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-forest-950">
                  Cardiovascular Awareness
                </h4>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  Regular, low-friction blood pressure and blood glucose checks that fit into your monthly errands or lunch hours.
                </p>
              </div>

              <div className="p-6 bg-cream-50 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-200/60 flex items-center justify-center">
                  <AppIcon name="PersonArmsSpread" size={22} color="#1B5E3A" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-forest-950">
                  Grounded Dietary Adjustments
                </h4>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  Balancing local soups, swallow, proteins, and carbohydrates rather than prescribing unrealistic imported diet fads.
                </p>
              </div>

              <div className="p-6 bg-cream-50 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-200/60 flex items-center justify-center">
                  <AppIcon name="Clock" size={22} color="#1B5E3A" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-forest-950">
                  Sleep & Energy Management
                </h4>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  Practical sleep hygiene and workday hydration strategies that counteract midday fatigue and mental strain.
                </p>
              </div>

              <div className="p-6 bg-cream-50 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.03)] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage-200/60 flex items-center justify-center">
                  <AppIcon name="UsersThree" size={22} color="#1B5E3A" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-forest-950">
                  Dependent Health Coordination
                </h4>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  Routine check-ins for parents and children with structured summaries sent directly to you on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS */}
      <section className="py-24 bg-cream-50 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
              Clear & Straightforward
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-semibold">
              How Healthyzone Works
            </h2>
            <p className="text-base text-ink-500 font-sans">
              Three straightforward steps to start managing your health proactively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-cream-100/60 p-8 rounded-2xl border border-sage-200 flex flex-col justify-between shadow-[0_2px_10px_rgba(11,46,31,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-forest-700 font-semibold">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-medium text-forest-700 bg-sage-200/60 px-2 py-0.5 rounded-md">
                      {step.highlight}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-forest-950 font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-ink-500 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sage-200/60 text-xs font-mono text-forest-700">
                  Step {idx + 1} of 3
                </div>
              </div>
            ))}
          </div>

          <SwooshDivider className="mt-12" />
        </div>
      </section>

      {/* 8. WELLNESS / EDUCATION PREVIEW (3 Demo Article Cards) */}
      <section className="py-24 border-b border-sage-200/60 bg-cream-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                Health & Wellness Literacy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight font-semibold">
                Practical guides for everyday wellbeing.
              </h2>
              <p className="text-base text-ink-500 font-sans">
                Evidence-informed perspectives on nutrition, preventive habits, and cardiovascular vitality.
              </p>
            </div>

            <div className="text-xs text-ink-500 font-mono self-start md:self-end bg-cream-50 px-3 py-1.5 rounded-lg border border-sage-200">
              Curated Demo Resources
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WELLNESS_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-cream-50 p-7 rounded-2xl border border-sage-200/80 shadow-[0_2px_12px_rgba(11,46,31,0.04)] hover:shadow-[0_8px_24px_rgba(11,46,31,0.08)] hover:border-forest-500/40 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectArticle(article)}
                aria-label={`Read article: ${article.title}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-forest-700 font-medium mb-3">
                    <span className="bg-sage-200/60 px-2 py-0.5 rounded-md">{article.category}</span>
                    <span className="text-ink-500">{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-forest-950 font-semibold mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-ink-500 leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sage-200/70 flex items-center justify-between">
                  <Button variant="text" size="sm" trailingIcon="ArrowRight">
                    Read Full Article
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DARK CTA SECTION (Forest-950 Background with High Contrast) */}
      <section className="py-24 bg-[#0B2E1F] text-cream-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-700/50 text-sage-200 text-xs border border-forest-500/40">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Direct Consultations via WhatsApp or Form</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 leading-tight font-semibold">
              Start managing your health before questions become emergencies.
            </h2>

            <p className="text-sage-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans">
              Talk to our care team today to understand how Healthyzone can structure your preventive health checks and daily wellness.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="amber"
                size="lg"
                onClick={() => onOpenWhatsApp()}
                icon="WhatsappLogo"
                className="w-full sm:w-auto"
              >
                Message on WhatsApp
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
                Submit Written Inquiry
              </Button>
            </div>

            <div className="pt-6 text-xs text-sage-200/80 font-mono">
              WhatsApp: {COMPANY_INFO.whatsappNumber} • Operating Hours: {COMPANY_INFO.operatingHours}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
