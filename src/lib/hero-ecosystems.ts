export type TransitionPhase = 'idle' | 'sweep' | 'fading' | 'skeleton' | 'entering';

export interface GlobalEvent {
  id: string;
  type: 'NEW_LEAD' | 'DEPLOYMENT_SUCCESS' | 'SERVER_WARNING' | 'PAYMENT_RECEIVED' | 'AI_TASK_COMPLETE';
  message: string;
}

export interface EcosystemData {
  id: string;
  theme: {
    primary: string;
    primaryGlow: string;
    secondary: string;
    background: string;
    cardBg: string;
    text: string;
  };
  laptop: {
    header: string;
    metrics: { label: string; value: string }[];
    chartBars: { height: string; active: boolean }[];
  };
  tablet: {
    header: string;
    ringValue: number;
    ringLabel: string;
    statusLabel: string;
    statusColor: string;
    chartPath: string;
  };
  phone: {
    badge: string;
    title: string;
    subtitle: string;
    list: { label: string; status: 'active' | 'idle' | 'success' | 'warning' }[];
  };
}

export const HERO_ECOSYSTEMS: EcosystemData[] = [
  {
    id: 'saas-analytics',
    theme: {
      primary: '#00D4FF',
      primaryGlow: 'rgba(0, 212, 255, 0.5)',
      secondary: '#FFBD2E',
      background: '#0B1020',
      cardBg: '#0f1525',
      text: 'white',
    },
    laptop: {
      header: 'ANALYTICS',
      metrics: [
        { label: 'Total Revenue', value: '$124,500' },
        { label: 'Active Users', value: '8,444' }
      ],
      chartBars: [
        { height: '35%', active: true },
        { height: '25%', active: false },
        { height: '40%', active: false },
        { height: '55%', active: false },
        { height: '35%', active: false },
        { height: '45%', active: false },
        { height: '30%', active: false },
        { height: '40%', active: false },
        { height: '65%', active: true },
      ]
    },
    tablet: {
      header: 'GROWTH RATE',
      ringValue: 89,
      ringLabel: '89%',
      statusLabel: 'Server Region US-East',
      statusColor: '#27C93F',
      chartPath: 'M 0 50 C 20 45, 40 55, 60 30 C 80 5, 90 20, 100 0'
    },
    phone: {
      badge: 'v2.4',
      title: 'Dashboard',
      subtitle: 'System Online',
      list: [
        { label: 'API Gateway', status: 'active' },
        { label: 'Database', status: 'active' },
        { label: 'Storage', status: 'idle' }
      ]
    }
  },
  {
    id: 'ecommerce',
    theme: {
      primary: '#A855F7',
      primaryGlow: 'rgba(168, 85, 247, 0.5)',
      secondary: '#EC4899',
      background: '#180B20',
      cardBg: '#23102C',
      text: 'white',
    },
    laptop: {
      header: 'STORE METRICS',
      metrics: [
        { label: 'Today\'s Sales', value: '$18,230' },
        { label: 'Conversion Rate', value: '4.2%' }
      ],
      chartBars: [
        { height: '20%', active: false },
        { height: '40%', active: false },
        { height: '35%', active: false },
        { height: '60%', active: true },
        { height: '80%', active: false },
        { height: '50%', active: false },
        { height: '45%', active: false },
        { height: '70%', active: true },
        { height: '90%', active: false },
      ]
    },
    tablet: {
      header: 'CART ABANDONMENT',
      ringValue: 12,
      ringLabel: '12%',
      statusLabel: 'Stripe Gateway Active',
      statusColor: '#A855F7',
      chartPath: 'M 0 10 C 30 20, 50 60, 70 40 C 90 10, 95 5, 100 0' // Downward trend
    },
    phone: {
      badge: 'LIVE',
      title: 'Orders',
      subtitle: 'Fulfillment Queue',
      list: [
        { label: 'Order #8922', status: 'success' },
        { label: 'Order #8923', status: 'active' },
        { label: 'Order #8924', status: 'idle' }
      ]
    }
  },
  {
    id: 'ai-automation',
    theme: {
      primary: '#10B981',
      primaryGlow: 'rgba(16, 185, 129, 0.5)',
      secondary: '#3B82F6',
      background: '#0B1A15',
      cardBg: '#0F241D',
      text: 'white',
    },
    laptop: {
      header: 'AI ENGINE PIPELINE',
      metrics: [
        { label: 'Tasks Automated', value: '142,800' },
        { label: 'Avg Confidence', value: '99.4%' }
      ],
      chartBars: [
        { height: '70%', active: false },
        { height: '75%', active: false },
        { height: '80%', active: false },
        { height: '78%', active: false },
        { height: '85%', active: true },
        { height: '90%', active: false },
        { height: '88%', active: false },
        { height: '95%', active: false },
        { height: '98%', active: true },
      ]
    },
    tablet: {
      header: 'MODEL ACCURACY',
      ringValue: 99,
      ringLabel: '99%',
      statusLabel: 'Neural Net v4 Active',
      statusColor: '#10B981',
      chartPath: 'M 0 60 C 10 60, 30 10, 50 5 C 70 0, 90 2, 100 0' // Rapid plateau
    },
    phone: {
      badge: 'AUTO',
      title: 'Workflows',
      subtitle: 'Real-time routing',
      list: [
        { label: 'Data Extraction', status: 'success' },
        { label: 'Sentiment Analysis', status: 'active' },
        { label: 'Auto-Responder', status: 'idle' }
      ]
    }
  }
];
