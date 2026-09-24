import React from 'react';
import { WindowProvider } from './context/WindowContext';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <WindowProvider>
      <Home />
    </WindowProvider>
  );
}

export default App;
