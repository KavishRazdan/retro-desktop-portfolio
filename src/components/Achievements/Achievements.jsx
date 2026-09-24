import React from 'react';
import { Cpu, Activity, Zap, Shield } from 'lucide-react';
import { achievements } from '../../data/funfacts';

const getAchievementIcon = (idx) => {
  switch (idx) {
    case 0:
      return <Cpu size={20} />;
    case 1:
      return <Activity size={20} />;
    case 2:
      return <Zap size={20} />;
    case 3:
    default:
      return <Shield size={20} />;
  }
};

export const Achievements = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="retro-card" style={{ backgroundColor: '#EAE6DB', margin: 0, padding: '12px', fontSize: '13px' }}>
        <strong>⚙️ SYSTEM CORE STRETCH:</strong> kavish.sys performance report. Optimizations are fully active. Diagnostic data is summarized below.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {achievements.map((ach, idx) => (
          <div 
            key={idx} 
            className="retro-card" 
            style={{ 
              backgroundColor: '#FFFFFF', 
              margin: 0, 
              display: 'flex', 
              gap: '16px',
              alignItems: 'center'
            }}
          >
            {/* Metric icon */}
            <div 
              style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'var(--header-bg)', 
                color: '#FFF', 
                border: '2px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0
              }}
            >
              {React.cloneElement(getAchievementIcon(idx), { style: { color: '#FFF' } })}
            </div>

            {/* Metric labels */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold' }}>{ach.title}</h4>
                <span style={{ fontSize: '18px', fontWeight: '900', color: 'var(--accent-orange)' }}>
                  {ach.value}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: '#555', marginTop: '2px', lineHeight: '1.4' }}>
                {ach.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
