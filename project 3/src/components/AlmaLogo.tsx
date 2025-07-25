import React from 'react';

interface AlmaLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function AlmaLogo({ className = '', size = 'medium' }: AlmaLogoProps) {
  const sizeClasses = {
    small: 'h-8', // 32px mobile
    medium: 'h-10', // 40px
    large: 'h-12' // 48px desktop
  };

  return (
    <svg
      viewBox="0 0 120 40"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="60"
        y="28"
        textAnchor="middle"
        className="fill-current font-recoleta font-black"
        style={{
          fontSize: '28px',
          letterSpacing: '-0.05em',
          fontWeight: 900
        }}
      >
        alma
      </text>
    </svg>
  );
}