import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const COMMANDS = {
  help: [
    'Available commands:',
    '  about       - Who is Md Kavish?',
    '  skills      - Core tech stack & abilities',
    '  projects    - List highlight projects',
    '  education   - Academic qualifications',
    '  contact     - Social connections & email',
    '  resume      - Get resume access link',
    '  clear       - Clear the screen buffer',
    '  help        - Display this menu'
  ],
  about: [
    'MD KAVISH - Frontend & Mobile Application Developer',
    '----------------------------------------------------------',
    'Location: New Delhi, India',
    'Core Philosophy: Bridging the gap between creative visual designs and high-performance frontend & mobile engineering.',
    'I specialize in building scalable, responsive web and mobile applications using React.js, React Native, Expo, and Tailwind CSS / NativeWind.'
  ],
  skills: [
    'Skills Matrix:',
    '  - Languages: HTML, CSS, JavaScript (ES6+), TypeScript',
    '  - Frameworks: React 19 / React.js, React Native, Expo, Zustand, TanStack Query, NativeWind, Tailwind CSS, Redux Toolkit',
    '  - Tools: Vite, Git, GitHub, VS Code, Chrome DevTools, Expo CLI, Android Studio, Figma',
    '  - Concepts: Cross-Platform Mobile Dev, State Management, Web Workers, Responsive Design, REST APIs, Performance Optimization'
  ],
  projects: [
    'Projects Portfolio:',
    '  - SprintDesk                    [React 19, TypeScript, Zustand, TanStack Query, Tailwind CSS]',
    '  - VectorShift Pipeline Editor   [React.js, ReactFlow, JavaScript, CSS]',
    '  - CSV Plot Studio               [React 19, TypeScript, Vite, Zustand, Web Workers]',
    'Type the project names in the projects explorer folder for live links.'
  ],
  education: [
    'Education History:',
    '  - B.E. Computer Science (2023 - 2026)',
    '    Dr. A.P.J. Abdul Kalam University, Indore',
    '  - Diploma in Computer Science (2020 - 2023)',
    '    Dr. A.P.J. Abdul Kalam University, Indore'
  ],
  contact: [
    'Get in touch:',
    '  - Phone: +91 8983791881',
    '  - Email: razdankavish67@gmail.com',
    '  - GitHub: github.com/KavishRazdan',
    '  - LinkedIn: linkedin.com/in/kavish-razdan'
  ],
  resume: [
    'Resume access:',
    '  - Redirecting to C:\\KAVISH\\RESUME window shortly...',
    '  - Or print/download PDF inside the Resume window'
  ]
};

export const Terminal = () => {
  const [history, setHistory] = useState([
    'KAVISH.OS [Version 1.0.0]',
    '(c) 2026 Kavish Portfolio. All rights reserved.',
    '',
    'Welcome! Type "help" to view the terminal command options.'
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const command = inputVal.trim().toLowerCase();
    
    if (!command) {
      setHistory((prev) => [...prev, '> ']);
      return;
    }

    const newHistory = [...history, `> ${inputVal}`];

    if (command === 'clear') {
      setHistory([]);
    } else if (COMMANDS[command]) {
      setHistory([...newHistory, ...COMMANDS[command]]);
    } else {
      setHistory([
        ...newHistory,
        `Command not found: "${inputVal}". Type "help" to display a list of all commands.`
      ]);
    }

    setInputVal('');
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick} id="terminal-emulator">
      <div className="terminal-history">
        {history.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {line}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>
      <form className="terminal-prompt-form" onSubmit={handleFormSubmit}>
        <span className="terminal-prompt-symbol">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="terminal-prompt-input"
          autoFocus
          aria-label="Terminal prompt input"
        />
      </form>
    </div>
  );
};

export default Terminal;
