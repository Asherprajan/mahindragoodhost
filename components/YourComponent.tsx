import { BlurWrapper } from "@/components/BlurWrapper";
import { useUnlock } from "@/context/UnlockContext";
import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function YourComponent() {
  const { isUnlocked } = useUnlock();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BlurWrapper>
        {/* Protected Content Placeholders */}
        <div className="space-y-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Floor Plans</h3>
            <p className="text-gray-600">Detailed floor plans will be shown here</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Brochure Download</h3>
            <p className="text-gray-600">Brochure download link will be available here</p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold">Master Plan</h3>
            <p className="text-gray-600">Master plan details will be shown here</p>
          </div>
        </div>
      </BlurWrapper>
      
      {!isUnlocked && (
        <div className="mt-4 text-center">
          <Button onClick={() => setIsModalOpen(true)}>
            Unlock Content
          </Button>
        </div>
      )}

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(data) => {
          // Handle form submission
          console.log(data);
        }}
      />
    </>
  );
} 