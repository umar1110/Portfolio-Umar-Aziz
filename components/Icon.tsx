import React from 'react';

interface SimpleIcon {
  title: string;
  hex: string;
  path: string;
}

interface Props {
  icon: SimpleIcon;
  size?: number;
  color?: string;
  className?: string;
}

export default function Icon({ icon, size = 24, color, className }: Props) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || `#${icon.hex}`}
      aria-label={icon.title}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
