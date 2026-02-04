'use client';

interface ApplyButtonProps {
  jobTitle: string;
}

export function ApplyButton({ jobTitle }: ApplyButtonProps) {
  const handleClick = () => {
    // Scroll to the career form section
    const formSection = document.getElementById('career-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      
      // Try to pre-fill the position field if it exists
      const positionField = document.querySelector('input[name="position"]') as HTMLInputElement;
      if (positionField) {
        positionField.value = jobTitle;
      }
      
      // Also try select field
      const positionSelect = document.querySelector('select[name="position"]') as HTMLSelectElement;
      if (positionSelect) {
        const options = Array.from(positionSelect.options);
        const matchingOption = options.find(opt => 
          opt.text.toLowerCase().includes(jobTitle.toLowerCase()) ||
          opt.value.toLowerCase().includes(jobTitle.toLowerCase())
        );
        if (matchingOption) {
          positionSelect.value = matchingOption.value;
        }
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-cyan-700"
    >
      Apply Now
    </button>
  );
}
