import React from 'react';
import { FinTrackMockup } from './mockups/FinTrackMockup';
import { ExpenseTrackerMockup } from './mockups/ExpenseTrackerMockup';
import { ChatCVMockup } from './mockups/ChatCVMockup';
import { BusinessWebsiteMockup } from './mockups/BusinessWebsiteMockup';
import { AiProductMockup } from './mockups/AiProductMockup';
import { AiPaiseeMockup } from './mockups/AiPaiseeMockup';
import { PortfolioMockup } from './mockups/PortfolioMockup';
import { HariniDentalMockup } from './mockups/HariniDentalMockup';
import { NidhiDentalMockup } from './mockups/NidhiDentalMockup';
import { ConfidentClinicMockup } from './mockups/ConfidentClinicMockup';
import { PritiDentalMockup } from './mockups/PritiDentalMockup';

export const MockupMapper = ({ id }: { id: string }) => {
  switch (id) {
    case 'chatcv': return <ChatCVMockup />;
    case 'vtry': return <AiProductMockup />;
    case 'ai-paisee': return <AiPaiseeMockup />;
    case 'fintrack': return <FinTrackMockup />;
    case 'finance': return <ExpenseTrackerMockup />;
    case 'business': return <BusinessWebsiteMockup />;
    case 'portfolio': return <PortfolioMockup />;
    case 'harini-dental': return <HariniDentalMockup />;
    case 'nidhi-dental': return <NidhiDentalMockup />;
    case 'confident-clinic': return <ConfidentClinicMockup />;
    case 'priti-dental': return <PritiDentalMockup />;
    default: return <BusinessWebsiteMockup />;
  }
};
