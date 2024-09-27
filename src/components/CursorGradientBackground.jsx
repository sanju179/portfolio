import React, { useState } from "react";

const CursorGradientBackground = () => {
  // State to track mouse position
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Function to update gradient position based on mouse movement
  const handleMouseMove = (e) => {
    // Calculate X and Y percentage relative to the viewport
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    setGradientPosition({ x, y });
  };

  return (
    <div
      className="relative h-screen w-screen"
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(255, 0, 182, 0.3), rgba(255, 255, 255, 0))`,
        transition: "background 0.1s ease"
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-5xl">Move the cursor around!</h1>
      </div>
    </div>
  );
};

export default CursorGradientBackground;
