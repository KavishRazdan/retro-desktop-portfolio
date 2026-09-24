import React from 'react';
import { Download, Maximize, FileText, CheckCircle } from 'lucide-react';
import { useWindowManager } from '../../context/WindowContext';

export const ResumeContent = () => {
  const { maximizeWindow, showToast } = useWindowManager();

  const handleDownload = () => {
    showToast('Download Triggered: Resume PDF fetched.');
    // In production, this can point to a real resume.pdf asset
    // We can simulate download using window.print() or opening a print sheet:
    window.print();
  };

  const handleToggleFullscreen = () => {
    maximizeWindow('resume');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      {/* Control Actions bar */}
      <div 
        style={{ 
          display: 'flex', 
          gap: '10px', 
          justifyContent: 'space-between', 
          backgroundColor: '#EAE6DB', 
          padding: '8px 12px',
          border: '2px solid var(--border-color)',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileText size={16} />
          <span style={{ fontSize: '13px', fontWeight: 'bold' }}>RESUME.PDF (PREVIEW MODE)</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={handleToggleFullscreen}
            style={{ 
              padding: '4px 8px', 
              fontSize: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px' 
            }}
          >
            <Maximize size={12} />
            Toggle Fullscreen
          </button>
          <button 
            onClick={handleDownload}
            style={{ 
              padding: '4px 8px', 
              fontSize: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px',
              backgroundColor: 'var(--accent-orange)',
              color: '#FFF',
              borderColor: 'var(--border-color)'
            }}
          >
            <Download size={12} style={{ color: '#FFF' }} />
            <span style={{ color: '#FFF' }}>Download/Print PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <div 
        style={{ 
          backgroundColor: '#FFFFFF', 
          border: '2px solid var(--border-color)',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.05)',
          padding: '40px',
          fontFamily: 'sans-serif',
          lineHeight: '1.4',
          color: '#333333',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          overflowX: 'auto'
        }}
        className="resume-sheet"
      >
        {/* Document Header */}
        <div style={{ borderBottom: '2px solid #222', paddingBottom: '16px', marginBottom: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#222', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '-0.5px' }}>
            Md Kavish
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--accent-orange)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            Frontend & Mobile Application Developer
          </p>
          <p style={{ fontSize: '12px', color: '#555' }}>
            +91 8983791881 | razdankavish67@gmail.com | linkedin.com/in/kavish-razdan | github.com/KavishRazdan
          </p>
        </div>

        {/* Technical Skills Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', borderBottom: '1.5px solid #444', paddingBottom: '4px', color: '#222', fontWeight: 'bold', marginBottom: '10px' }}>
            Technical Skills
          </h3>
          <p style={{ fontSize: '12px', color: '#444', lineHeight: '1.6' }}>
            <strong>Languages:</strong> JavaScript (ES6+), TypeScript, HTML, CSS<br />
            <strong>Frameworks & Libraries:</strong> React 19 / React.js, React Native, Expo, Zustand, TanStack Query, Redux Toolkit, Tailwind CSS, NativeWind, ReactFlow<br />
            <strong>Tools:</strong> Vite, Git, GitHub, VS Code, Chrome DevTools, Expo CLI, Android Studio, Figma<br />
            <strong>Concepts:</strong> Cross-Platform Mobile Dev, State Management, Web Workers, Responsive Design, REST APIs, DAG Validation, Performance Optimization
          </p>
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', borderBottom: '1.5px solid #444', paddingBottom: '4px', color: '#222', fontWeight: 'bold', marginBottom: '10px' }}>
            Experience
          </h3>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontSize: '13px' }}>
              <strong>Frontend Developer Intern</strong>
              <span>Summer 2024</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontStyle: 'italic', color: '#555', marginBottom: '6px' }}>
              <span>SimplifyNote</span>
              <span>Remote</span>
            </div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: '#444', lineHeight: '1.5' }}>
              <li>Engineered scalable and responsive UI components using React.js and Tailwind CSS, improving page load performance by 30%</li>
              <li>Optimized API integration and state management, reducing data-fetch latency by 25%</li>
              <li>Collaborated in an Agile environment using Git workflows, reducing UI defects by 40% across releases</li>
              <li>Enhanced cross-browser and cross-device compatibility, supporting 10+ screen sizes with consistent UX</li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', borderBottom: '1.5px solid #444', paddingBottom: '4px', color: '#222', fontWeight: 'bold', marginBottom: '10px' }}>
            Projects
          </h3>

          {/* 1. SprintDesk */}
          <div style={{ marginBottom: '14px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', flexWrap: 'wrap', gap: '4px' }}>
              <div>
                <strong>SprintDesk</strong>
                <span style={{ margin: '0 6px', color: '#888' }}>|</span>
                <span style={{ fontStyle: 'italic', color: '#555' }}>React 19, TypeScript, Zustand, TanStack Query, Tailwind CSS</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>
                <a href="https://sprintdesk-kavish.netlify.app/login" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>Live</a>
                <span style={{ margin: '0 4px', color: '#888' }}>|</span>
                <a href="https://github.com/KavishRazdan/SprintDesk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>GitHub</a>
              </div>
            </div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.5' }}>
              <li>Engineered an enterprise-grade Sprint Management SaaS dashboard with React 19, TypeScript (strict mode), and Vite, featuring authentication, Kanban board, and analytics modules</li>
              <li>Built a drag-and-drop Kanban board using dnd-kit with 4-column workflow, action-history stack, and full undo/redo support for task state changes</li>
            </ul>
          </div>

          {/* 2. VectorShift Pipeline Editor */}
          <div style={{ marginBottom: '14px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', flexWrap: 'wrap', gap: '4px' }}>
              <div>
                <strong>VectorShift Pipeline Editor</strong>
                <span style={{ margin: '0 6px', color: '#888' }}>|</span>
                <span style={{ fontStyle: 'italic', color: '#555' }}>React.js, ReactFlow, JavaScript, CSS</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>
                <a href="https://vectorshiftpipeline.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>Live</a>
                <span style={{ margin: '0 4px', color: '#888' }}>|</span>
                <a href="https://github.com/KavishRazdan/vectorshift" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>GitHub</a>
              </div>
            </div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.5' }}>
              <li>Built a client-side visual pipeline editor using ReactFlow, enabling drag-and-drop workflow creation</li>
              <li>Implemented DAG validation with DFS to prevent cycles and ensure reliable pipeline execution</li>
            </ul>
          </div>

          {/* 3. CSV Plot Studio */}
          <div style={{ fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', flexWrap: 'wrap', gap: '4px' }}>
              <div>
                <strong>CSV Plot Studio</strong>
                <span style={{ margin: '0 6px', color: '#888' }}>|</span>
                <span style={{ fontStyle: 'italic', color: '#555' }}>React 19, TypeScript, Vite, Zustand</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: '600' }}>
                <a href="https://csv-plot.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>Live</a>
                <span style={{ margin: '0 4px', color: '#888' }}>|</span>
                <a href="https://github.com/KavishRazdan/CSV-Plot-Studio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--header-bg)', textDecoration: 'underline' }}>GitHub</a>
              </div>
            </div>
            <ul style={{ paddingLeft: '18px', fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.5' }}>
              <li>Built a browser-based CSV data visualization tool supporting 8 chart types (Scatter, Line, Bar, Histogram, Box, Violin, 3D Scatter/Surface) with 100% client-side data privacy</li>
              <li>Implemented multi-threaded CSV parsing with Web Workers (PapaParse) to handle files up to 50MB and 1M+ rows without blocking the UI thread</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', borderBottom: '1.5px solid #444', paddingBottom: '4px', color: '#222', fontWeight: 'bold', marginBottom: '10px' }}>
            Education
          </h3>
          <div style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
              <span>Dr. A.P.J. Abdul Kalam University</span>
              <span>2023 -- 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#555' }}>
              <span>B.E. Computer Science</span>
              <span>Indore, India</span>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold' }}>
              <span>Dr. A.P.J. Abdul Kalam University</span>
              <span>2020 -- 2023</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#555' }}>
              <span>Diploma in Computer Science</span>
              <span>Indore, India</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeContent;
