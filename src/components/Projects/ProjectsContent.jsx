import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const GithubIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#222" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const VsCodeIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M8 12L28 6L32 10V30L28 34L8 28V12Z" stroke="#0984E3" strokeWidth="3" fill="#E0F3FF" />
    <path d="M28 6L14 20L28 34" stroke="#0984E3" strokeWidth="2.5" />
  </svg>
);

const FigmaIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <circle cx="15" cy="14" r="5" fill="#FF5E57" />
    <circle cx="25" cy="14" r="5" fill="#FF8A00" />
    <circle cx="15" cy="23" r="5" fill="#717A50" />
    <circle cx="25" cy="23" r="5" fill="#10AC84" />
  </svg>
);

const ReactIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="4" fill="#00A8FF" />
    <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#444" strokeWidth="2" transform="rotate(30, 20, 20)" />
    <ellipse cx="20" cy="20" rx="14" ry="5" stroke="#444" strokeWidth="2" transform="rotate(-30, 20, 20)" />
  </svg>
);

const HtmlIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M12 25L7 20L12 15M28 15L33 20L28 25M17 27L23 13" stroke="#FF8A00" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CssIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="12" width="24" height="6" fill="#FFFFFF" stroke="#00A8FF" strokeWidth="2.5" />
    <circle cx="14" cy="15" r="2.5" fill="#444" />
    <rect x="8" y="22" width="24" height="6" fill="#FFFFFF" stroke="#00A8FF" strokeWidth="2.5" />
    <circle cx="26" cy="25" r="2.5" fill="#444" />
  </svg>
);

const JsIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <text x="20" y="26" fill="#222222" fontSize="16" fontWeight="900" fontFamily="monospace" textAnchor="middle">JS</text>
  </svg>
);

const TailwindIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M12 20C12 15 20 12 20 12C20 12 28 15 28 20C28 25 20 28 20 28C20 28 12 25 12 20Z" stroke="#444" strokeWidth="2.5" fill="#00D2D3" />
  </svg>
);

const ReactNativeIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <rect x="11" y="6" width="18" height="28" rx="3" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
    <circle cx="20" cy="9" r="1" fill="#333" />
    <line x1="17" y1="31" x2="23" y2="31" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="20" r="2.5" fill="#00D8FF" />
    <ellipse cx="20" cy="20" rx="6" ry="2.2" stroke="#0288D1" strokeWidth="1.2" transform="rotate(30, 20, 20)" />
    <ellipse cx="20" cy="20" rx="6" ry="2.2" stroke="#0288D1" strokeWidth="1.2" transform="rotate(-30, 20, 20)" />
  </svg>
);

const ExpoIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <polygon points="20,9 31,29 25,29 20,19 15,29 9,29" fill="#4630EB" stroke="#333" strokeWidth="1.5" />
    <circle cx="20" cy="26" r="2" fill="#FFFFFF" stroke="#333" strokeWidth="1" />
  </svg>
);

const AndroidStudioIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M12 23C12 17 15.5 13 20 13C24.5 13 28 17 28 23H12Z" fill="#3DDC84" stroke="#333" strokeWidth="1.8" />
    <line x1="15" y1="13.5" x2="12" y2="8" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="25" y1="13.5" x2="28" y2="8" stroke="#333" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16.5" cy="18" r="1.5" fill="#FFFFFF" />
    <circle cx="23.5" cy="18" r="1.5" fill="#FFFFFF" />
    <rect x="10" y="26" width="20" height="5" rx="1" fill="#2E7D32" stroke="#333" strokeWidth="1.2" />
  </svg>
);

const NativeWindIconSvg = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
    <path d="M10 18C10 14 16 11 16 11C16 11 22 14 22 18C22 22 16 25 16 25C16 25 10 22 10 18Z" stroke="#333" strokeWidth="1.5" fill="#38BDF8" />
    <path d="M18 13C18 10 23 8 23 8C23 8 28 10 28 13C28 16 23 18 23 18C23 18 18 16 18 13Z" stroke="#333" strokeWidth="1.2" fill="#00D2D3" />
    <text x="20" y="32" fill="#0369A1" fontSize="7" fontWeight="900" fontFamily="monospace" textAnchor="middle">NW</text>
  </svg>
);

const TOOLS_LIST = [
  { name: 'GitHub', color: '#EAEAE9', icon: <GithubIconSvg /> },
  { name: 'VS Code', color: '#E0F3FF', icon: <VsCodeIconSvg /> },
  { name: 'Figma', color: '#FFEFEF', icon: <FigmaIconSvg /> },
  { name: 'React', color: '#D6F9FF', icon: <ReactIconSvg /> },
  { name: 'React Native', color: '#E1F5FE', icon: <ReactNativeIconSvg /> },
  { name: 'Expo', color: '#F3E8FF', icon: <ExpoIconSvg /> },
  { name: 'Android Studio', color: '#E8F5E9', icon: <AndroidStudioIconSvg /> },
  { name: 'NativeWind', color: '#E0F7FA', icon: <NativeWindIconSvg /> },
  { name: 'HTML5', color: '#FFE2D2', icon: <HtmlIconSvg /> },
  { name: 'CSS3', color: '#D2EEFF', icon: <CssIconSvg /> },
  { name: 'JavaScript', color: '#FFF2AC', icon: <JsIconSvg /> },
  { name: 'Tailwind CSS', color: '#E8FFE0', icon: <TailwindIconSvg /> }
];

export const ProjectsContent = () => {
  const [activeTab, setActiveTab] = useState('tools'); // 'tools' or 'projects'
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Top Orange Header Accent Bar */}
      <div 
        style={{ 
          height: '14px', 
          backgroundColor: '#FF8A00', 
          border: '2px solid var(--border-color)', 
          marginBottom: '16px',
          flexShrink: 0
        }} 
      />

      {/* Retro Tab Selector Bar */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '16px', 
          borderBottom: '2px dashed var(--border-color)', 
          paddingBottom: '8px',
          flexShrink: 0 
        }}
      >
        <button
          onClick={() => setActiveTab('tools')}
          style={{
            padding: '4px 12px',
            fontSize: '12px',
            backgroundColor: activeTab === 'tools' ? 'var(--header-bg)' : '#EAE6DB',
            color: activeTab === 'tools' ? '#FFF' : '#222',
            borderColor: 'var(--border-color)',
            boxShadow: activeTab === 'tools' ? 'inset 2px 2px 0px rgba(0,0,0,0.2)' : '2px 2px 0px var(--border-color)'
          }}
        >
          <span style={{ color: activeTab === 'tools' ? '#FFF' : '#222' }}>🛠️ TOOLS</span>
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          style={{
            padding: '4px 12px',
            fontSize: '12px',
            backgroundColor: activeTab === 'projects' ? 'var(--header-bg)' : '#EAE6DB',
            color: activeTab === 'projects' ? '#FFF' : '#222',
            borderColor: 'var(--border-color)',
            boxShadow: activeTab === 'projects' ? 'inset 2px 2px 0px rgba(0,0,0,0.2)' : '2px 2px 0px var(--border-color)'
          }}
        >
          <span style={{ color: activeTab === 'projects' ? '#FFF' : '#222' }}>📂 PROJECTS</span>
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {activeTab === 'tools' ? (
          <div>
            {/* Center title Caption */}
            <h3 
              style={{ 
                textTransform: 'uppercase', 
                fontSize: '16px', 
                letterSpacing: '2px', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '28px',
                color: 'var(--border-color)'
              }}
            >
              TOOLS
            </h3>

            {/* 4x3 circular tools icons grid */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(68px, 1fr))', 
                gap: '20px 12px', 
                maxWidth: '460px', 
                margin: '0 auto 20px auto'
              }}
            >
              {TOOLS_LIST.map((tool) => (
                <div 
                  key={tool.name}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  title={`${tool.name} tool`}
                >
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid var(--border-color)',
                      boxShadow: '2.5px 2.5px 0px var(--border-color)',
                      backgroundColor: tool.color,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'transform 0.15s'
                    }}
                    className="tools-circle"
                  >
                    {tool.icon}
                  </div>
                  <span 
                    style={{ 
                      fontSize: '10px', 
                      fontWeight: '800', 
                      marginTop: '6px', 
                      fontFamily: 'monospace',
                      textAlign: 'center',
                      color: '#444'
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Projects grid */
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '16px' 
            }}
          >
            {projects.map((proj) => (
              <div 
                key={proj.id} 
                className="retro-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  margin: 0
                }}
              >
                <div style={{ padding: '4px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--accent-orange)' }}>
                    {proj.status}
                  </span>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '2px' }}>{proj.title}</h4>
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '4px', lineClamp: '3', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {proj.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <button 
                      onClick={() => handleOpenDetails(proj)}
                      style={{ flex: 1, padding: '3px 8px', fontSize: '11px' }}
                    >
                      Details
                    </button>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        border: '2px solid var(--border-color)', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        padding: '0 8px',
                        backgroundColor: '#EAE6DB',
                        boxShadow: '1.5px 1.5px 0px var(--border-color)',
                        textDecoration: 'none',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details retro modal overlay */}
      {selectedProject && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(34,34,34,0.4)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 100
          }}
          onClick={handleCloseDetails}
        >
          <div 
            className="retro-card"
            style={{
              width: '100%',
              maxWidth: '480px',
              backgroundColor: '#F9F8F3',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '6px 6px 0px #222222',
              maxHeight: '100%',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                backgroundColor: 'var(--header-bg)',
                padding: '6px 12px',
                borderBottom: '2px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace' }}>
                INFO: {selectedProject.title.toUpperCase()}
              </span>
              <button 
                onClick={handleCloseDetails}
                style={{
                  width: '18px',
                  height: '18px',
                  padding: 0,
                  backgroundColor: '#FF5E57',
                  border: '1.5px solid #444',
                  boxShadow: '1px 1px 0px #444',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={8} style={{ color: '#FFF' }} />
              </button>
            </div>

            {/* Modal content body */}
            <div style={{ padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: 'min(300px, 45vh)' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '2px' }}>{selectedProject.title}</h4>
                <span style={{ fontSize: '10px', color: 'var(--accent-orange)', fontWeight: 'bold' }}>
                  {selectedProject.status}
                </span>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '1.4' }}>
                {selectedProject.extendedDescription}
              </p>
              <div>
                <h5 style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Features</h5>
                <ul style={{ paddingLeft: '16px', fontSize: '12px', lineHeight: '1.5' }}>
                  {selectedProject.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal footer controls */}
            <div style={{ borderTop: '2px solid var(--border-color)', padding: '10px 12px', display: 'flex', gap: '8px', justifyContent: 'flex-end', backgroundColor: '#EAE6DB' }}>
              <a 
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  border: '2px solid var(--border-color)',
                  padding: '4px 10px',
                  backgroundColor: '#FFF',
                  fontWeight: 'bold',
                  fontSize: '11px',
                  boxShadow: '2.5px 2.5px 0px var(--border-color)'
                }}
              >
                Code
              </a>
              <button 
                onClick={() => {
                  window.open(selectedProject.demo, '_blank');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'var(--accent-orange)',
                  color: '#FFF',
                  borderColor: 'var(--border-color)',
                  boxShadow: '2.5px 2.5px 0px var(--border-color)',
                  padding: '4px 10px',
                  fontSize: '11px'
                }}
              >
                <ExternalLink size={11} style={{ color: '#FFF' }} />
                <span style={{ color: '#FFF' }}>Launch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsContent;
