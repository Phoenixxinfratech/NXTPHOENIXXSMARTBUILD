'use client';

import { useCallback } from 'react';

interface ApplyButtonProps {
  jobTitle: string;
}

export function ApplyButton({ jobTitle }: ApplyButtonProps) {
  const handleClick = useCallback(() => {
    // Scroll to the apply section
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Set the position in the form after a short delay (to allow scroll to complete)
    setTimeout(() => {
      const positionSelect = document.getElementById('position') as HTMLSelectElement;
      if (positionSelect) {
        positionSelect.value = jobTitle;
        // Trigger change event for any listeners
        positionSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 500);
  }, [jobTitle]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 font-semibold text-white text-sm shadow hover:shadow-lg transition-all"
    >
      Apply Now
    </button>
  );
}


