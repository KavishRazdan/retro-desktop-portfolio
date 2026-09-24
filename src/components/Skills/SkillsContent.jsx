import React, { useState } from 'react';
import { skills } from '../../data/skills';

const SkillAppIcon = ({ iconName }) => {
  const border = 'var(--border-color)';
  switch (iconName) {
    case 'html':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFE2D2" stroke={border} strokeWidth="2.5" />
          <path d="M12 25L7 20L12 15M28 15L33 20L28 25M17 27L23 13" stroke={border} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'css':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#D2EEFF" stroke={border} strokeWidth="2.5" />
          <rect x="8" y="10" width="24" height="6" fill="#FFFFFF" stroke={border} strokeWidth="2" />
          <circle cx="14" cy="13" r="2.5" fill="#444" />
          <rect x="8" y="22" width="24" height="6" fill="#FFFFFF" stroke={border} strokeWidth="2" />
          <circle cx="26" cy="25" r="2.5" fill="#444" />
        </svg>
      );
    case 'js':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFF2AC" stroke={border} strokeWidth="2.5" />
          <text x="20" y="26" fill="#222222" fontSize="16" fontWeight="900" fontFamily="monospace" textAnchor="middle">JS</text>
        </svg>
      );
    case 'ts':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#D2E8FF" stroke={border} strokeWidth="2.5" />
          <text x="20" y="26" fill="#007ACC" fontSize="16" fontWeight="900" fontFamily="monospace" textAnchor="middle">TS</text>
        </svg>
      );
    case 'react':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#D6F9FF" stroke={border} strokeWidth="2.5" />
          <circle cx="20" cy="20" r="4" fill="#00A8FF" />
          <ellipse cx="20" cy="20" rx="14" ry="5" stroke={border} strokeWidth="2" transform="rotate(30, 20, 20)" />
          <ellipse cx="20" cy="20" rx="14" ry="5" stroke={border} strokeWidth="2" transform="rotate(-30, 20, 20)" />
        </svg>
      );
    case 'reactnative':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E1F5FE" stroke={border} strokeWidth="2.5" />
          {/* Smartphone casing */}
          <rect x="11" y="6" width="18" height="28" rx="3" fill="#FFFFFF" stroke={border} strokeWidth="2" />
          <circle cx="20" cy="9" r="1" fill={border} />
          <line x1="17" y1="31" x2="23" y2="31" stroke={border} strokeWidth="1.5" strokeLinecap="round" />
          {/* React Native Atom inside device screen */}
          <circle cx="20" cy="20" r="2.5" fill="#00D8FF" />
          <ellipse cx="20" cy="20" rx="6" ry="2.2" stroke="#0288D1" strokeWidth="1.2" transform="rotate(30, 20, 20)" />
          <ellipse cx="20" cy="20" rx="6" ry="2.2" stroke="#0288D1" strokeWidth="1.2" transform="rotate(-30, 20, 20)" />
        </svg>
      );
    case 'expo':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#F3E8FF" stroke={border} strokeWidth="2.5" />
          <polygon points="20,9 31,29 25,29 20,19 15,29 9,29" fill="#4630EB" stroke={border} strokeWidth="1.5" />
          <circle cx="20" cy="26" r="2" fill="#FFFFFF" stroke={border} strokeWidth="1" />
        </svg>
      );
    case 'nativewind':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E0F7FA" stroke={border} strokeWidth="2.5" />
          <path d="M10 18C10 14 16 11 16 11C16 11 22 14 22 18C22 22 16 25 16 25C16 25 10 22 10 18Z" stroke={border} strokeWidth="1.5" fill="#38BDF8" />
          <path d="M18 13C18 10 23 8 23 8C23 8 28 10 28 13C28 16 23 18 23 18C23 18 18 16 18 13Z" stroke={border} strokeWidth="1.2" fill="#00D2D3" />
          <text x="20" y="32" fill="#0369A1" fontSize="8" fontWeight="900" fontFamily="monospace" textAnchor="middle">NATIVE</text>
        </svg>
      );
    case 'zustand':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFF3E0" stroke={border} strokeWidth="2.5" />
          {/* Retro Bear mascot */}
          <circle cx="14" cy="14" r="3.5" fill="#8D6E63" stroke={border} strokeWidth="1.5" />
          <circle cx="26" cy="14" r="3.5" fill="#8D6E63" stroke={border} strokeWidth="1.5" />
          <circle cx="20" cy="22" r="9" fill="#A1887F" stroke={border} strokeWidth="2" />
          <ellipse cx="20" cy="24" rx="4.5" ry="3" fill="#D7CCC8" />
          <circle cx="20" cy="23" r="1.5" fill="#3E2723" />
          <circle cx="17" cy="19" r="1" fill="#3E2723" />
          <circle cx="23" cy="19" r="1" fill="#3E2723" />
        </svg>
      );
    case 'tanstack':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFEBEB" stroke={border} strokeWidth="2.5" />
          <circle cx="20" cy="20" r="9" stroke="#FF4154" strokeWidth="2.5" fill="#FFF" />
          <path d="M15 20C15 17.2 17.2 15 20 15C22.8 15 25 17.2 25 20C25 22.8 22.8 25 20 25" stroke="#FF4154" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="2.5" fill="#FF4154" />
        </svg>
      );
    case 'redux':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFE5FF" stroke={border} strokeWidth="2.5" />
          <polygon points="20,10 28,15 28,25 20,30 12,25 12,15" stroke="#764ABC" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="3" fill="#764ABC" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E8FFE0" stroke={border} strokeWidth="2.5" />
          <path d="M12 20C12 15 20 12 20 12C20 12 28 15 28 20C28 25 20 28 20 28C20 28 12 25 12 20Z" stroke={border} strokeWidth="2" fill="#00D2D3" />
        </svg>
      );
    case 'reactflow':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFE0EF" stroke={border} strokeWidth="2.5" />
          <circle cx="14" cy="14" r="3" fill="#FF007F" stroke={border} strokeWidth="1.5" />
          <circle cx="26" cy="26" r="3" fill="#FF007F" stroke={border} strokeWidth="1.5" />
          <line x1="16" y1="16" x2="24" y2="24" stroke={border} strokeWidth="2" />
        </svg>
      );
    case 'reactrouter':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFF2F2" stroke={border} strokeWidth="2.5" />
          <path d="M11 20H29M23 14L29 20L23 26" stroke="#CA4245" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'node':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E2FAD4" stroke={border} strokeWidth="2.5" />
          <polygon points="20,7 32,14 32,26 20,33 8,26 8,14" stroke={border} strokeWidth="2.5" fill="#10AC84" />
        </svg>
      );
    case 'firebase':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFF0D2" stroke={border} strokeWidth="2.5" />
          <polygon points="20,8 32,15 20,32 8,15" stroke={border} strokeWidth="2.5" fill="#FF9F43" />
          <polygon points="20,8 26,15 20,32 14,15" stroke={border} strokeWidth="1.5" fill="#FFC048" />
        </svg>
      );
    case 'git':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFE2E2" stroke={border} strokeWidth="2.5" />
          <circle cx="15" cy="12" r="3.5" fill="#FF5E57" stroke={border} strokeWidth="1.5" />
          <circle cx="15" cy="28" r="3.5" fill="#FF5E57" stroke={border} strokeWidth="1.5" />
          <circle cx="26" cy="20" r="3.5" fill="#FF5E57" stroke={border} strokeWidth="1.5" />
          <line x1="15" y1="15.5" x2="15" y2="24.5" stroke={border} strokeWidth="2" />
          <path d="M15 20C15 20 22 20 22.5 20" stroke={border} strokeWidth="2" />
        </svg>
      );
    case 'github':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#EAEAE9" stroke={border} strokeWidth="2.5" />
          <circle cx="20" cy="20" r="11" fill="#222" stroke={border} strokeWidth="2" />
          <rect x="18" y="24" width="4" height="8" fill="#FFF" />
          <circle cx="17" cy="18" r="1.5" fill="#FFF" />
          <circle cx="23" cy="18" r="1.5" fill="#FFF" />
        </svg>
      );
    case 'expogo':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#F5F3FF" stroke={border} strokeWidth="2.5" />
          {/* Mobile device frame */}
          <rect x="11" y="6" width="18" height="28" rx="2.5" fill="#FFFFFF" stroke={border} strokeWidth="2" />
          {/* QR scanner modules */}
          <rect x="14" y="11" width="4" height="4" fill="#4630EB" />
          <rect x="22" y="11" width="4" height="4" fill="#4630EB" />
          <rect x="14" y="19" width="4" height="4" fill="#4630EB" />
          <rect x="21" y="18" width="5" height="5" fill="#10AC84" />
          <circle cx="20" cy="30" r="1" fill={border} />
        </svg>
      );
    case 'androidstudio':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E8F5E9" stroke={border} strokeWidth="2.5" />
          {/* Android head */}
          <path d="M12 23C12 17 15.5 13 20 13C24.5 13 28 17 28 23H12Z" fill="#3DDC84" stroke={border} strokeWidth="2" />
          {/* Antennas */}
          <line x1="15" y1="13.5" x2="12" y2="8" stroke={border} strokeWidth="2" strokeLinecap="round" />
          <line x1="25" y1="13.5" x2="28" y2="8" stroke={border} strokeWidth="2" strokeLinecap="round" />
          {/* Eyes */}
          <circle cx="16.5" cy="18" r="1.5" fill="#FFFFFF" />
          <circle cx="23.5" cy="18" r="1.5" fill="#FFFFFF" />
          {/* Studio bracket base */}
          <rect x="10" y="26" width="20" height="5" rx="1" fill="#2E7D32" stroke={border} strokeWidth="1.5" />
          <text x="20" y="30.5" fill="#FFFFFF" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">STUDIO</text>
        </svg>
      );
    case 'vite':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#EDE7F6" stroke={border} strokeWidth="2.5" />
          <polygon points="20,8 11,23 18,23 16,32 29,17 22,17" fill="#FFD02F" stroke={border} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case 'vscode':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E0F3FF" stroke={border} strokeWidth="2.5" />
          <path d="M8 12L28 6L32 10V30L28 34L8 28V12Z" stroke={border} strokeWidth="2" fill="#0984E3" />
          <path d="M28 6L14 20L28 34" stroke="#FFF" strokeWidth="2" />
        </svg>
      );
    case 'devtools':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#EBF3F9" stroke={border} strokeWidth="2.5" />
          <text x="20" y="25" fill="#222" fontSize="14" fontWeight="900" fontFamily="monospace" textAnchor="middle">&lt;/&gt;</text>
        </svg>
      );
    case 'figma':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFEFEF" stroke={border} strokeWidth="2.5" />
          <circle cx="15" cy="14" r="5" fill="#FF5E57" stroke={border} strokeWidth="1" />
          <circle cx="25" cy="14" r="5" fill="#FF8A00" stroke={border} strokeWidth="1" />
          <circle cx="15" cy="23" r="5" fill="#717A50" stroke={border} strokeWidth="1" />
          <circle cx="25" cy="23" r="5" fill="#10AC84" stroke={border} strokeWidth="1" />
        </svg>
      );
    case 'vercel':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#F0F0F0" stroke={border} strokeWidth="2.5" />
          <polygon points="20,12 29,28 11,28" fill="#111" />
        </svg>
      );
    case 'netlify':
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#E6FAF9" stroke={border} strokeWidth="2.5" />
          <polygon points="20,11 28,19 20,30 12,19" fill="#00AD9F" />
        </svg>
      );
    case 'concept':
    default:
      return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none">
          <rect x="3" y="3" width="34" height="34" fill="#FFFBE5" stroke={border} strokeWidth="2.5" />
          <circle cx="20" cy="18" r="6" stroke={border} strokeWidth="2" fill="#FFEAA7" />
          <line x1="20" y1="24" x2="20" y2="28" stroke={border} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export const SkillsContent = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
      {/* Category splits */}
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="retro-card" style={{ padding: '16px', backgroundColor: '#FFFFFF', margin: 0 }}>
          <h4 style={{ textTransform: 'uppercase', fontSize: '13px', color: 'var(--header-bg)', borderBottom: '2px solid var(--border-color)', paddingBottom: '6px', marginBottom: '16px', fontWeight: 'bold' }}>
            {category === 'languages' ? 'Languages' : category === 'frameworks' ? 'Frameworks & Libraries' : category === 'tools' ? 'Tools & Platforms' : 'Concepts & Core Capabilities'}
          </h4>

          {/* Grid of skill shortcuts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(78px, 1fr))', gap: '14px' }}>
            {list.map((skill) => (
              <div
                key={skill.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setHoveredSkill(skill)}
                tabIndex={0}
                aria-label={`${skill.name} level ${skill.level}%`}
                onFocus={() => setHoveredSkill(skill)}
                onBlur={() => setHoveredSkill(null)}
              >
                {/* Executable box */}
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    position: 'relative',
                    transition: 'transform 0.15s ease'
                  }}
                  className="skill-app-wrapper"
                >
                  <SkillAppIcon iconName={skill.iconName} />
                  {/* Little shortcut arrow at bottom left */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      left: '2px',
                      width: '12px',
                      height: '12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '8px',
                      fontWeight: 'bold'
                    }}
                  >
                    ↗
                  </div>
                </div>
                {/* Label */}
                <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '6px', textAlign: 'center', wordBreak: 'break-word' }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Floating retro inspector pane displaying information on hover */}
      <div 
        className="retro-card"
        style={{
          backgroundColor: '#EAE6DB',
          padding: '12px 16px',
          minHeight: '110px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px',
          borderStyle: 'dashed',
          margin: 0
        }}
      >
        {hoveredSkill ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <strong style={{ fontSize: '16px', textTransform: 'uppercase' }}>{hoveredSkill.name}</strong>
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--accent-orange)' }}>
                COMPETENCY: {hoveredSkill.level}%
              </span>
            </div>
            
            {/* Retro progress meter */}
            <div style={{ width: '100%', height: '14px', border: '2px solid var(--border-color)', backgroundColor: '#FFFFFF', padding: '1px' }}>
              <div 
                style={{ 
                  width: `${hoveredSkill.level}%`, 
                  height: '100%', 
                  backgroundColor: 'var(--header-bg)',
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px)'
                }} 
              />
            </div>
            <p style={{ fontSize: '13px', fontStyle: 'italic', opacity: 0.9, marginTop: '4px' }}>
              {hoveredSkill.desc}
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.7 }}>
            <p style={{ fontSize: '13px', fontWeight: '600' }}>
              Hover over a software icon executable above to inspect capabilities and competency level metrics.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsContent;
