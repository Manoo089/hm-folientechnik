import { useEffect } from 'react';

export interface Props {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export const useScroll = (isOpen: any, setIsOpen: any) => {
  useEffect(() => {
    const handleScroll = () => {
      // Menü schließen, wenn es offen ist
      if (isOpen) {
        setIsOpen(false);
      }
    };
    // Scroll-Eventlistener hinzufügen
    window.addEventListener('scroll', handleScroll);

    // Eventlistener entfernen, wenn die Komponente unmountet wird
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, setIsOpen]); // Abhängigkeit von isMenuOpen, damit es bei Änderungen reagiert
};
