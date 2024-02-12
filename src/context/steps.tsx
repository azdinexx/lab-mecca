// SurveyContext.tsx
import React, { createContext, useState } from 'react';

// Define context type
interface SurveyContextType {
  language: 'EN' | 'FR' | 'AR';
  etage: 1 | 2 | 3 | 4;
  setLanguage: React.Dispatch<
    React.SetStateAction<SurveyContextType['language']>
  >;
  setEtage: React.Dispatch<React.SetStateAction<SurveyContextType['etage']>>;
}

// Create the context
export const SurveyContext = createContext<SurveyContextType | undefined>(
  undefined
);

// Provider component
export const SurveyProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<SurveyContextType['language']>('EN');
  const [etage, setEtage] = useState<SurveyContextType['etage']>(1);
  return (
    <SurveyContext.Provider
      value={{
        language,
        etage,
        setLanguage,
        setEtage,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
