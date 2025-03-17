"use client"

import { useUnlock } from "@/context/UnlockContext";

export function BlurWrapper({ children }: { children: React.ReactNode }) {
  const { isUnlocked } = useUnlock();

  return (
    <div className={`relative ${!isUnlocked ? 'blur-sm pointer-events-none' : ''}`}>
      {children}
      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center bg-white p-4 rounded-lg shadow-lg">
            Please fill the contact form to view this content
          </p>
        </div>
      )}
    </div>
  );
} 