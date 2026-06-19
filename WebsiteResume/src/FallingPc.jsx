import React, { useState, useEffect, useRef, useCallback } from 'react';

function FallingImages({ imageSrc = pcImg, spawnIntervalMs = 400, maxItems = 40 }) {
  const [items, setItems] = useState([]);
  const idRef = useRef(0);
  const containerRef = useRef(null);

  const spawn = useCallback(() => {
    setItems(prev => {
      if (prev.length >= maxItems) return prev; // safety cap
      const id = idRef.current++;
      const size = Math.random() * 30 + 20;        // 20-50px
      const startX = Math.random() * 100;           // 0-100%
      const duration = Math.random() * 5 + 4;       // 4-9s
      const drift = (Math.random() * 120 - 60);     // -60 to 60px sideways
      const rotateAmount = (Math.random() * 540 + 180) * (Math.random() < 0.5 ? -1 : 1);
      const delay = Math.random() * 0.5;

      return [...prev, { id, size, startX, duration, drift, rotateAmount, delay }];
    });
  }, [maxItems]);

  useEffect(() => {
    const interval = setInterval(spawn, spawnIntervalMs);
    return () => clearInterval(interval);
  }, [spawn, spawnIntervalMs]);

  const handleAnimationEnd = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {items.map(item => (
        <img
          key={item.id}
          src={imageSrc}
          onAnimationEnd={() => handleAnimationEnd(item.id)}
          style={{
            position: 'absolute',
            top: '-60px',
            left: `${item.startX}%`,
            width: `${item.size}px`,
            height: 'auto',
            opacity: 0.8,
            '--drift': `${item.drift}px`,
            '--rotate': `${item.rotateAmount}deg`,
            animation: `fallDown ${item.duration}s linear ${item.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

export default FallingImages;