import React from 'react';
import { FinTrackMockup } from './mockups/FinTrackMockup';
import { ExpenseTrackerMockup } from './mockups/ExpenseTrackerMockup';
import { ChatCVMockup } from './mockups/ChatCVMockup';
import { BusinessWebsiteMockup } from './mockups/BusinessWebsiteMockup';
import { AiProductMockup } from './mockups/AiProductMockup';
import { PortfolioMockup } from './mockups/PortfolioMockup';

export const MockupMapper = ({ id }: { id: string }) => {
  switch (id) {
    case 'chatcv': return <ChatCVMockup />;
    case 'vtry':
    case 'ai-paisee': return <AiProductMockup />;
    case 'fintrack': return <FinTrackMockup />;
    case 'finance': return <ExpenseTrackerMockup />;
    case 'business': return <BusinessWebsiteMockup />;
    case 'portfolio': return <PortfolioMockup />;
    default: return <BusinessWebsiteMockup />;
  }
};
