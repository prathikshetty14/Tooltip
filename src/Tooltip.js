// Import necessary dependencies from React and the CSS file
import React, { useState } from 'react';
import './Tooltip.css';

// Define the Tooltip component as a functional component
const Tooltip = ({ position, text, children }) => {

    // Use the state hook to manage the visibility of the tooltip
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
        setIsTooltipVisible(true);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setIsTooltipVisible(false);
    };

    // Render the tooltip container with event handlers
    return (
        <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isTooltipVisible && (
            <div className={`tooltip ${position}`}>{text}</div>
        )}
        {children}
        </div>
    );
};

export default Tooltip;
