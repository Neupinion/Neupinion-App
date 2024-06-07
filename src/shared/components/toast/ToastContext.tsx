import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import Toast from './Toast';

const ToastContext = createContext<(msg: string) => void>(() => {});

interface ToastProviderProps {
  children: ReactNode;
}

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setMessage] = useState('');

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
  }, []);

  const hideToast = useCallback(() => {
    setMessage('');
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast message={message} onHide={hideToast} />
    </ToastContext.Provider>
  );
};
