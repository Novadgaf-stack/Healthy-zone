import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { AppIcon } from './Icons';
import { Button } from './Button';
import { COMPANY_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectContact: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Healthyzone, I would like to inquire about the "${service.name}" service plan.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream-50 rounded-2xl p-6 sm:p-8 shadow-2xl border border-sage-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-sage-200">
          <div className="flex items-center gap-2">
            <AppIcon name={service.iconName} size={24} color="#1B5E3A" />
            <span className="text-xs uppercase tracking-wider font-semibold text-forest-700 bg-sage-200/50 px-2.5 py-1 rounded">
              {service.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink-500 hover:text-forest-950 hover:bg-cream-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <AppIcon name="X" size={20} color="#1C1B17" />
          </button>
        </div>

        {/* Content */}
        <div className="pt-6 pb-2">
          <h2
            id="modal-service-title"
            className="font-serif text-2xl sm:text-3xl text-forest-950 leading-tight font-semibold"
          >
            {service.name}
          </h2>
          <p className="text-base text-ink-900 mt-4 leading-relaxed font-sans">
            {service.fullDescription}
          </p>
        </div>

        {/* Target Audience */}
        <div className="my-5 p-4 rounded-xl bg-cream-100/70 border border-sage-200/60">
          <div className="text-xs uppercase tracking-wider font-semibold text-forest-700 mb-1">
            Who This Is Designed For
          </div>
          <p className="text-sm text-ink-900 font-sans">{service.targetAudience}</p>
        </div>

        {/* Key Features */}
        <div className="my-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-forest-700 mb-3">
            What Is Included in this Care Plan
          </h4>
          <ul className="space-y-2.5">
            {service.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-ink-900 font-sans">
                <AppIcon name="Check" size={18} color="#1B5E3A" className="shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Cadence */}
        <div className="flex items-center gap-2 py-3 px-3.5 bg-sage-200/40 rounded-xl text-xs text-forest-950 font-medium font-sans">
          <AppIcon name="Clock" size={18} color="#1B5E3A" />
          <span>Recommended Review Cadence: {service.cadence}</span>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-6 border-t border-sage-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              onClose();
              onSelectContact();
            }}
            className="w-full sm:w-auto"
          >
            Send Written Inquiry
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={handleWhatsAppInquiry}
            icon="WhatsappLogo"
            className="w-full sm:w-auto"
          >
            Inquire on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
