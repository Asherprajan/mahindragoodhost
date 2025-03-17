"use client"

import { createContext, useContext, useState } from "react";

interface UnlockContextType {
  isUnlocked: boolean;
  unlockContent: () => void;
}

const UnlockContext = createContext<UnlockContextType>({
  isUnlocked: false,
  unlockContent: () => {},
});

export function UnlockProvider({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const unlockContent = () => {
    setIsUnlocked(true);
    // You can also store this in localStorage if you want to persist it
    localStorage.setItem('isUnlocked', 'true');
  };

  return (
    <UnlockContext.Provider value={{ isUnlocked, unlockContent }}>
      {children}
    </UnlockContext.Provider>
  );
}

export const useUnlock = () => useContext(UnlockContext); 