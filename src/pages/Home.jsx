import React, { useState } from 'react';
import { useWindowManager } from '../context/WindowContext';
import { DesktopTitle } from '../components/Desktop/DesktopTitle';
import { DesktopIcon } from '../components/DesktopIcon/DesktopIcon';
import { Dock } from '../components/Dock/Dock';
import { WindowManager } from '../components/Window/WindowManager';
import { DESKTOP_ICONS } from '../utils/constants';

export const Home = () => {
  const { openWindow, toasts } = useWindowManager();
  const [selectedIconId, setSelectedIconId] = useState(null);

  const handleDesktopClick = (e) => {
    // Clear selection when clicking empty desktop area
    if (e.target.classList.contains('desktop-wrapper') || e.target.id === 'desktop-main-header') {
      setSelectedIconId(null);
    }
  };

  // Filter icons by groups
  const leftIcons = DESKTOP_ICONS.filter(icon => icon.side === 'left');
  const rightIcons = DESKTOP_ICONS.filter(icon => icon.side === 'right');
  const bonusIcons = DESKTOP_ICONS.filter(icon => icon.side === 'bonus');

  return (
    <div 
      className="desktop-wrapper" 
      onClick={handleDesktopClick}
      id="os-desktop-root"
    >
      {/* Central big background title: C:\KAVISH\PORTFOLIO */}
      <DesktopTitle />

      {/* Left Side Icon Column */}
      <div className="desktop-side-column left" id="desktop-left-icons">
        {leftIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            iconType={icon.iconType}
            selected={selectedIconId === icon.id}
            onSelect={() => setSelectedIconId(icon.id)}
            onOpen={() => {
              openWindow(icon.id);
              setSelectedIconId(null);
            }}
          />
        ))}
      </div>

      {/* Right Side Icon Column */}
      <div className="desktop-side-column right" id="desktop-right-icons">
        {rightIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            iconType={icon.iconType}
            selected={selectedIconId === icon.id}
            onSelect={() => setSelectedIconId(icon.id)}
            onOpen={() => {
              openWindow(icon.id);
              setSelectedIconId(null);
            }}
          />
        ))}
      </div>

      {/* Bottom Horizontal Bonus Apps Row */}
      <div className="desktop-bonus-row" id="desktop-bonus-icons">
        {bonusIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            iconType={icon.iconType}
            selected={selectedIconId === icon.id}
            onSelect={() => setSelectedIconId(icon.id)}
            onOpen={() => {
              openWindow(icon.id);
              setSelectedIconId(null);
            }}
          />
        ))}
      </div>

      {/* Operating System Window Coordinator */}
      <WindowManager />

      {/* Centered Horizontal Sticky Social Dock */}
      <Dock />

      {/* Retro Toast Notifications Wrapper */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast" role="alert">
            <span>💾</span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
