import React, { createContext, ReactNode, useContext, useState } from "react";

interface DateContextType {
  date: string;
  setDate: (date: string) => void;
}

interface DateProviderProps {
  children: ReactNode;
}

const DateContext = createContext<DateContextType | undefined>(undefined);
export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState<string>(() => {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
  });

  return <DateContext.Provider value={{ date, setDate }}>{children}</DateContext.Provider>;
};

export const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
