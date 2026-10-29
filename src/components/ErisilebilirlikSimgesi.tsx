import React from 'react';

// Evrensel erişim simgesi (daire içinde kollarını açmış insan). Lucide'deki
// `Accessibility` tekerlekli sandalyeli figür; erişilebilirlik yalnız hareket
// engeli demek değil (Ahmet 02.10: "engelli ikonu hoş olmamış").
export const ErisilebilirlikSimgesi: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="7" r="1.4" fill="currentColor" stroke="none" />
    <path d="M7 10l5 1 5-1" />
    <path d="M12 11v3.5" />
    <path d="M9.5 18.5L12 14.5l2.5 4" />
  </svg>
);
