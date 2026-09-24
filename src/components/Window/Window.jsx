import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowManager } from '../../context/WindowContext';
import { useDrag } from '../../hooks/useDrag';
import { WindowHeader } from './WindowHeader';

export const Window = ({ id, children }) => {
  const { 
    windows, 
    windowStack, 
    activeWindow,
    closeWindow, 
    minimizeWindow, 
    maximizeWindow, 
    focusWindow 
  } = useWindowManager();

  const win = windows[id];
  const dragProps = useDrag(id);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Check window resizing for mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!win || !win.isOpen) {
    return null;
  }

  if (isMobile && win.isMinimized) {
    return null;
  }

  // Calculate dynamic z-index
  const stackIndex = windowStack.indexOf(id);
  const zIndex = 10 + (stackIndex !== -1 ? stackIndex : 0);
  const isActive = activeWindow === id;

  // Header handlers
  const handleMinimize = (e) => {
    e.stopPropagation();
    minimizeWindow(id);
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    maximizeWindow(id);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    closeWindow(id);
  };

  const handleMouseDown = () => {
    focusWindow(id);
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeWindow(id);
    }
  };

  // Framer Motion Animation Configurations
  const desktopVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: win.y + 30,
      x: win.x
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: win.y,
      x: win.x,
      transition: { 
        type: 'spring', 
        stiffness: 280, 
        damping: 22 
      }
    },
    minimized: {
      opacity: 0,
      scale: 0.3,
      y: window.innerHeight - 50,
      x: window.innerWidth / 2 - (win.width / 2),
      transition: {
        duration: 0.22,
        ease: 'easeIn'
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.18,
        ease: 'easeOut'
      }
    }
  };

  const mobileVariants = {
    hidden: { y: '100%' },
    visible: { 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 25 
      }
    },
    exit: { 
      y: '100%', 
      transition: { 
        duration: 0.2 
      }
    }
  };

  if (isMobile) {
    return (
      <div 
        className="mobile-window-overlay"
        onClick={handleClose}
        id={`mobile-overlay-${id}`}
      >
        <motion.div
          className="mobile-window-sheet"
          variants={mobileVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby={`window-title-${id}`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <WindowHeader
            id={id}
            title={win.title}
            onClose={handleClose}
          />
          <div className="window-scrollable-content">
            {children}
          </div>
        </motion.div>
      </div>
    );
  }

  // Desktop Window Render
  return (
    <motion.div
      className={`retro-window ${win.isMaximized ? 'maximized' : ''} ${win.isMinimized ? 'minimized' : ''} ${isActive ? 'active-window' : ''}`}
      style={{
        zIndex,
        width: win.isMaximized ? '100vw' : `min(${win.width}px, calc(100vw - 24px))`,
        height: win.isMaximized ? 'calc(100vh - 90px)' : `min(${win.height}px, calc(100vh - 120px))`,
        maxWidth: 'calc(100vw - 24px)',
        maxHeight: win.isMaximized ? 'calc(100vh - 90px)' : 'calc(100vh - 120px)',
        // For dragging, we let Framer Motion handle coordinates via 'animate' properties
        boxShadow: isActive ? '6px 6px 0px #444444' : '4px 4px 0px #444444',
        pointerEvents: win.isMinimized ? 'none' : 'auto'
      }}
      variants={desktopVariants}
      initial="hidden"
      animate={win.isMinimized ? 'minimized' : 'visible'}
      exit="exit"
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-labelledby={`window-title-${id}`}
      tabIndex={0}
      {...dragProps} // Binds the custom useDrag event mouse listener
    >
      <WindowHeader
        id={id}
        title={win.title}
        isMaximized={win.isMaximized}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        onClose={handleClose}
      />
      <div className="window-scrollable-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
