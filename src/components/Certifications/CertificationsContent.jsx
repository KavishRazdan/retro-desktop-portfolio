import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, X } from 'lucide-react';
import { certificates } from '../../data/certificates';

export const CertificationsContent = () => {
  const [activeCert, setActiveCert] = useState(null);

  const handleOpenPreview = (cert) => {
    setActiveCert(cert);
  };

  const handleClosePreview = () => {
    setActiveCert(null);
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {/* Grid of Certifications */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '16px' 
        }}
      >
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="retro-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              backgroundColor: '#FFFFFF',
              margin: 0
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#E8FFE0', 
                  border: '2px solid var(--border-color)', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  flexShrink: 0
                }}
              >
                <Award size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{cert.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>{cert.issuer}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={12} />
                <span>Date: {cert.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={12} />
                <span style={{ fontFamily: 'monospace', opacity: 0.8 }}>ID: {cert.credentialId}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <button 
                onClick={() => handleOpenPreview(cert)}
                style={{ flex: 1, padding: '4px 8px', fontSize: '12px' }}
              >
                Preview Certificate
              </button>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  border: '2px solid var(--border-color)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '0 10px', 
                  backgroundColor: '#EAE6DB',
                  boxShadow: '2px 2px 0px var(--border-color)',
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <ExternalLink size={12} style={{ marginRight: '4px' }} />
                Verify
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Retro certificate preview modal */}
      {activeCert && (
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
          onClick={handleClosePreview}
        >
          <div 
            className="retro-card"
            style={{
              width: '100%',
              maxWidth: '480px',
              backgroundColor: '#FFFDF9',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '8px 8px 0px #222222'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                backgroundColor: 'var(--header-bg)',
                padding: '8px 16px',
                borderBottom: '2px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span style={{ color: '#FFF', fontWeight: 'bold', fontSize: '13px' }}>
                VIEWING CREDENTIAL DECREE
              </span>
              <button 
                onClick={handleClosePreview}
                style={{
                  width: '20px',
                  height: '20px',
                  padding: 0,
                  backgroundColor: '#FF5E57',
                  border: '1px solid #444',
                  boxShadow: '1px 1px 0px #444',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={10} style={{ color: '#FFF' }} />
              </button>
            </div>

            {/* Certificate content body */}
            <div 
              style={{ 
                padding: '30px', 
                textAlign: 'center', 
                border: '4px double var(--border-color)', 
                margin: '12px',
                backgroundColor: '#FFFDF9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <span style={{ fontSize: '26px' }}>🏆</span>
              <h4 style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '18px', margin: 0 }}>
                Certificate of Achievement
              </h4>
              <p style={{ fontSize: '13px', margin: 0 }}>this certifies that the candidate has successfully qualified as a</p>
              
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', borderBottom: '2px solid var(--border-color)', paddingBottom: '4px', textTransform: 'uppercase', color: 'var(--accent-orange)' }}>
                {activeCert.title}
              </h3>
              
              <p style={{ fontSize: '13px', margin: 0 }}>issued by authorization of</p>
              <strong style={{ fontSize: '15px' }}>{activeCert.issuer}</strong>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px dashed #CCC', paddingTop: '16px', marginTop: '10px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>
                  <span>DATE: {activeCert.date}</span>
                </div>
                <div>
                  <span>REF: {activeCert.credentialId}</span>
                </div>
              </div>
            </div>

            {/* Modal footer controls */}
            <div style={{ borderTop: '2px solid var(--border-color)', padding: '10px 16px', display: 'flex', justifyContent: 'flex-end', backgroundColor: '#EAE6DB' }}>
              <button onClick={handleClosePreview}>
                Dismiss Decree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsContent;
