import React, { useState } from 'react';
import { HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { funfacts } from '../../data/funfacts';

export const FunFacts = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % funfacts.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + funfacts.length) % funfacts.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '260px' }}>
      
      {/* Decorative Help Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
        <div 
          style={{ 
            width: '36px', 
            height: '36px', 
            backgroundColor: '#FFE2E2', 
            border: '2px solid var(--border-color)', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <HelpCircle size={20} />
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Did You Know?</h3>
          <p style={{ fontSize: '12px', color: '#666' }}>System FunFacts Database v1.0</p>
        </div>
      </div>

      {/* Fact Slide Container */}
      <div 
        className="retro-card"
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
          margin: 0,
          borderStyle: 'double',
          borderWidth: '4px'
        }}
      >
        <p style={{ fontSize: '15px', lineHeight: '1.6', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          "{funfacts[currentIdx]}"
        </p>
      </div>

      {/* Navigation and progress indicator */}
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
        <span style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace', opacity: 0.8 }}>
          FACT_INDEX: {currentIdx + 1} / {funfacts.length}
        </span>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={handlePrev}
            style={{ 
              padding: '4px 10px', 
              fontSize: '13px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2px' 
            }}
            aria-label="Previous Fun Fact"
          >
            <ChevronLeft size={14} />
            Prev
          </button>
          <button 
            onClick={handleNext}
            style={{ 
              padding: '4px 10px', 
              fontSize: '13px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2px',
              backgroundColor: 'var(--header-bg)',
              color: '#FFF',
              borderColor: 'var(--border-color)'
            }}
            aria-label="Next Fun Fact"
          >
            <span style={{ color: '#FFF' }}>Next</span>
            <ChevronRight size={14} style={{ color: '#FFF' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
