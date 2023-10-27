// Import necessary dependencies from React and the CSS file
import React from 'react';
import './App.css';
import Tooltip from './Tooltip';

// Define the main App component
function App() {
  return (
    <div className="app">
      {/* Header text */}
      <h1>Tooltip Example</h1>

      {/* Container for buttons */}
      <div className="button-container">
        
        {/* Top Tooltip */}
        <Tooltip position="top" text="Top Tooltip">
          <button>Hover Me (Top)</button>
        </Tooltip>

        {/* Bottom Tooltip */}
        <Tooltip position="bottom" text="Bottom Tooltip">
          <button>Hover Me (Bottom)</button>
        </Tooltip>

        {/* Left Tooltip */}
        <Tooltip position="left" text="Left Tooltip">
          <button>Hover Me (Left)</button>
        </Tooltip>

        {/* Right Tooltip */}
        <Tooltip position="right" text="Right Tooltip">
          <button>Hover Me (Right)</button>
        </Tooltip>

      </div>
    </div>
  );
}

export default App;
