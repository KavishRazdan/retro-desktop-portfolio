import React, { createContext, useState, useContext, useCallback } from 'react';

const WindowContext = createContext(null);

const DEFAULT_WINDOWS = {
  profile: { isOpen: false, isMinimized: false, isMaximized: false, x: 60, y: 50, width: 680, height: 500, title: 'C:\\KAVISH\\PROFILE' },
  projects: { isOpen: false, isMinimized: false, isMaximized: false, x: 100, y: 80, width: 850, height: 600, title: 'C:\\KAVISH\\PROJECTS' },
  skills: { isOpen: false, isMinimized: false, isMaximized: false, x: 140, y: 110, width: 700, height: 520, title: 'C:\\KAVISH\\SKILLS' },
  education: { isOpen: false, isMinimized: false, isMaximized: false, x: 180, y: 140, width: 600, height: 450, title: 'C:\\KAVISH\\EDUCATION' },
  experience: { isOpen: false, isMinimized: false, isMaximized: false, x: 220, y: 170, width: 650, height: 500, title: 'C:\\KAVISH\\EXPERIENCE' },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, x: 300, y: 230, width: 550, height: 480, title: 'C:\\KAVISH\\CONTACT' },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, x: 120, y: 60, width: 700, height: 650, title: 'C:\\KAVISH\\RESUME' },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, x: 80, y: 260, width: 650, height: 400, title: 'C:\\KAVISH\\TERMINAL' },
  achievements: { isOpen: false, isMinimized: false, isMaximized: false, x: 160, y: 90, width: 550, height: 450, title: 'C:\\KAVISH\\ACHIEVEMENTS' },
  funfacts: { isOpen: false, isMinimized: false, isMaximized: false, x: 200, y: 130, width: 500, height: 400, title: 'C:\\KAVISH\\FUNFACTS' },
  music: { isOpen: false, isMinimized: false, isMaximized: false, x: 280, y: 160, width: 380, height: 420, title: 'C:\\KAVISH\\NOW_PLAYING' },
  timeline: { isOpen: false, isMinimized: false, isMaximized: false, x: 160, y: 210, width: 750, height: 550, title: 'C:\\KAVISH\\TIMELINE' }
};

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState(DEFAULT_WINDOWS);
  const [windowStack, setWindowStack] = useState([]); // tracks active order (z-index)
  const [toasts, setToasts] = useState([]);

  // Toast notifier
  const showToast = useCallback((message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  // Focus helper: moves window to the top of stack
  const focusWindow = useCallback((id) => {
    setWindowStack((prev) => {
      const filtered = prev.filter((winId) => winId !== id);
      return [...filtered, id];
    });
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: false // Focus automatically unminimizes
      }
    }));
  }, []);

  // Open window
  const openWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false
      }
    }));
    focusWindow(id);
  }, [focusWindow]);

  // Close window
  const closeWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false
      }
    }));
    setWindowStack((prev) => prev.filter((winId) => winId !== id));
  }, []);

  // Minimize window
  const minimizeWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true
      }
    }));
    // Remove focus from active stack window
    setWindowStack((prev) => {
      const filtered = prev.filter((winId) => winId !== id);
      return filtered;
    });
  }, []);

  // Toggle maximize
  const maximizeWindow = useCallback((id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized
      }
    }));
    focusWindow(id);
  }, [focusWindow]);

  // Update position
  const updatePosition = useCallback((id, x, y) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        x,
        y
      }
    }));
  }, []);

  // Active window is the top of stack
  const activeWindow = windowStack[windowStack.length - 1] || null;

  return (
    <WindowContext.Provider
      value={{
        windows,
        windowStack,
        activeWindow,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updatePosition,
        toasts,
        showToast
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowProvider');
  }
  return context;
};
