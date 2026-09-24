import { useCallback } from 'react';
import { useWindowManager } from './useWindowManager';

export const useDrag = (id) => {
  const { updatePosition, focusWindow, windows } = useWindowManager();
  const win = windows[id];

  const handleMouseDown = useCallback((e) => {
    // Only drag with left click
    if (e.button !== 0) return;
    
    // Check if clicked element or parent is drag handle
    const isDragHandle = e.target.closest('.window-header-drag');
    if (!isDragHandle) return;

    // Skip drag if user clicked interactive buttons inside header
    if (e.target.closest('.window-control-btn')) return;

    e.preventDefault();
    focusWindow(id);

    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = win.x;
    const initialY = win.y;

    // Add overlay to avoid iframe cursor loss
    const overlay = document.createElement('div');
    overlay.className = 'dragging-overlay';
    document.body.appendChild(overlay);

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      
      let newX = initialX + deltaX;
      let newY = initialY + deltaY;

      // Constrain position (keep at least a portion of the window on screen)
      const minX = 10;
      const maxX = window.innerWidth - 100;
      const minY = 0;
      const maxY = window.innerHeight - 100;

      newX = Math.max(minX - (win.width / 2), Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      updatePosition(id, newX, newY);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [id, win, focusWindow, updatePosition]);

  const handleTouchStart = useCallback((e) => {
    // Only handle single finger drag
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];

    const isDragHandle = e.target.closest('.window-header-drag');
    if (!isDragHandle) return;

    if (e.target.closest('.window-control-btn')) return;

    focusWindow(id);

    const startX = touch.clientX;
    const startY = touch.clientY;
    const initialX = win.x;
    const initialY = win.y;

    const handleTouchMove = (moveEvent) => {
      if (moveEvent.touches.length !== 1) return;
      const moveTouch = moveEvent.touches[0];
      const deltaX = moveTouch.clientX - startX;
      const deltaY = moveTouch.clientY - startY;

      let newX = initialX + deltaX;
      let newY = initialY + deltaY;

      const minX = 10;
      const maxX = window.innerWidth - 100;
      const minY = 0;
      const maxY = window.innerHeight - 100;

      newX = Math.max(minX - (win.width / 2), Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));

      updatePosition(id, newX, newY);
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
  }, [id, win, focusWindow, updatePosition]);

  return { onMouseDown: handleMouseDown, onTouchStart: handleTouchStart };
};

export default useDrag;
