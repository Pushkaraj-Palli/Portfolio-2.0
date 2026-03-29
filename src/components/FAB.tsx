import React from 'react';

const FAB = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <a
        href="https://www.linkedin.com/in/pushkaraj-palli-748296269/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-tertiary-container border-[3px] border-inverse-surface flex items-center justify-center neo-shadow hover:scale-110 active:translate-y-[2px] active:shadow-none transition-all"
        aria-label="LinkedIn Profile"
      >
        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
      </a>
    </div>
  );
};

export default FAB;
