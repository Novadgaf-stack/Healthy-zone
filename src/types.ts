export type PageView = 'home' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  keyFeatures: string[];
  cadence: string;
  iconName: string;
  featured?: boolean;
}

export interface WellnessArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  excerpt: string;
  publishedDate: string;
  content: string[];
  keyTakeaways: string[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  preferredChannel: 'whatsapp' | 'call' | 'email';
  message: string;
}
