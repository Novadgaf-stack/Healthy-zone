import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import { AppIcon } from '../components/Icons';
import { Button } from '../components/Button';

interface ContactPageProps {
  onOpenWhatsApp: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsApp }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    interest: 'Individual Preventive Care',
    preferredChannel: 'whatsapp',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number must be at least 8 digits.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a short summary of your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleLaunchWhatsAppWithDetails = () => {
    const text = encodeURIComponent(
      `Hello Healthyzone,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.interest}\nPreferred Channel: ${formData.preferredChannel}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-32 pb-14 sm:pt-36 sm:pb-16 bg-cream-100/60 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream-50 border border-sage-200 text-xs font-semibold text-forest-700">
              <span>Connect with Healthyzone</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest-950 leading-tight">
              Talk to Healthyzone.
            </h1>
            <p className="text-lg text-ink-500 font-sans leading-relaxed">
              Have questions about routine check-up schedules, wellness advisory, or family plans in Nigeria? Our care team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="py-20 border-b border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form or Success State */}
            <div className="lg:col-span-7 bg-cream-50 p-8 sm:p-10 rounded-2xl border border-sage-200 shadow-[0_4px_20px_rgba(11,46,31,0.05)]">
              {submitted ? (
                /* Honest Demo Success State per Brief */
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-forest-700 text-cream-50 flex items-center justify-center">
                    <AppIcon name="Check" size={24} color="#FAF7F0" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-semibold">
                      Inquiry Prepared Successfully
                    </h3>
                    <p className="text-sm text-ink-500 font-sans leading-relaxed">
                      Thank you, <strong className="text-ink-900">{formData.fullName}</strong>. Since this is a client demonstration preview, your inquiry is ready to send directly to our team via WhatsApp for immediate response.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-cream-100/70 border border-sage-200 space-y-2 text-xs font-sans text-ink-900">
                    <div>
                      <span className="text-ink-500">Plan Interest:</span>{' '}
                      <strong>{formData.interest}</strong>
                    </div>
                    <div>
                      <span className="text-ink-500">Phone:</span> {formData.phone}
                    </div>
                    <div>
                      <span className="text-ink-500">Summary:</span> {formData.message}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      variant="amber"
                      size="md"
                      onClick={handleLaunchWhatsAppWithDetails}
                      icon="WhatsappLogo"
                      className="w-full sm:w-auto"
                    >
                      Send to WhatsApp Now
                    </Button>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          interest: 'Individual Preventive Care',
                          preferredChannel: 'whatsapp',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto"
                    >
                      Write Another Note
                    </Button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <h3 className="font-serif text-2xl text-forest-950 font-semibold">
                      Send a Message
                    </h3>
                    <p className="text-sm text-ink-500 font-sans mt-1">
                      Fill out your details below and we will provide plan options and scheduling steps.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Oluwaseun Adeyemi"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-cream-100/50 border text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-forest-700 font-sans ${
                          errors.fullName ? 'border-red-500' : 'border-sage-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-cream-100/50 border text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-forest-700 font-sans ${
                          errors.phone ? 'border-red-500' : 'border-sage-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-cream-100/50 border text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-forest-700 font-sans ${
                          errors.email ? 'border-red-500' : 'border-sage-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject / Care Interest */}
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2"
                      >
                        Care Plan Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cream-100/50 border border-sage-200 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-forest-700 font-sans cursor-pointer"
                      >
                        <option value="Individual Preventive Care">Individual Preventive Care</option>
                        <option value="Family & Dependent Plan">Family & Dependent Plan</option>
                        <option value="Lifestyle & Nutrition Advisory">Lifestyle & Nutrition Advisory</option>
                        <option value="Chronic Condition Support">Chronic Condition Support</option>
                        <option value="Workplace Team Wellness">Workplace Team Wellness</option>
                        <option value="General Health Question">General Health Question</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Channel */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2">
                      Preferred Way for Us to Reply
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp', icon: 'WhatsappLogo' },
                        { id: 'call', label: 'Phone Call', icon: 'Phone' },
                        { id: 'email', label: 'Email', icon: 'EnvelopeSimple' },
                      ].map((ch) => (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredChannel: ch.id as any })}
                          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            formData.preferredChannel === ch.id
                              ? 'bg-forest-700 text-cream-50 border-forest-700'
                              : 'bg-cream-100/40 text-ink-900 border-sage-200 hover:bg-cream-100'
                          }`}
                        >
                          <AppIcon
                            name={ch.icon}
                            size={16}
                            color={formData.preferredChannel === ch.id ? '#FAF7F0' : '#1B5E3A'}
                          />
                          <span>{ch.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2"
                    >
                      Message / Question *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a little about your health goals, routine, or family requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-cream-100/50 border text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-forest-700 font-sans ${
                        errors.message ? 'border-red-500' : 'border-sage-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    trailingIcon="ArrowRight"
                    className="w-full"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Direct Contact & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Highlight Box */}
              <div className="bg-cream-50 p-8 rounded-2xl border border-forest-700/30 shadow-[0_4px_20px_rgba(11,46,31,0.05)] space-y-4">
                <div className="w-10 h-10 rounded-full bg-forest-700 text-cream-50 flex items-center justify-center">
                  <AppIcon name="WhatsappLogo" size={24} color="#FAF7F0" />
                </div>

                <h3 className="font-serif text-2xl text-forest-950 font-semibold">
                  Fastest Response on WhatsApp
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed font-sans">
                  For immediate questions about plans or care navigation, message our team directly. We answer questions in plain English without bureaucratic waiting times.
                </p>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onOpenWhatsApp}
                    icon="WhatsappLogo"
                    className="w-full"
                  >
                    Chat on {COMPANY_INFO.whatsappNumber}
                  </Button>
                </div>
              </div>

              {/* Business Information Card */}
              <div className="p-8 rounded-2xl bg-cream-50 border border-sage-200 shadow-[0_2px_12px_rgba(11,46,31,0.04)] space-y-5">
                <h4 className="font-serif text-xl text-forest-950 font-semibold">
                  Service Hours & Coverage
                </h4>

                <div className="space-y-4 text-sm text-ink-900 font-sans">
                  <div className="flex items-start gap-3">
                    <AppIcon name="Clock" size={20} color="#1B5E3A" className="shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-forest-950">Operating Hours</div>
                      <div className="text-xs text-ink-500 mt-0.5">{COMPANY_INFO.operatingHours}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AppIcon name="MapPin" size={20} color="#1B5E3A" className="shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-forest-950">Coverage Area</div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        Lagos, Abuja, and nationwide network partner facilities across Nigeria.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AppIcon name="ShieldCheck" size={20} color="#1B5E3A" className="shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-forest-950">Organization Category</div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        Health Maintenance Organization (HMO) specializing in health, wellness & lifestyle management.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
