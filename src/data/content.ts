import { ServiceItem, WellnessArticle } from '../types';

export const COMPANY_INFO = {
  name: 'Healthyzone',
  legalCategory: 'Health Maintenance Organization (HMO)',
  tagline: 'Health, wellness, and lifestyle management for individuals, families, and teams.',
  summary: 'Healthyzone helps people manage their health, wellness, and lifestyle across Nigeria with proactive, structured care plans.',
  whatsappNumber: '+234 810 497 1281',
  whatsappRaw: '2348104971281',
  email: 'info@healthyzone.ng',
  location: 'Lagos & across Nigeria',
  operatingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM (WAT)',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'preventive-screening',
    name: 'Preventive Care & Health Screening',
    category: 'Core Care',
    featured: true,
    shortDescription: 'Scheduled baseline evaluations, blood pressure tracking, blood sugar checks, and early risk detection before health problems develop.',
    fullDescription: 'Rather than waiting for acute illness to demand hospital admission, our preventive care framework schedules regular vital health checks throughout the year. We coordinate lab tests, track vital metrics over time, and provide structured action steps when markers shift.',
    targetAudience: 'Working professionals, adults over 30, and individuals seeking structured yearly health oversight.',
    keyFeatures: [
      'Comprehensive bi-annual or annual vital screenings',
      'Blood pressure, blood glucose, and lipid tracking over time',
      'Plain-language health summary reports with zero medical jargon',
      'Actionable recommendations for nutrition, sleep, and physical activity',
      'Priority triage when results indicate further medical attention is required'
    ],
    cadence: 'Year-round scheduled intervals',
    iconName: 'Heartbeat',
  },
  {
    id: 'lifestyle-coaching',
    name: 'Lifestyle & Wellness Guidance',
    category: 'Wellness',
    shortDescription: 'Practical lifestyle modifications tailored to your daily routine, dietary habits, work hours, and stress factors in Nigerian cities.',
    fullDescription: 'Good health is shaped by daily routines. We work with you to build sustainable eating habits using local staples, create manageable physical activity routines that fit your workday, and improve sleep patterns amidst high-demand schedules.',
    targetAudience: 'Individuals managing high-stress jobs, sedentary work environments, or fatigue.',
    keyFeatures: [
      'Personalized nutrition advice using affordable, everyday Nigerian foods',
      'Realistic exercise routines for home, office, and weekends',
      'Sleep hygiene audits and workday recovery strategies',
      'Bi-weekly check-ins via WhatsApp to maintain consistency'
    ],
    cadence: 'Monthly or bi-weekly check-ins',
    iconName: 'PersonArmsSpread',
  },
  {
    id: 'chronic-condition-support',
    name: 'Chronic Condition Management Support',
    category: 'Ongoing Care',
    shortDescription: 'Consistent monitoring and routine adherence support for individuals managing hypertension, pre-diabetes, and elevated cholesterol.',
    fullDescription: 'Managing an ongoing condition requires steady discipline and attentive record-keeping. Healthyzone offers structured reminders for medication refills, regular biometric logging, and lifestyle adjustments that keep chronic markers in safe zones.',
    targetAudience: 'Adults diagnosed with hypertension, type 2 diabetes, or metabolic conditions who want reliable day-to-day coordination.',
    keyFeatures: [
      'Log and chart blood pressure and glucose readings digitally',
      'Medication reminder schedules and refill coordination',
      'Dedicated point of contact for routine questions and check-in calls',
      'Regular summary notes prepared for your attending physician'
    ],
    cadence: 'Continuous ongoing support',
    iconName: 'ShieldCheck',
  },
  {
    id: 'family-care-plans',
    name: 'Family & Dependent Care Plans',
    category: 'Family Care',
    shortDescription: 'Unified health and wellness oversight for your spouse, children, and elderly parents living in Nigeria.',
    fullDescription: 'Caring for parents from afar or managing the health needs of a growing family can be fragmented. Healthyzone provides a centralized care plan where family members receive scheduled routine assessments and you receive clear updates on their wellbeing.',
    targetAudience: 'Parents, breadwinners, and diaspora sponsors supporting family health back home.',
    keyFeatures: [
      'Unified dashboard view for up to 6 registered dependents',
      'Senior care check-ins and routine mobility/vital reviews for aging parents',
      'Childhood wellness milestones and pediatric preventive guidance',
      'Transparent status summaries sent directly to designated family sponsors'
    ],
    cadence: 'Quarterly and as-needed family reviews',
    iconName: 'UsersThree',
  },
  {
    id: 'workplace-wellness',
    name: 'Workplace & Team Wellness Advisory',
    category: 'Corporate',
    shortDescription: 'Structured health screenings, wellness workshops, and ergonomic guidance for corporate teams and small businesses.',
    fullDescription: 'Workforce productivity drops when employees silently battle chronic fatigue, unchecked hypertension, and burnout. Healthyzone delivers on-site or virtual health days, ergonomic evaluations, and private health assessments for staff.',
    targetAudience: 'Companies, startups, agencies, and small businesses in Lagos, Abuja, and across Nigeria.',
    keyFeatures: [
      'On-site biometric health screening days for employees',
      'Workshops on stress management, posture, and active desk habits',
      'Confidential individual health status cards for each team member',
      'Aggregated, anonymized health risk reports for management planning'
    ],
    cadence: 'Annual or quarterly corporate packages',
    iconName: 'Buildings',
  },
  {
    id: 'triage-referrals',
    name: 'Tele-Triage & Care Navigation',
    category: 'Guidance',
    shortDescription: 'Prompt guidance when you or your family feel unwell, helping you know whether to rest, test, or visit an appropriate care center.',
    fullDescription: 'When health concerns arise, knowing where to turn saves valuable time and prevents unnecessary emergency expenses. Our care navigators help assess your situation, suggest immediate first-line measures, and direct you to the most suitable accredited facility.',
    targetAudience: 'Anyone who wants a trusted, responsive first contact when feeling unwell or unsure about symptoms.',
    keyFeatures: [
      'Direct WhatsApp chat or phone consultation with experienced triage staff',
      'Clear, calm guidance on symptom urgency and next steps',
      'Assistance locating reputable diagnostic centers and clinics',
      'Follow-up communication after your clinic or specialist visit'
    ],
    cadence: 'Available during business hours with expedited triage',
    iconName: 'ChatsCircle',
  },
];

export const WELLNESS_ARTICLES: WellnessArticle[] = [
  {
    id: 'everyday-habits-lifestyle',
    title: 'Everyday habits for a healthier lifestyle in Nigerian cities',
    readTime: '4 min read',
    category: 'Daily Living',
    excerpt: 'Simple, practical adjustments to your commute, meal planning, and evening wind-down that protect your energy in busy urban environments.',
    publishedDate: 'Demo Resource • Preventive Living',
    content: [
      'Living and working in vibrant Nigerian urban centers like Lagos, Ibadan, or Port Harcourt comes with unmistakable energy, but also unique stressors: long commutes, irregular meal timings, and high daily demands. Maintaining your wellbeing does not require an impossible gym routine or costly foreign superfoods.',
      'Start with intentional hydration. In warm weather, mild dehydration is a frequent culprit behind midday headaches and afternoon brain fog. Keep a reusable water bottle within arm’s reach at your workspace and aim for consistent intake before you reach for sweet carbonated beverages.',
      'Next, look closely at your plate. Traditional Nigerian cuisine is naturally rich in legumes, leafy vegetables (such as ugwu, efó, and waterleaf), and quality proteins. The common trap is tilting the balance heavily toward processed carbohydrates and excess cooking oils during fast lunch breaks. Incorporate steamed vegetables and beans alongside smaller portions of swallow or rice.',
      'Lastly, protect your sleep window. Turn off bright screens 30 minutes before bed. When your brain gets consistent downtime, your immune system and cardiovascular regulation improve measurably.'
    ],
    keyTakeaways: [
      'Prioritize clean water over sugary drinks during midday lulls.',
      'Rebalance your plate with plentiful local greens like ugwu and efó.',
      'Create a firm boundary between evening work screens and your sleep routine.',
      'Consistency in small habits beats drastic, short-lived lifestyle overhauls.'
    ],
  },
  {
    id: 'why-preventive-care-matters',
    title: 'Why preventive healthcare saves more than emergency visits',
    readTime: '5 min read',
    category: 'Preventive Health',
    excerpt: 'The physical, emotional, and financial mathematics of catching subtle health shifts months before they turn into acute emergencies.',
    publishedDate: 'Demo Resource • Health Literacy',
    content: [
      'Historically, many people in Nigeria only walk through hospital doors when pain becomes unbearable or a symptom interferes with work. While understandable, this reactive model is the most expensive and stressful way to manage health.',
      'Conditions like hypertension and high blood sugar are often called "silent" because they rarely cause discomfort in their early stages. A person can feel energetic and healthy while their arterial walls endure daily strain from elevated blood pressure.',
      'A structured preventive care plan flips this dynamic. By scheduling regular blood pressure checks, fasting blood sugar evaluations, and lipid panels once or twice a year, minor elevations can be reversed through simple diet and routine tweaks before medication or hospitalization is ever needed.',
      'At Healthyzone, we view preventive care as financial prudence. A straightforward routine check-up costs a tiny fraction of an emergency room visit or long-term complication management. Investing in early clarity gives you peace of mind and sustained vitality.'
    ],
    keyTakeaways: [
      'Hypertension and elevated blood sugar often develop without noticeable symptoms.',
      'Routine annual screenings detect subtle shifts early when they are easiest to manage.',
      'Preventive management significantly reduces unexpected emergency medical expenses.',
      'Knowledge of your baseline numbers empowers smarter daily choices.'
    ],
  },
  {
    id: 'cardiovascular-wellbeing-basics',
    title: 'Simple ways to stay on top of your cardiovascular wellbeing',
    readTime: '4 min read',
    category: 'Heart Health',
    excerpt: 'Grounded strategies for blood pressure awareness, salt reduction, and daily movement that protect your heart across every decade.',
    publishedDate: 'Demo Resource • Vital Wellness',
    content: [
      'Cardiovascular health is the foundation of long-term vitality. The heart pumps oxygen and vital nutrients through thousands of miles of blood vessels each day. Supporting this system does not demand extreme athletic feats; it asks for steady, mindful habits.',
      'First, know your baseline blood pressure numbers. A reading below 120/80 mmHg is ideal. Checking your pressure once a month or during scheduled check-ins removes the guesswork and helps identify trends caused by stress or dietary changes.',
      'Second, be mindful of sodium. While salt enhances flavor in soups, stews, and seasoning cubes, excessive intake draws water into your bloodstream, increasing pressure on vessel walls. Experiment with fresh herbs, garlic, ginger, and peppers to build robust flavor without over-relying on heavy sodium seasonings.',
      'Finally, incorporate 20 to 30 minutes of brisk movement daily. This can be walking through your neighborhood, taking stairs instead of elevators, or participating in weekend sports. Movement keeps arterial walls elastic and improves cholesterol balance naturally.'
    ],
    keyTakeaways: [
      'Have your blood pressure checked regularly and keep a simple written or digital log.',
      'Use aromatic herbs and spices to season food instead of heavy sodium cubes.',
      'Target at least 150 minutes of moderate physical activity throughout each week.',
      'Consult your care partner promptly if you notice unusual shortness of breath or dizziness.'
    ],
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    title: 'Get in Touch with Our Care Team',
    description: 'Reach out via WhatsApp or submit a simple online note. We discuss your current health goals, routine, or family requirements in plain English.',
    highlight: 'No complicated paperwork to start'
  },
  {
    stepNumber: '02',
    title: 'Understand Your Care Option',
    description: 'We match you with a tailored preventive or lifestyle plan that fits your exact profile, whether you need annual screenings, chronic support, or family oversight.',
    highlight: 'Clear pricing & transparent scope'
  },
  {
    stepNumber: '03',
    title: 'Manage Health & Wellness Daily',
    description: 'Enjoy scheduled check-ins, timely health reminders, continuous support on WhatsApp, and coordinated care navigation when questions arise.',
    highlight: 'Ongoing proactive partnership'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: 'Proactive, Not Merely Reactive',
    description: 'Most healthcare begins at the emergency room. Healthyzone focuses on structured check-ins, early screenings, and daily habits so problems never reach critical stages.',
  },
  {
    title: 'Built Around Your Daily Rhythm',
    description: 'Whether you navigate Lagos traffic or manage a remote team, our guidance respects real Nigerian schedules, local nutrition, and practical constraints.',
  },
  {
    title: 'Direct WhatsApp Communication',
    description: 'No waiting rooms or rigid portals. Contact our support team directly at +234 810 497 1281 for clear, timely answers and coordinated check-ins.',
  },
  {
    title: 'Dependable Family Coordination',
    description: 'Keep elderly parents, spouses, and children on structured care routines with unified updates, whether you live down the road or abroad.',
  }
];
