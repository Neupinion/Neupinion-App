import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast from './Toast';

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<(msg: string) => void>(() => {});

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [isAnimating] = useState(false);

  const showToast = useCallback(
    (msg: string) => {
      if (!isAnimating) {
        setMessage(msg);
      }
    }, [isAnimating]);

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
