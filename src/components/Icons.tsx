import React from 'react';
import {
  Heartbeat,
  PersonArmsSpread,
  ShieldCheck,
  UsersThree,
  Buildings,
  ChatsCircle,
  Check,
  ArrowRight,
  ArrowUpRight,
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  List,
  X,
  Sparkle,
  CalendarCheck,
  Article,
  CaretRight,
  Info,
  User,
  Heart,
  FirstAid,
  ArrowUp,
  ArrowLeft,
  CaretUp,
  CaretLeft,
} from '@phosphor-icons/react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const AppIcon: React.FC<IconProps> = ({
  name,
  size = 22,
  color = '#1B5E3A', // forest-700 default
  className = '',
}) => {
  const common = {
    size,
    color,
    weight: 'light' as const,
    className,
  };

  switch (name) {
    case 'Heartbeat':
      return <Heartbeat {...common} />;
    case 'PersonArmsSpread':
      return <PersonArmsSpread {...common} />;
    case 'ShieldCheck':
      return <ShieldCheck {...common} />;
    case 'UsersThree':
      return <UsersThree {...common} />;
    case 'Buildings':
      return <Buildings {...common} />;
    case 'ChatsCircle':
      return <ChatsCircle {...common} />;
    case 'Check':
      return <Check {...common} />;
    case 'ArrowRight':
      return <ArrowRight {...common} />;
    case 'ArrowUpRight':
      return <ArrowUpRight {...common} />;
    case 'WhatsappLogo':
      return <WhatsappLogo {...common} />;
    case 'Phone':
      return <Phone {...common} />;
    case 'EnvelopeSimple':
      return <EnvelopeSimple {...common} />;
    case 'MapPin':
      return <MapPin {...common} />;
    case 'Clock':
      return <Clock {...common} />;
    case 'List':
      return <List {...common} />;
    case 'X':
      return <X {...common} />;
    case 'Sparkle':
      return <Sparkle {...common} />;
    case 'CalendarCheck':
      return <CalendarCheck {...common} />;
    case 'Article':
      return <Article {...common} />;
    case 'CaretRight':
      return <CaretRight {...common} />;
    case 'Info':
      return <Info {...common} />;
    case 'User':
      return <User {...common} />;
    case 'Heart':
      return <Heart {...common} />;
    case 'FirstAid':
      return <FirstAid {...common} />;
    case 'ArrowUp':
      return <ArrowUp {...common} />;
    case 'ArrowLeft':
      return <ArrowLeft {...common} />;
    case 'CaretUp':
      return <CaretUp {...common} />;
    case 'CaretLeft':
      return <CaretLeft {...common} />;
    default:
      return <Heartbeat {...common} />;
  }
};
