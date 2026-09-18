import React, { useEffect } from 'react';
import { WellnessArticle } from '../types';
import { AppIcon } from './Icons';
import { Button } from './Button';

interface ArticleModalProps {
  article: WellnessArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream-50 rounded-2xl p-6 sm:p-8 shadow-2xl border border-sage-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-sage-200">
          <span className="text-xs uppercase tracking-wider font-semibold text-forest-700 bg-sage-200/50 px-2.5 py-1 rounded">
            {article.category} • {article.readTime}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-ink-500 hover:text-forest-950 hover:bg-cream-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <AppIcon name="X" size={20} color="#1C1B17" />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="pt-6 pb-4">
          <h2
            id="modal-article-title"
            className="font-serif text-2xl sm:text-3xl text-forest-950 leading-tight font-semibold"
          >
            {article.title}
          </h2>
          <p className="text-xs text-ink-500 mt-2 font-mono">{article.publishedDate}</p>
        </div>

        {/* Key Takeaways Card */}
        <div className="my-6 p-4 rounded-xl bg-cream-100/70 border-l-4 border-forest-700">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-forest-700 mb-2">
            Key Practical Insights
          </h4>
          <ul className="space-y-1.5 text-sm text-ink-900 font-sans">
            {article.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <AppIcon name="Check" size={16} color="#1B5E3A" className="shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Article Content */}
        <div className="space-y-4 text-base text-ink-900 leading-relaxed font-sans max-w-[68ch]">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-sage-200 flex items-center justify-between text-xs text-ink-500">
          <span>Healthyzone Health & Lifestyle Resources</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Done Reading
          </Button>
        </div>
      </div>
    </div>
  );
};
