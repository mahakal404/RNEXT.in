export type EcosystemType = 'analytics' | 'crm' | 'banking' | 'ai';

export interface EcosystemData {
  id: EcosystemType;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  desktop: {
    headerTitle: string;
    metric1: { label: string; value: number; prefix?: string; suffix?: string };
    metric2: { label: string; value: number; prefix?: string; suffix?: string };
  };
  tablet: {
    chartLabel: string;
    progress: number;
    listItems: Array<{ title: string; subtitle: string; active?: boolean }>;
  };
  mobile: {
    heroTitle: string;
    heroSubtitle: string;
    cardItems: Array<{ label: string; value: string }>;
  };
}

export type LiveEvent = {
  id: string;
  type: 'success' | 'alert' | 'message' | 'update';
  message: string;
  targetDevice: 'all' | 'desktop' | 'tablet' | 'mobile';
};

export const ecosystems: EcosystemData[] = [
  {
    id: 'analytics',
    name: 'Analytics Platform',
    colors: {
      primary: '#00D4FF',
      secondary: '#3B82F6',
      accent: '#22D3EE',
    },
    desktop: {
      headerTitle: 'ANALYTICS',
      metric1: { label: 'Total Revenue', value: 124500, prefix: '$' },
      metric2: { label: 'Active Users', value: 8432 },
    },
    tablet: {
      chartLabel: 'Growth Rate',
      progress: 78,
      listItems: [
        { title: 'Server Region US-East', subtitle: 'Healthy', active: true },
        { title: 'Server Region EU-West', subtitle: 'Syncing' },
        { title: 'Database Cluster', subtitle: 'Optimized' },
      ],
    },
    mobile: {
      heroTitle: 'Live Overview',
      heroSubtitle: '+14% this week',
      cardItems: [
        { label: 'Traffic', value: '45.2K' },
        { label: 'Conversion', value: '3.8%' },
      ],
    },
  },
  {
    id: 'crm',
    name: 'CRM Workspace',
    colors: {
      primary: '#A855F7',
      secondary: '#8B5CF6',
      accent: '#D946EF',
    },
    desktop: {
      headerTitle: 'CRM.',
      metric1: { label: 'New Leads', value: 342 },
      metric2: { label: 'Closed Deals', value: 89, prefix: '$', suffix: 'K' },
    },
    tablet: {
      chartLabel: 'Pipeline Health',
      progress: 92,
      listItems: [
        { title: 'Sarah Jenkins', subtitle: 'Enterprise Deal', active: true },
        { title: 'TechCorp LLC', subtitle: 'Follow-up Required' },
        { title: 'Acme Inc', subtitle: 'Contract Sent' },
      ],
    },
    mobile: {
      heroTitle: 'Daily Tasks',
      heroSubtitle: '4 pending actions',
      cardItems: [
        { label: 'Calls', value: '12' },
        { label: 'Emails', value: '45' },
      ],
    },
  },
  {
    id: 'banking',
    name: 'Mobile Banking',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399',
    },
    desktop: {
      headerTitle: 'FINANCE.',
      metric1: { label: 'Available Balance', value: 48592, prefix: '$' },
      metric2: { label: 'Monthly Spend', value: 3240, prefix: '$' },
    },
    tablet: {
      chartLabel: 'Cash Flow',
      progress: 64,
      listItems: [
        { title: 'Stripe Payout', subtitle: '+$4,500.00', active: true },
        { title: 'AWS Hosting', subtitle: '-$342.50' },
        { title: 'Slack Subscription', subtitle: '-$45.00' },
      ],
    },
    mobile: {
      heroTitle: 'Current Card',
      heroSubtitle: '**** **** **** 4242',
      cardItems: [
        { label: 'Limit', value: '$10k' },
        { label: 'Used', value: '$3.2k' },
      ],
    },
  },
  {
    id: 'ai',
    name: 'AI Workspace',
    colors: {
      primary: '#F43F5E',
      secondary: '#E11D48',
      accent: '#FB7185',
    },
    desktop: {
      headerTitle: 'NEURAL.',
      metric1: { label: 'API Calls', value: 1450000 },
      metric2: { label: 'Avg Latency', value: 45, suffix: 'ms' },
    },
    tablet: {
      chartLabel: 'Model Accuracy',
      progress: 98,
      listItems: [
        { title: 'v4-Turbo Model', subtitle: 'Running', active: true },
        { title: 'Training Job #42', subtitle: 'Completed' },
        { title: 'Data Pipeline', subtitle: 'Processing' },
      ],
    },
    mobile: {
      heroTitle: 'AI Assistant',
      heroSubtitle: 'Ready to help',
      cardItems: [
        { label: 'Tokens', value: '1.2M' },
        { label: 'Cost', value: '$24.50' },
      ],
    },
  },
];

export const getRandomEvent = (ecosystem: EcosystemType): LiveEvent => {
  const events = {
    analytics: [
      { id: '1', type: 'success', message: 'Traffic Spike Detected', targetDevice: 'all' },
      { id: '2', type: 'update', message: 'Report Generated', targetDevice: 'desktop' },
      { id: '3', type: 'alert', message: 'Server Load High', targetDevice: 'tablet' },
    ],
    crm: [
      { id: '4', type: 'success', message: 'New Deal Closed! ($12k)', targetDevice: 'all' },
      { id: '5', type: 'message', message: 'Message from Sarah', targetDevice: 'mobile' },
      { id: '6', type: 'update', message: 'Pipeline Updated', targetDevice: 'desktop' },
    ],
    banking: [
      { id: '7', type: 'success', message: 'Payment Received ($450)', targetDevice: 'all' },
      { id: '8', type: 'alert', message: 'Large Transaction', targetDevice: 'mobile' },
      { id: '9', type: 'update', message: 'Statement Ready', targetDevice: 'desktop' },
    ],
    ai: [
      { id: '10', type: 'success', message: 'Training Complete', targetDevice: 'all' },
      { id: '11', type: 'message', message: 'Analysis Ready', targetDevice: 'desktop' },
      { id: '12', type: 'update', message: 'Model Deployed', targetDevice: 'tablet' },
    ]
  } as const;

  const currentEvents = events[ecosystem];
  return currentEvents[Math.floor(Math.random() * currentEvents.length)] as LiveEvent;
};
