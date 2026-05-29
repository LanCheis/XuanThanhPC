import { useState, useEffect } from 'react';

export const useModal = (storageKey) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(storageKey)) {
      setIsOpen(true);
    }
  }, [storageKey]);

  const close = () => {
    setIsOpen(false);
    localStorage.setItem(storageKey, 'true');
  };

  return { isOpen, close };
};
