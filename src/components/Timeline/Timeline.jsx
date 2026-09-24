import React, { useState } from 'react';
import { Calendar, Award, Star, Compass } from 'lucide-react';

const MILESTONES = [
  {
    year: '2020',
    title: 'Diploma Start & Foundation',
    description: 'Began Diploma in Computer Science at Dr. A.P.J. Abdul Kalam University, Indore. Built a strong foundation in computer networking, operating systems, and basic programming concepts.',
    bullets: [
      'Learned relational databases, computer architecture, and networking fundamentals',
      'Wrote first scripts in C and C++ to solve algorithmic puzzles',
      'Maintained strong academic record in computer systems fundamentals'
    ],
    highlight: 'Diploma in CSE Start'
  },
  {
    year: '2023',
    title: 'B.E. Computer Science & Web Dev',
    description: 'Completed Diploma and enrolled in B.E. Computer Science at Dr. A.P.J. Abdul Kalam University, Indore. Turned attention to front-end development, learning HTML, CSS, and modern JavaScript.',
    bullets: [
      'Graduated with Computer Science Diploma and joined B.E. program',
      'Mastered responsive UI design with CSS Grid, Flexbox, and fluid layouts',
      'Built modular web applications including IDR Website and E-Commerce Website'
    ],
    highlight: 'Enrolled B.E. CS'
  },
  {
    year: '2024',
    title: 'Frontend Internship & Core React',
    description: 'Joined SimplifyNote as a Frontend Developer Intern. Engineered responsive interfaces and worked in an Agile environment using Git workflows.',
    bullets: [
      'Collaborated on SimplifyNote production code using React.js & Tailwind CSS',
      'Optimized API data integrations and state management pipelines',
      'Built high-fidelity Spotify Clone mirroring desktop interfaces'
    ],
    highlight: 'SimplifyNote Internship'
  },
  {
    year: '2025',
    title: 'Advanced Graphs & Workflows',
    description: 'Explored complex visual editors and state management patterns. Built advanced visual pipeline tools using ReactFlow.',
    bullets: [
      'Created VectorShift Pipeline Editor with dynamic drag-and-drop mechanics',
      'Implemented DAG validation algorithms to prevent workflow cycles',
      'Integrated Redux Toolkit for complex state sync across application trees'
    ],
    highlight: 'VectorShift Pipeline Editor'
  },
  {
    year: '2026',
    title: 'Portfolio OS & Graduation',
    description: 'Graduating B.E. Computer Science. Synthesized frontend developer journey into a unique retro desktop experience portfolio (Kavish.OS).',
    bullets: [
      'Successfully completing B.E. degree in Computer Science at university',
      'Deployed high-performance personal portfolio site on Vercel',
      'Expanding into cross-platform mobile development with React Native & Expo',
      'Ready for full-time frontend and mobile application developer opportunities'
    ],
    highlight: 'B.E. Computer Science Graduate'
  }
];

export const Timeline = () => {
  const [activeIdx, setActiveIdx] = useState(MILESTONES.length - 1); // default to 2026

  const handleYearClick = (idx) => {
    setActiveIdx(idx);
  };

  const currentMilestone = MILESTONES[activeIdx];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Interactive Year Selector line */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          position: 'relative', 
          padding: '10px 0', 
          borderBottom: '3px solid var(--border-color)',
          marginBottom: '10px'
        }}
      >
        {/* Horizontal connecting wire */}
        <div 
          style={{ 
            position: 'absolute', 
            left: 0, 
            right: 0, 
            top: '50%', 
            height: '2px', 
            borderBottom: '2px dashed var(--border-color)',
            zIndex: 1
          }} 
        />

        {MILESTONES.map((ms, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={ms.year}
              onClick={() => handleYearClick(idx)}
              style={{
                zIndex: 2,
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isSelected ? 'var(--accent-orange)' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                borderColor: 'var(--border-color)',
                boxShadow: isSelected ? '2px 2px 0px #000' : '1px 1px 0px #AAA',
                fontWeight: 'bold',
                fontSize: '13px',
                transform: isSelected ? 'scale(1.15) translateY(-2px)' : 'none',
                transition: 'all 0.15s ease'
              }}
              aria-label={`View year ${ms.year}`}
            >
              <span style={{ color: isSelected ? '#FFF' : 'inherit' }}>
                {ms.year.slice(2)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Year index card display */}
      <div className="retro-card" style={{ backgroundColor: '#FFFFFF', margin: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', borderBottom: '2px solid var(--border-color)', paddingBottom: '8px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{currentMilestone.title}</h3>
            <span style={{ fontSize: '12px', color: '#666', fontWeight: '600' }}>YEAR LOG: {currentMilestone.year}</span>
          </div>

          <span 
            style={{ 
              fontSize: '12px', 
              fontWeight: 'bold', 
              backgroundColor: '#E0EEFF', 
              border: '1.5px solid var(--border-color)', 
              padding: '2px 8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Star size={12} />
            {currentMilestone.highlight}
          </span>
        </div>

        <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: 0.9 }}>
          {currentMilestone.description}
        </p>

        {/* Milestone bullets */}
        <div style={{ flex: 1 }}>
          <h4 style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold', color: 'var(--header-bg)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Compass size={13} />
            Core Milestones
          </h4>
          <ul style={{ paddingLeft: '18px', fontSize: '13px', lineHeight: '1.6' }}>
            {currentMilestone.bullets.map((bullet, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
