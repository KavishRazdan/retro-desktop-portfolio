import React from 'react';
import { Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { education } from '../../data/education';

export const EducationContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {education.map((edu, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Main heading card */}
          <div className="retro-card" style={{ backgroundColor: '#FFFFFF', margin: 0, display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div 
              style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#FFEED2', 
                border: '2px solid var(--border-color)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              <GraduationCap size={24} />
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{edu.degree}</h3>
              <p style={{ fontSize: '15px', color: '#666', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <strong>{edu.institution}</strong> | {edu.location}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
                {edu.gpa && (
                  <span style={{ fontSize: '12px', fontWeight: 'bold', backgroundColor: 'var(--header-bg)', color: '#FFF', padding: '2px 8px', borderRadius: '2px' }}>
                    GPA: {edu.gpa}
                  </span>
                )}
                <span style={{ fontSize: '12px', fontWeight: 'bold', border: '1.5px solid var(--border-color)', padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} />
                  {edu.period}
                </span>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="retro-card" style={{ backgroundColor: '#F4FFF4', margin: 0 }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '2.5px solid var(--border-color)', paddingBottom: '6px', marginBottom: '12px', fontWeight: 'bold' }}>
              <Award size={15} />
              Academic Achievements
            </h4>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
              {edu.achievements.map((ach, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{ach}</li>
              ))}
            </ul>
          </div>

          {/* Subjects Grid */}
          <div className="retro-card" style={{ backgroundColor: '#FFFFFF', margin: 0 }}>
            <h4 style={{ textTransform: 'uppercase', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '2.5px solid var(--border-color)', paddingBottom: '6px', marginBottom: '12px', fontWeight: 'bold' }}>
              <BookOpen size={15} />
              Relevant Coursework
            </h4>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
                gap: '8px' 
              }}
            >
              {edu.courses.map((course, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '6px 12px', 
                    backgroundColor: '#F3F0E5', 
                    border: '1.5px solid var(--border-color)', 
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  ■ {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationContent;
