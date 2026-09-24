import React from 'react';
import { X, Minus, Square, Copy } from 'lucide-react';

export const WindowHeader = ({ id, title, isMaximized, onMinimize, onMaximize, onClose }) => {
  return (
    <div className="window-header window-header-drag" id={`window-header-${id}`}>
      <span className="window-header-title">{title}</span>
      <div className="window-controls" style={{ display: 'flex', gap: '6px' }}>
        {onMinimize && (
          <button
            className="window-control-btn minimize"
            onClick={onMinimize}
            title="Minimize"
            aria-label="Minimize Window"
          >
            <Minus size={12} strokeWidth={3} />
          </button>
        )}
        {onMaximize && (
          <button
            className="window-control-btn maximize"
            onClick={onMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label={isMaximized ? "Restore Window" : "Maximize Window"}
          >
            {isMaximized ? <Copy size={11} strokeWidth={3} /> : <Square size={11} strokeWidth={3} />}
          </button>
        )}
        <button
          className="window-control-btn close"
          onClick={onClose}
          title="Close"
          aria-label="Close Window"
        >
          <X size={12} strokeWidth={3.5} style={{ color: '#FFFFFF' }} />
        </button>
      </div>
    </div>
  );
};

export default WindowHeader;
