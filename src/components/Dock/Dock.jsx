import React from 'react';
import { motion } from 'framer-motion';
import { useWindowManager } from '../../context/WindowContext';
import { DOCK_ITEMS } from '../../utils/constants';

const LinkedInSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="12" y="17.5" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" textAnchor="middle">in</text>
  </svg>
);

const GitHubSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const HomeSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MailSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FileSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const LeetCodeSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.37a2.386 2.386 0 0 1 0-3.413l7.983-7.733c.466-.451 1.211-.451 1.677 0l1.053 1.02a1.156 1.156 0 0 1 0 1.677l-5.636 5.46a.397.397 0 0 0 0 .57l2.844 2.755c.466.452 1.211.452 1.677 0l5.636-5.46a1.156 1.156 0 0 1 1.677 0l1.053 1.02c.466.452.466 1.183 0 1.635l-9.13 8.84zM1.986 11.238l4.51 4.37c.466.451 1.211.451 1.677 0l2.69-2.607c.466-.451.466-1.183 0-1.635L8.01 8.61c-.466-.451-1.211-.451-1.677 0L1.986 12.98c-.466.452-.466 1.183 0 1.636z" />
  </svg>
);

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'linkedin':
      return <LinkedInSvg />;
    case 'github':
      return <GitHubSvg />;
    case 'portfolio':
      return <HomeSvg />;
    case 'email':
      return <MailSvg />;
    case 'resume':
      return <FileSvg />;
    case 'leetcode':
    default:
      return <LeetCodeSvg />;
  }
};

export const Dock = () => {
  const { openWindow } = useWindowManager();

  const handleDockItemClick = (item, e) => {
    if (item.isHome) {
      e.preventDefault();
      openWindow('profile');
    } else if (item.isDownload) {
      e.preventDefault();
      openWindow('resume');
    } else {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="dock-wrapper" id="dock-system">
      <div className="dock-inner-container">
        {DOCK_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            className="dock-item"
            style={{ 
              backgroundColor: item.color,
              borderRadius: '12px',
              border: '2.5px solid var(--border-color)',
              boxShadow: '3px 3px 0px var(--border-color)',
              width: '46px',
              height: '46px'
            }}
            whileHover={{ 
              scale: 1.22, 
              y: -8,
              boxShadow: '4px 4px 0px var(--border-color)' 
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 14 
            }}
            onClick={(e) => handleDockItemClick(item, e)}
            tabIndex={0}
            role="button"
            aria-label={`Go to ${item.label}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleDockItemClick(item, e);
              }
            }}
          >
            {getIconComponent(item.icon)}
            <span className="dock-tooltip">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
