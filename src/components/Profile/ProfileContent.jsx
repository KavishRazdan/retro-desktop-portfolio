import React from 'react';

const RetroAvatarCircular = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#FFEAA7" />
    {/* Hair */}
    <rect x="25" y="22" width="50" height="15" fill="#444444" />
    <rect x="20" y="27" width="10" height="25" fill="#444444" />
    <rect x="70" y="27" width="10" height="25" fill="#444444" />
    {/* Face */}
    <rect x="30" y="34" width="40" height="34" fill="#FFD2A8" />
    {/* Glasses */}
    <rect x="34" y="42" width="12" height="8" fill="#222222" />
    <rect x="54" y="42" width="12" height="8" fill="#222222" />
    <rect x="46" y="45" width="8" height="3" fill="#222222" />
    {/* Eyes */}
    <rect x="37" y="45" width="5" height="3" fill="#5EAAFF" />
    <rect x="57" y="45" width="5" height="3" fill="#5EAAFF" />
    {/* Smile */}
    <path d="M44 58Q50 62 56 58" stroke="#E84118" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Shirt */}
    <path d="M22 68C22 68 30 72 50 72C70 72 78 68 78 68V100H22V68Z" fill="#717A50" />
    {/* Tie */}
    <rect x="47" y="70" width="6" height="20" fill="#FF8A00" />
  </svg>
);

export const ProfileContent = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '40px', 
        padding: '30px 10px',
        flexWrap: 'wrap',
        minHeight: '260px'
      }}
    >
      {/* Circular Profile Avatar */}
      <div 
        style={{ 
          width: '160px', 
          height: '160px', 
          borderRadius: '50%', 
          overflow: 'hidden', 
          border: '2.5px solid var(--border-color)',
          boxShadow: '3px 3px 0px var(--border-color)',
          backgroundColor: '#FFFFFF',
          flexShrink: 0
        }}
      >
        <RetroAvatarCircular />
      </div>

      {/* Profile Details Column */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px', 
          flex: '1 1 250px',
          justifyContent: 'center'
        }}
      >
        <span 
          style={{ 
            fontFamily: 'monospace', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#222' 
          }}
        >
          hi! i'm
        </span>
        
        <h2 
          style={{ 
            fontSize: 'clamp(28px, 4.5vw, 42px)', 
            fontWeight: 'bold', 
            color: 'var(--accent-orange)', 
            margin: '0', 
            lineHeight: '1.1',
            fontFamily: 'var(--font-sans)'
          }}
        >
          Md Kavish
        </h2>
        
        <p 
          style={{ 
            fontSize: '11px', 
            fontWeight: '800', 
            letterSpacing: '1.5px', 
            opacity: 0.7, 
            textTransform: 'uppercase', 
            margin: '2px 0 10px 0',
            fontFamily: 'var(--font-sans)'
          }}
        >
          I'M A FRONTEND & MOBILE DEVELOPER
        </p>

        <p 
          style={{ 
            fontStyle: 'italic', 
            fontSize: '14px', 
            lineHeight: '1.4', 
            color: '#555555', 
            fontFamily: 'Georgia, serif',
            margin: '0 0 12px 0',
            borderLeft: '2.5px solid var(--accent-orange)',
            paddingLeft: '12px'
          }}
        >
          "Meaningful designs start with intention."
        </p>
        <p 
          style={{ 
            fontSize: '13.5px', 
            lineHeight: '1.5', 
            color: '#444444', 
            margin: '0'
          }}
        >
          Results-driven <strong>Frontend & Mobile Application Developer</strong> with hands-on experience building scalable, high-performance web and mobile applications using React.js, React Native, Expo, JavaScript (ES6+), and Tailwind CSS / NativeWind. Proven track record of optimizing application performance, reducing API latency, and shipping pixel-perfect, accessible cross-platform UIs.
        </p>
      </div>
    </div>
  );
};

export default ProfileContent;
