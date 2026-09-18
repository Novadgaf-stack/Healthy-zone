import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { AppIcon } from './Icons';

// Non-clinical quarterly progression data: Proactive Health Screenings vs Care Interventions
const PROGRESSION_DATA = [
  { period: 'Q1', screenings: 1840, adherence: 78, advisoryNotes: 920 },
  { period: 'Q2', screenings: 2450, adherence: 82, advisoryNotes: 1340 },
  { period: 'Q3', screenings: 3200, adherence: 86, advisoryNotes: 1850 },
  { period: 'Q4', screenings: 4100, adherence: 89, advisoryNotes: 2420 },
  { period: 'Q5', screenings: 5350, adherence: 91, advisoryNotes: 3100 },
  { period: 'Q6', screenings: 6800, adherence: 94, advisoryNotes: 4050 },
];

const CATEGORY_DISTRIBUTION = [
  { category: 'Routine Vitals', percentage: 38, count: 4720, label: 'BP, Glucose & BMI Tracking' },
  { category: 'Lifestyle Advisory', percentage: 27, count: 3350, label: 'Nutrition & Daily Movement' },
  { category: 'Family Preventive', percentage: 21, count: 2600, label: 'Dependents & Annual Panels' },
  { category: 'Workplace Teams', percentage: 14, count: 1730, label: 'Corporate Health Days' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const TrendTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FAF7F0] border border-[#C9DCC7] rounded-xl p-3 shadow-[0_4px_16px_rgba(11,46,31,0.12)] text-xs font-sans space-y-1.5">
        <div className="font-semibold text-forest-950 font-serif">{label} Health Overview</div>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-ink-500">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              {entry.name === 'screenings' ? 'Completed Checkups' : 'Wellness Advisories'}
            </span>
            <span className="font-semibold text-forest-950 font-mono">
              {entry.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const DistributionTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;
    return (
      <div className="bg-[#FAF7F0] border border-[#C9DCC7] rounded-xl p-3 shadow-[0_4px_16px_rgba(11,46,31,0.12)] text-xs font-sans space-y-1">
        <div className="font-semibold text-forest-950">{item.category}</div>
        <div className="text-ink-500">{item.label}</div>
        <div className="font-mono text-forest-700 font-semibold pt-1">
          {item.percentage}% of members ({item.count.toLocaleString()} participants)
        </div>
      </div>
    );
  }
  return null;
};

export const CompanyImpact: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'trend' | 'distribution'>('trend');

  return (
    <section className="py-24 bg-cream-100/50 border-b border-sage-200/60 relative overflow-hidden">
      {/* Background subtle botanical line accent */}
      <div className="absolute -right-16 -top-16 w-96 h-96 opacity-10 pointer-events-none text-forest-700">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <path d="M40 100 Q100 20 160 100 T280 100" />
          <path d="M100 40 Q180 100 100 160 T100 280" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-sage-200 text-xs font-semibold text-forest-700 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DB7F1E]" />
            <span>Company Impact & Measured Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 leading-tight font-semibold">
            Proactive health, structured into dependable habits.
          </h2>
          <p className="text-base sm:text-lg text-ink-500 font-sans leading-relaxed">
            By shifting from stressful emergency visits to structured quarterly checkups, Healthyzone helps thousands of Nigerians preserve long-term vitality.
          </p>
        </div>

        {/* Asymmetric Grid: Left Narrative + Right Minimalist Recharts Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Key Highlight Metric Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Main Asymmetric Stat Card */}
            <div className="bg-cream-50 p-8 rounded-3xl border border-sage-200 shadow-[0_4px_20px_rgba(11,46,31,0.04)] flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-forest-700 font-sans">
                    Routine Adherence Rate
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sage-200/50 text-[11px] font-semibold text-forest-700 font-mono">
                    +16% YoY
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl text-forest-950 font-semibold tracking-tight">
                    94%
                  </span>
                  <span className="text-sm text-ink-500 font-sans">of active members complete scheduled checkups</span>
                </div>

                <p className="text-sm text-ink-500 leading-relaxed font-sans pt-2 border-t border-sage-200/60">
                  Members on Healthyzone plans consistently undergo periodic blood pressure, glucose, and routine wellness assessments on time.
                </p>
              </div>

              {/* Secondary Micro-metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-sage-200/60">
                <div>
                  <div className="font-serif text-2xl text-forest-950 font-semibold">
                    &lt; 15 min
                  </div>
                  <div className="text-xs text-ink-500 font-sans mt-0.5">
                    WhatsApp response time for care navigation
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-forest-950 font-semibold">
                    4.9 / 5.0
                  </div>
                  <div className="text-xs text-ink-500 font-sans mt-0.5">
                    Member satisfaction rating across Nigeria
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Assurance Notice */}
            <div className="bg-[#0B2E1F] text-cream-50 p-6 rounded-2xl border border-forest-700/40 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-forest-700/80 flex items-center justify-center shrink-0 mt-0.5">
                <AppIcon name="ShieldCheck" size={20} color="#FAF7F0" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-sans">
                <div className="font-semibold text-cream-50">Nationwide Network Verification</div>
                <p className="text-sage-200/90 leading-relaxed">
                  Every participating diagnostic lab and wellness facility is audited for reliability, hygiene, and timely reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Recharts Visualizer (7 cols) */}
          <div className="lg:col-span-7 bg-cream-50 p-7 sm:p-9 rounded-3xl border border-sage-200 shadow-[0_4px_24px_rgba(11,46,31,0.05)] flex flex-col justify-between">
            <div>
              {/* Header with Switcher Tabs */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sage-200/70">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-forest-950 font-semibold">
                    {activeMetric === 'trend'
                      ? 'Preventive Checkup Volume Growth'
                      : 'Care Program Focus Distribution'}
                  </h3>
                  <p className="text-xs text-ink-500 font-sans mt-0.5">
                    {activeMetric === 'trend'
                      ? 'Total completed checkups & ongoing wellness advisories by quarter'
                      : 'Proportion of routine care engagements across member focus areas'}
                  </p>
                </div>

                {/* Minimalist Switcher */}
                <div className="inline-flex p-1 rounded-xl bg-cream-100 border border-sage-200 shrink-0">
                  <button
                    onClick={() => setActiveMetric('trend')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all cursor-pointer ${
                      activeMetric === 'trend'
                        ? 'bg-cream-50 text-forest-700 shadow-sm font-semibold'
                        : 'text-ink-500 hover:text-forest-950'
                    }`}
                  >
                    Growth Trend
                  </button>
                  <button
                    onClick={() => setActiveMetric('distribution')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all cursor-pointer ${
                      activeMetric === 'distribution'
                        ? 'bg-cream-50 text-forest-700 shadow-sm font-semibold'
                        : 'text-ink-500 hover:text-forest-950'
                    }`}
                  >
                    Care Split
                  </button>
                </div>
              </div>

              {/* Chart Stage */}
              <div className="h-64 sm:h-72 w-full pt-6">
                {activeMetric === 'trend' ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={PROGRESSION_DATA}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorScreenings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1B5E3A" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#1B5E3A" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorAdvisory" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#DB7F1E" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#DB7F1E" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#C9DCC7" opacity={0.4} />
                      <XAxis
                        dataKey="period"
                        stroke="#5B5A54"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: '#C9DCC7' }}
                      />
                      <YAxis
                        stroke="#5B5A54"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${v / 1000}k`}
                      />
                      <Tooltip content={<TrendTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="screenings"
                        stroke="#1B5E3A"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorScreenings)"
                        activeDot={{ r: 6, fill: '#1B5E3A', stroke: '#FAF7F0', strokeWidth: 2 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="advisoryNotes"
                        stroke="#DB7F1E"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAdvisory)"
                        activeDot={{ r: 5, fill: '#DB7F1E', stroke: '#FAF7F0', strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={CATEGORY_DISTRIBUTION}
                      layout="vertical"
                      margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#C9DCC7" opacity={0.4} />
                      <XAxis
                        type="number"
                        stroke="#5B5A54"
                        fontSize={11}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${v}%`}
                        domain={[0, 45]}
                      />
                      <YAxis
                        type="category"
                        dataKey="category"
                        stroke="#1C1B17"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: '#C9DCC7' }}
                        width={110}
                      />
                      <Tooltip content={<DistributionTooltip />} />
                      <Bar
                        dataKey="percentage"
                        fill="#1B5E3A"
                        radius={[0, 8, 8, 0]}
                        barSize={20}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Bottom Key Legends & Summary */}
            <div className="pt-6 mt-6 border-t border-sage-200/70 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-ink-500">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-forest-700" />
                  <span className="text-ink-900 font-medium">Completed Screenings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#DB7F1E]" />
                  <span className="text-ink-900 font-medium">Advisory Follow-ups</span>
                </div>
              </div>

              <div className="font-mono text-forest-700 font-medium">
                Verified Aggregated HMO Operational Records
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
