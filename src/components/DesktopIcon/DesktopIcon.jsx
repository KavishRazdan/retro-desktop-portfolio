import React, { useRef, useEffect } from 'react';
import { Folder, FileText, Terminal, Trophy, Info, Calendar } from 'lucide-react';

const IconSvg = ({ type }) => {
  switch (type) {
    case 'profile':
      return (
        <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="52" height="52" rx="14" fill="#717A50" stroke="#444444" strokeWidth="2.5" />
          <text x="30" y="40" fill="#FFFFFF" fontSize="32" fontWeight="700" fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">k</text>
        </svg>
      );
    case 'folder':
    default:
      return (
        <svg width="100%" height="100%" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back flap and tab */}
          <path d="M4 10V6C4 4.89 4.89 4 6 4H20L24 10H54C55.11 10 56 10.89 56 12V46C56 47.11 55.11 48 54 48H6C4.89 48 4 47.11 4 46V10Z" fill="#F4D54E" stroke="#444444" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Inner blue page peaking out */}
          <rect x="12" y="12" width="36" height="24" rx="2" fill="#5EAAFF" stroke="#444444" strokeWidth="2" />
          {/* Front pocket */}
          <path d="M4 18H56V46C56 47.11 55.11 48 54 48H6C4.89 48 4 47.11 4 46V18Z" fill="#F4D54E" stroke="#444444" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );
  }
};

export const DesktopIcon = ({ id, label, iconType, onOpen, selected, onSelect }) => {
  const iconRef = useRef(null);

  // Keyboard navigation behavior
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onOpen();
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect();
    
    // Quick response on touch screens
    if (window.innerWidth <= 768) {
      onOpen();
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <button
      ref={iconRef}
      id={`desktop-icon-${id}`}
      className={`desktop-icon-btn ${selected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Open ${label}`}
    >
      <div className="folder-icon-wrapper">
        <IconSvg type={iconType} />
      </div>
      <span className="folder-icon-label">{label}</span>
    </button>
  );
};

export default DesktopIcon;
