import React from 'react';
import { Calendar, Briefcase, GitPullRequest, Laptop, Heart } from 'lucide-react';
import { experience } from '../../data/experience';

const getExperienceIcon = (type) => {
  switch (type) {
    case 'Internship':
      return <Briefcase size={16} />;
    case 'Open Source':
      return <GitPullRequest size={16} />;
    case 'Freelance':
      return <Laptop size={16} />;
    case 'Volunteer Work':
    default:
      return <Heart size={16} />;
  }
};

const getExperienceColor = (type) => {
  switch (type) {
    case 'Internship':
      return '#E0EEFF'; // Light blue
    case 'Open Source':
      return '#F4FFF4'; // Light green
    case 'Freelance':
      return '#FFEED2'; // Light yellow
    case 'Volunteer Work':
    default:
      return '#FFE2E2'; // Light red
  }
};

export const ExperienceContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '14px', position: 'relative' }}>
      {/* Timeline spine */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '8px', 
          bottom: '8px', 
          left: '5px', 
          width: '3px', 
          backgroundColor: 'var(--border-color)',
          borderStyle: 'dashed'
        }} 
      />

      {experience.map((exp, idx) => (
        <div key={idx} style={{ position: 'relative', display: 'flex', gap: '16px' }}>
          {/* Node dot on timeline */}
          <div 
            style={{ 
              width: '13px', 
              height: '13px', 
              borderRadius: '50%', 
              backgroundColor: '#FFFFFF', 
              border: '3px solid var(--border-color)',
              position: 'absolute',
              left: '0px',
              top: '8px',
              zIndex: 2
            }} 
          />

          {/* Experience card contents */}
          <div 
            className="retro-card" 
            style={{ 
              flex: 1, 
              marginLeft: '16px', 
              backgroundColor: '#FFFFFF',
              margin: 0,
              padding: '16px'
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{exp.role}</h3>
                <span style={{ fontSize: '14px', color: '#666', fontWeight: '600' }}>
                  {exp.company}
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span 
                  style={{ 
                    fontSize: '11px', 
                    fontWeight: 'bold', 
                    padding: '2px 8px', 
                    border: '1.5px solid var(--border-color)',
                    backgroundColor: getExperienceColor(exp.type),
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {getExperienceIcon(exp.type)}
                  {exp.type}
                </span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', border: '1.5px solid var(--border-color)', padding: '2px 8px', backgroundColor: '#F3F0E5', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={11} />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '13px', lineHeight: '1.5', marginBottom: '10px', opacity: 0.9 }}>
              {exp.description}
            </p>

            {/* Bullet points */}
            <ul style={{ paddingLeft: '18px', fontSize: '13px', lineHeight: '1.5' }}>
              {exp.bulletPoints.map((bp, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{bp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
