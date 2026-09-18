import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { AppIcon } from './Icons';
import { SwooshDivider, LeafAccent } from './Illustrations';
import { COMPANY_INFO } from '../data/content';

interface QuestionOption {
  label: string;
  points: number; // 0 to 14.3 approx (sums to 100)
  category: 'sleep' | 'movement' | 'nutrition' | 'vitality';
}

interface Question {
  id: number;
  categoryName: string;
  question: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    categoryName: 'Daily Energy',
    question: 'How does your physical energy typically hold up throughout an ordinary workday?',
    options: [
      { label: 'Steady energy from morning to evening with minimal slumps', points: 15, category: 'vitality' },
      { label: 'Noticeable afternoon dip, but manageable after water or food', points: 10, category: 'vitality' },
      { label: 'Frequent midday fatigue requiring heavy caffeine or sugar', points: 5, category: 'vitality' },
      { label: 'Persistent exhaustion starting from early morning hours', points: 2, category: 'vitality' },
    ],
  },
  {
    id: 2,
    categoryName: 'Physical Movement',
    question: 'How often do you engage in 20 to 30 minutes of intentional walking, movement, or exercise each week?',
    options: [
      { label: '4 or more days each week consistently', points: 15, category: 'movement' },
      { label: '2 to 3 days weekly, often on weekends or lighter days', points: 11, category: 'movement' },
      { label: 'Occasional light movement, mostly passive daily walking', points: 6, category: 'movement' },
      { label: 'Rarely — work and daily routines are almost entirely sedentary', points: 2, category: 'movement' },
    ],
  },
  {
    id: 3,
    categoryName: 'Sleep & Rest',
    question: 'How rested and clear-headed do you feel upon waking on most mornings?',
    options: [
      { label: 'Consistently refreshed after 7–8 hours of uninterrupted sleep', points: 15, category: 'sleep' },
      { label: 'Moderately rested, though occasionally waking during the night', points: 10, category: 'sleep' },
      { label: 'Often groggy and needing significant time to feel awake', points: 5, category: 'sleep' },
      { label: 'Chronically short on sleep due to late work or restless nights', points: 2, category: 'sleep' },
    ],
  },
  {
    id: 4,
    categoryName: 'Dietary Balance',
    question: 'How consistently do your daily meals feature leafy vegetables, balanced proteins, and plenty of water?',
    options: [
      { label: 'Most meals include local greens, fresh foods, and steady hydration', points: 15, category: 'nutrition' },
      { label: 'Fair balance, but fast-paced lunches lean toward heavy carbs or oils', points: 10, category: 'nutrition' },
      { label: 'Irregular meal timings with frequent ultra-processed snacks', points: 5, category: 'nutrition' },
      { label: 'Skipping meals frequently followed by heavy late-night dinners', points: 2, category: 'nutrition' },
    ],
  },
  {
    id: 5,
    categoryName: 'Stress & Demands',
    question: 'How manageable do daily commute, work pressure, and personal responsibilities feel right now?',
    options: [
      { label: 'Balanced with predictable demands and regular downtime', points: 14, category: 'vitality' },
      { label: 'Demanding at times, but manageable with weekend recovery', points: 10, category: 'vitality' },
      { label: 'Consistently high pressure with little mental breathing room', points: 5, category: 'vitality' },
      { label: 'Overwhelming daily pace that frequently interferes with rest', points: 2, category: 'vitality' },
    ],
  },
  {
    id: 6,
    categoryName: 'Vital Awareness',
    question: 'When did you last have basic baseline metrics (such as blood pressure or blood sugar) checked?',
    options: [
      { label: 'Within the last 3 to 6 months during routine check-ups', points: 14, category: 'vitality' },
      { label: 'Sometime within the past year', points: 10, category: 'vitality' },
      { label: 'More than a year ago, only when feeling unwell', points: 5, category: 'vitality' },
      { label: 'Never, or I do not know my typical baseline numbers', points: 2, category: 'vitality' },
    ],
  },
  {
    id: 7,
    categoryName: 'Weekly Recovery',
    question: 'Do you set aside intentional quiet time each week to unplug, rest, and step away from screens?',
    options: [
      { label: 'Yes, dedicated leisure, family, or quiet downtime every week', points: 12, category: 'sleep' },
      { label: 'Sometimes, depending on work urgency and household tasks', points: 8, category: 'sleep' },
      { label: 'Rarely — work emails and mobile notifications follow me all weekend', points: 4, category: 'sleep' },
      { label: 'No intentional downtime; continuously on-call or working', points: 1, category: 'sleep' },
    ],
  },
];

interface WellnessCheckerProps {
  onNavigateContact: () => void;
  onOpenWhatsApp: (message?: string) => void;
}

export const WellnessChecker: React.FC<WellnessCheckerProps> = ({
  onNavigateContact,
  onOpenWhatsApp,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, QuestionOption>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [displayScore, setDisplayScore] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];
  const selectedOption = answers[currentQuestion?.id];

  // Calculate scores
  const totalScore = Math.min(
    100,
    Math.round(Object.values(answers).reduce((acc, opt) => acc + opt.points, 0))
  );

  // Category breakdowns
  const getCategoryPercent = (cat: 'sleep' | 'movement' | 'nutrition' | 'vitality'): number => {
    const catOptions = Object.values(answers).filter((a) => a.category === cat);
    if (catOptions.length === 0) return 60;
    const earned = catOptions.reduce((acc, o) => acc + o.points, 0);
    // Normalized approx max for each category
    const maxPoss = cat === 'movement' ? 15 : cat === 'nutrition' ? 15 : cat === 'sleep' ? 27 : 43;
    return Math.min(100, Math.max(25, Math.round((earned / maxPoss) * 100)));
  };

  // Animated count-up when completed
  useEffect(() => {
    if (!isCompleted) {
      setDisplayScore(0);
      return;
    }

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(eased * totalScore));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isCompleted, totalScore]);

  const handleSelectOption = (option: QuestionOption) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Neutral, non-clinical reflection lines
  const getReflection = (score: number): string => {
    if (score >= 75) {
      return 'Your responses reflect steady everyday wellness routines. Maintaining scheduled preventive screenings will help preserve your baseline vitality as demands change.';
    } else if (score >= 50) {
      return 'Your responses indicate a solid daily foundation with opportunities to build structured recovery, routine vital checks, and mindful nutrition into your workweeks.';
    } else {
      return 'Your responses point to high daily demands with limited rest windows. Introducing routine health check-ins and manageable lifestyle adjustments can help safeguard your long-term energy.';
    }
  };

  const handleWhatsAppShare = () => {
    const msg = `Hello Healthyzone, I just completed the 2-minute Wellness Check on your website (Reflection Snapshot: ${totalScore}/100) and would like to learn about preventive plans that fit my schedule.`;
    onOpenWhatsApp(msg);
  };

  return (
    <section id="wellness-check" className="py-24 bg-cream-100/60 border-b border-sage-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context, Framing & Disclaimer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cream-50 border border-sage-200 text-xs font-semibold text-forest-700">
              <AppIcon name="Sparkle" size={14} color="#1B5E3A" />
              <span>Interactive Self-Reflection</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 leading-tight">
              Your Wellness Check
            </h2>

            {/* Mandatory Framing per Brief */}
            <div className="p-4 rounded-md bg-cream-50 border-l-4 border-forest-700 space-y-1.5">
              <div className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                Self-Reflection Purpose
              </div>
              <p className="text-sm font-medium text-ink-900 leading-relaxed font-sans">
                "A quick wellness check for reflection — not a medical diagnosis."
              </p>
            </div>

            <p className="text-base text-ink-500 leading-relaxed font-sans">
              Take two minutes to reflect on your daily energy, movement, sleep, nutrition, and recovery. At the end, you’ll receive a structured wellness snapshot with clear areas to focus on.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-ink-500 font-mono">
              <span className="flex items-center gap-1.5">
                <AppIcon name="Clock" size={15} color="#1B5E3A" />
                2 Minutes
              </span>
              <span className="flex items-center gap-1.5">
                <AppIcon name="ShieldCheck" size={15} color="#1B5E3A" />
                No Personal Data Required
              </span>
              <span className="flex items-center gap-1.5">
                <AppIcon name="Heartbeat" size={15} color="#1B5E3A" />
                7 Reflection Points
              </span>
            </div>

            <div className="pt-4 border-t border-sage-200/80">
              <p className="text-xs text-ink-500 leading-relaxed font-sans italic">
                Healthyzone provides preventive care plans and lifestyle guidance across Nigeria to help you stay ahead of health needs.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              ref={cardRef}
              className="w-full max-w-xl bg-cream-50 rounded-2xl border border-sage-200 shadow-[0_4px_24px_rgba(11,46,31,0.07)] p-6 sm:p-8 transition-all duration-300 relative"
            >
              {!isCompleted ? (
                /* QUESTION STEP */
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Progress bar + Counter */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-ink-500">
                      <span className="text-forest-700 font-medium">
                        {currentQuestion.categoryName}
                      </span>
                      <span>
                        Question {currentStep + 1} of {totalQuestions}
                      </span>
                    </div>

                    {/* Progress Bar (sage-200 track, forest-500 fill) */}
                    <div className="w-full h-2 bg-sage-200/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-forest-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-forest-950 font-semibold leading-snug pt-2">
                    {currentQuestion.question}
                  </h3>

                  {/* Options List (Radio group) */}
                  <div
                    className="space-y-2.5 pt-2"
                    role="radiogroup"
                    aria-label={currentQuestion.question}
                  >
                    {currentQuestion.options.map((opt, idx) => {
                      const isSelected = selectedOption?.label === opt.label;
                      return (
                        <button
                          key={idx}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleSelectOption(opt)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm font-sans transition-all duration-150 flex items-start gap-3 select-none ${
                            isSelected
                              ? 'border-forest-700 bg-sage-200/40 text-forest-950 shadow-sm'
                              : 'border-sage-200/80 bg-cream-100/50 text-ink-900 hover:bg-cream-100 hover:border-forest-500/40'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'border-forest-700 bg-forest-700'
                                : 'border-sage-200 bg-cream-50'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cream-50" />}
                          </span>
                          <span className="leading-relaxed">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Nav Controls */}
                  <div className="pt-4 border-t border-sage-200/70 flex items-center justify-between gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handlePrev}
                      disabled={currentStep === 0}
                      icon="ArrowLeft"
                    >
                      Previous
                    </Button>

                    <Button
                      variant={currentStep === totalQuestions - 1 ? 'amber' : 'primary'}
                      size="sm"
                      onClick={handleNext}
                      disabled={!selectedOption}
                      trailingIcon={currentStep === totalQuestions - 1 ? 'Sparkle' : 'ArrowRight'}
                    >
                      {currentStep === totalQuestions - 1 ? 'View Snapshot' : 'Next Question'}
                    </Button>
                  </div>
                </div>
              ) : (
                /* RESULTS SNAPSHOT */
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-sage-200/70">
                    <span className="text-xs uppercase tracking-wider font-semibold text-forest-700 bg-sage-200/50 px-2.5 py-1 rounded">
                      Reflection Completed
                    </span>
                    <button
                      onClick={handleReset}
                      className="text-xs text-ink-500 hover:text-forest-700 font-medium transition-colors"
                    >
                      Retake Check
                    </button>
                  </div>

                  {/* Header & Animated Score */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-semibold">
                        Your Wellness Snapshot
                      </h3>
                      <p className="text-xs text-ink-500 mt-1 font-sans">
                        Personal reflection overview based on your 7 responses.
                      </p>
                    </div>

                    {/* Animated Score Circle / Pill */}
                    <div className="self-start sm:self-auto px-5 py-3 rounded-2xl bg-cream-100 border border-forest-500/20 text-center shadow-sm">
                      <div className="font-serif text-3xl sm:text-4xl text-forest-700 font-bold leading-none">
                        {displayScore}
                        <span className="text-xs text-ink-500 font-sans font-normal ml-0.5">/100</span>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-ink-500 mt-1 font-semibold">
                        Snapshot Score
                      </div>
                    </div>
                  </div>

                  {/* Non-clinical reflection text */}
                  <div className="p-4 rounded-xl bg-cream-100/70 border border-sage-200/70 text-sm text-ink-900 leading-relaxed font-sans">
                    {getReflection(totalScore)}
                  </div>

                  {/* 4 Category Breakdown Bars */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-forest-700">
                      Routine Breakdown
                    </div>

                    {[
                      { label: 'Daily Movement & Activity', percent: getCategoryPercent('movement') },
                      { label: 'Sleep Quality & Downtime', percent: getCategoryPercent('sleep') },
                      { label: 'Nutritional Balance & Hydration', percent: getCategoryPercent('nutrition') },
                      { label: 'Vital Metric Awareness', percent: getCategoryPercent('vitality') },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs text-ink-900 font-medium">
                          <span>{item.label}</span>
                          <span className="font-mono text-ink-500">{item.percent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-sage-200/60 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-forest-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mandatory Disclaimer Always Visible */}
                  <div className="p-3 bg-cream-100/40 rounded-md border border-sage-200/50 text-[11px] text-ink-500 leading-relaxed font-sans">
                    <strong>Disclaimer:</strong> This wellness snapshot is for general reflection and is not medical advice or a diagnosis.
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-3 border-t border-sage-200/70 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      variant="amber"
                      size="md"
                      onClick={handleWhatsAppShare}
                      trailingIcon="WhatsappLogo"
                      className="w-full sm:w-auto"
                    >
                      Discuss with Healthyzone
                    </Button>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={onNavigateContact}
                      className="w-full sm:w-auto"
                    >
                      Inquire Online
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
