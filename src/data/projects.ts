export type ProjectCategory = 'AI Product' | 'Finance Web Application' | 'AI Resume Builder' | 'Finance Dashboard' | 'Business Website' | 'Portfolio Website';
export type ProjectType = 'Personal Product' | 'Concept Project' | 'Practice Project';

export interface ProjectData {
  id: string;
  name: string;
  category: ProjectCategory;
  type: ProjectType;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string;
  learnings: string;
  liveDemoUrl: string;
  githubUrl?: string;
  mockupId: 'chatcv' | 'vtry' | 'fintrack' | 'ai-paisee' | 'business' | 'portfolio' | 'finance' | 'harini-dental' | 'nidhi-dental' | 'confident-clinic' | 'priti-dental' | 'muskan-mehndi' | 'dj-brothers' | 'brijesh-portfolio';
}

export const projectsData: ProjectData[] = [
  {
    id: "chatcv",
    name: "ChatCV",
    category: "AI Resume Builder",
    type: "Personal Product",
    overview: "An AI-powered resume builder designed to help job seekers generate professional, ATS-friendly resumes through a conversational interface.",
    problem: "Many talented professionals struggle to format their resumes correctly for Applicant Tracking Systems (ATS) and often find traditional form-based resume builders tedious and rigid.",
    solution: "I built a conversational interface that extracts professional experience through natural dialogue and automatically compiles it into an optimized, cleanly formatted document.",
    features: ["Conversational Data Entry", "Real-time PDF Generation", "ATS-Optimized Templates", "Content Suggestion Engine"],
    technologies: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    challenges: "Handling unpredictable user input during the conversational flow required building a robust parsing engine to map natural language to structured JSON resume schemas.",
    learnings: "I learned how to effectively manage LLM context windows and prompt engineering to ensure consistent, highly structured data extraction without hallucination.",
    liveDemoUrl: "https://chatcv-app.netlify.app/",
    mockupId: "chatcv"
  },
  {
    id: "vtry",
    name: "VTry",
    category: "AI Product",
    type: "Personal Product",
    overview: "A virtual try-on application utilizing generative AI to visualize clothing on user-uploaded photos.",
    problem: "E-commerce fashion suffers from high return rates because customers cannot accurately visualize how garments will look on their specific body type before purchasing.",
    solution: "VTry integrates advanced image-processing models to seamlessly overlay selected garments onto user photographs, adjusting for lighting, drape, and body contour.",
    features: ["Image-to-Image Generation", "Garment Segmentation", "User Profile Management", "Real-time Processing Feedback"],
    technologies: ["Next.js", "Python Fast API", "Stable Diffusion", "TypeScript"],
    challenges: "Achieving realistic fabric draping and preserving the user's original body dimensions during the diffusion process was computationally intensive and prone to artifacts.",
    learnings: "Deepened my understanding of stable diffusion pipelines, specifically utilizing ControlNet for precise edge preservation in image generation.",
    liveDemoUrl: "https://vtry-app.netlify.app/",
    mockupId: "vtry"
  },
  {
    id: "fintrack",
    name: "FinTrack",
    category: "Finance Dashboard",
    type: "Concept Project",
    overview: "A comprehensive financial analytics dashboard conceptualized for tracking complex investment portfolios and cash flows.",
    problem: "Retail investors often use multiple disjointed platforms to track stocks, crypto, and traditional banking, lacking a unified view of their net worth and asset allocation.",
    solution: "FinTrack aggregates mock financial data into a single, highly visual dashboard with interactive charts, transaction ledgers, and automated budget categorization.",
    features: ["Unified Asset Tracking", "Interactive Data Visualizations", "Categorized Transaction Ledgers", "Dark Mode Analytics Interface"],
    technologies: ["React", "Recharts", "Tailwind CSS", "Framer Motion"],
    challenges: "Designing a dense data interface that remains legible and uncluttered on mobile devices required extensive iteration on responsive table layouts.",
    learnings: "Mastered the balance between data density and visual breathing room, leading to a much stronger grasp of dashboard UX principles.",
    liveDemoUrl: "https://fintrackexp-app.netlify.app/",
    mockupId: "fintrack"
  },
  {
    id: "ai-paisee",
    name: "AI Paisee",
    category: "AI Product",
    type: "Concept Project",
    overview: "An experimental AI-driven platform exploring automated financial insights and predictive budgeting.",
    problem: "Most budgeting apps show past data but fail to actively predict future cash flow bottlenecks based on historical spending behavior.",
    solution: "AI Paisee acts as a conceptual prototype for a forward-looking financial advisor, utilizing mock predictive algorithms to forecast end-of-month balances and flag anomalous spending.",
    features: ["Predictive Balance Forecasting", "Anomaly Detection Alerts", "Conversational Finance Assistant", "Goal Tracking"],
    technologies: ["React", "Vite", "Chart.js", "Tailwind CSS"],
    challenges: "Visualizing predictive data alongside historical data without confusing the user required designing distinct UI states and clear timeline markers.",
    learnings: "Gained significant experience in conceptualizing complex user flows for AI products, focusing on building trust through transparent UI.",
    liveDemoUrl: "https://aipaisee.netlify.app/",
    mockupId: "ai-paisee"
  },
  {
    id: "harini-dental",
    name: "Harini Dental Care",
    category: "Business Website",
    type: "Practice Project",
    overview: "A modern, high-conversion landing page designed to establish digital presence and drive appointment bookings for a local dental practice.",
    problem: "Local healthcare providers often rely on outdated websites that are difficult to navigate on mobile and lack clear calls-to-action for booking appointments.",
    solution: "I developed a fast, mobile-first website focused entirely on patient trust and conversion, featuring clear service breakdowns and sticky booking buttons.",
    features: ["Mobile-First Layout", "Service Highlights", "Patient Testimonial Carousel", "Direct WhatsApp Booking"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    challenges: "Balancing a professional, medical aesthetic with an approachable, friendly tone through typography and color palette choices.",
    learnings: "Learned how critical page load speed and direct contact accessibility are for local business conversion rates.",
    liveDemoUrl: "https://harinidentalcare.netlify.app/",
    mockupId: "harini-dental"
  },
  {
    id: "expense-manager",
    name: "My Expense Manager",
    category: "Finance Web Application",
    type: "Personal Product",
    overview: "A lightweight, privacy-focused application for manual daily expense tracking without the need for bank account integrations.",
    problem: "Users who prefer manual tracking for privacy reasons often find modern finance apps bloated with unnecessary bank-syncing features and paywalls.",
    solution: "I built a blazing-fast, offline-capable progressive web app (PWA) that allows users to log expenses in under 3 seconds with local storage functionality.",
    features: ["Sub-3-second Entry Flow", "Local Storage Data Persistence", "CSV Export Capability", "Visual Spending Breakdowns"],
    technologies: ["React", "Redux", "LocalStorage API", "Tailwind CSS"],
    challenges: "Ensuring state consistency and preventing data loss entirely on the client-side without a traditional backend database.",
    learnings: "Deepened my understanding of client-side state management, browser storage limits, and Progressive Web App mechanics.",
    liveDemoUrl: "https://myexpensemanager-app.netlify.app/",
    mockupId: "finance"
  },
  {
    id: "nidhi-dental",
    name: "Nidhi Dental Clinic",
    category: "Business Website",
    type: "Practice Project",
    overview: "A clean, informative digital storefront designed to showcase specialized dental procedures and clinic facilities.",
    problem: "Patients seeking specialized procedures need detailed information to overcome anxiety and build trust before booking.",
    solution: "Created a content-rich layout that highlights doctor credentials, before-and-after galleries, and detailed FAQ sections to educate prospective patients.",
    features: ["Procedure Galleries", "Doctor Profiles", "Interactive FAQ", "Location & Maps Integration"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    challenges: "Organizing a large amount of medical text into scannable, non-intimidating UI blocks.",
    learnings: "Improved my ability to use whitespace and typographic hierarchy to make dense information easily digestible.",
    liveDemoUrl: "https://nidhidentalclinic.netlify.app/",
    mockupId: "nidhi-dental"
  },
  {
    id: "confident-clinic",
    name: "Confident Clinic",
    category: "Business Website",
    type: "Practice Project",
    overview: "A premium business website concept focused on cosmetic dentistry and high-end patient experiences.",
    problem: "Cosmetic dentistry requires a brand presentation that aligns with luxury services rather than traditional clinical environments.",
    solution: "Implemented a dark-mode inspired, highly visual layout utilizing elegant typography and high-resolution imagery to convey premium service quality.",
    features: ["Premium Dark UI", "Smooth Scroll Animations", "Service Showcases", "Integrated Booking Form"],
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    challenges: "Achieving smooth, high-performance scroll animations without causing layout shifts or jank on mobile devices.",
    learnings: "Gained practical experience optimizing hardware-accelerated CSS properties and managing animation timelines.",
    liveDemoUrl: "https://confidentclinic.netlify.app/",
    mockupId: "confident-clinic"
  },
  {
    id: "priti-dental",
    name: "Priti Dental Clinic",
    category: "Business Website",
    type: "Practice Project",
    overview: "A family-oriented dental clinic website focused on approachability, pediatric care, and ease of use.",
    problem: "Parents booking appointments for children require reassurance and extremely simple navigation flows.",
    solution: "Designed a warm, bright interface with soft shapes and prominent emergency contact information for rapid access.",
    features: ["One-Click Emergency Call", "Pediatric Service Highlights", "Warm Color Palette", "Responsive Grid Layout"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    challenges: "Creating a completely custom aesthetic without relying on heavy frontend frameworks, focusing on pure CSS architecture.",
    learnings: "Reinforced core CSS fundamentals, including Flexbox, Grid, and semantic HTML structure.",
    liveDemoUrl: "https://pritidentalclinic.netlify.app/",
    mockupId: "priti-dental"
  },
  {
    id: "muskan-mehndi",
    name: "Muskan Mehndi Art",
    category: "Business Website",
    type: "Practice Project",
    overview: "A visually rich portfolio and booking site designed for a freelance bridal mehndi artist.",
    problem: "Visual artists often rely solely on social media, lacking a professional central hub to manage pricing, packages, and inquiries.",
    solution: "Developed an image-centric platform that beautifully displays complex henna designs while providing clear package pricing and inquiry forms.",
    features: ["Masonry Image Gallery", "Package Pricing Tables", "Inquiry Form", "Instagram Integration Flow"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    challenges: "Optimizing dozens of high-resolution images to ensure the site loaded quickly without sacrificing visual quality.",
    learnings: "Mastered modern image optimization techniques, lazy loading, and implementing masonry layouts in React.",
    liveDemoUrl: "https://muskanmehndiart.netlify.app/",
    mockupId: "muskan-mehndi"
  },
  {
    id: "dj-brothers",
    name: "DJ Brothers",
    category: "Business Website",
    type: "Practice Project",
    overview: "A high-energy promotional website built for an event and entertainment DJ service.",
    problem: "Event services need to convey energy, audio-visual quality, and reliability to event planners rapidly.",
    solution: "Built a dynamic, dark-themed site featuring video backgrounds, energetic micro-interactions, and clear equipment package breakdowns.",
    features: ["Video Hero Background", "Equipment Package Grids", "Audio Sample Integration", "Event Inquiry System"],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    challenges: "Managing performance overhead from background videos while maintaining 60fps scrolling animations.",
    learnings: "Learned advanced media handling, video compression strategies, and dynamic import optimizations in Next.js.",
    liveDemoUrl: "https://djbrothers0127.netlify.app/",
    mockupId: "dj-brothers"
  },
  {
    id: "brijesh-portfolio",
    name: "Brijesh Portfolio",
    category: "Portfolio Website",
    type: "Practice Project",
    overview: "A personal portfolio concept designed to showcase software engineering skills and past projects.",
    problem: "Developers often struggle to present their highly technical work in a way that is visually engaging to recruiters and non-technical stakeholders.",
    solution: "Designed a clean, minimalist developer portfolio focused on scannability, emphasizing technical skills through distinct typography and project cards.",
    features: ["Minimalist Aesthetic", "Project Case Study Cards", "Skill Trees", "Downloadable Resume Flow"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    challenges: "Striking the right balance between showing technical depth (code snippets) and maintaining a clean visual design.",
    learnings: "Deepened my understanding of personal branding and how to architect content for dual audiences (technical leads and recruiters).",
    liveDemoUrl: "https://brijeshptl20.netlify.app/",
    mockupId: "brijesh-portfolio"
  }
];
