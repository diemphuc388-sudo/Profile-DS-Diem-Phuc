export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details?: string[];
  isHighlight?: boolean;
}

export interface LearningItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'AI' | 'Design' | 'System' | 'Marketing';
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface LiveNotification {
  id: string;
  name: string;
  location: string;
  action: string;
  timeAgo: string;
}

export interface SalesProofItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  tag: string;
  badge?: string;
}

export interface PharmacyHistoryItem {
  id: string;
  year: string;
  imageUrl: string;
  title: string;
  stage: string;
  description: string;
  highlights?: string[];
}

export interface HealthTechCourseItem {
  id: string;
  title: string;
  courseName: string;
  location: string;
  year: string;
  imageUrl: string;
  device: string;
  description: string;
  badge: string;
  skills: string[];
}

export interface OldBusinessPhotoItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'kho-hang' | 'dong-hang' | 'ship-hang';
  tag: string;
  description: string;
  badge: string;
}

export interface MarketingCampaignItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'minigame' | 'voucher' | 'poster' | 'event';
  tag: string;
  badge: string;
  description: string;
}

export interface TravelPhotoItem {
  url: string;
  caption: string;
  tag?: string;
}

export interface TravelTripItem {
  id: string;
  destination: string;
  country: string;
  flag: string;
  time: string;
  title: string;
  tag: string;
  badge: string;
  imageUrl: string;
  images: TravelPhotoItem[];
  description: string;
  quote: string;
  highlights: string[];
}

export interface SapaTripPhoto {
  url: string;
  caption: string;
  tag?: string;
}

export interface SapaTripItem {
  id: string;
  imageUrl: string;
  images: SapaTripPhoto[];
  title: string;
  time: string;
  location: string;
  tag: string;
  badge: string;
  description: string;
  quote: string;
  highlights: string[];
}

export interface AffiliateAmHapyData {
  title: string;
  badge: string;
  subtitle: string;
  introStory: string;
  fourNoPrinciples: {
    title: string;
    description: string;
    icon: string;
  }[];
  coreFocusQuote: string;
  corePillars: {
    title: string;
    description: string;
    icon: string;
    highlight: string;
  }[];
  benefitsAndIncome: {
    title: string;
    detail: string;
    icon: string;
    badge: string;
  }[];
  deepReflection: {
    quote: string;
    solution: string;
  };
  mindsetShifts: {
    from: string;
    to: string;
    note: string;
  }[];
  closingVision: string;
}

