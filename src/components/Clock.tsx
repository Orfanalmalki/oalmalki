
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-lg">
      <div className="text-white font-mono text-sm tracking-wider relative">
        {/* Glow effect */}
        <div className="absolute inset-0 text-green-400/50 blur-sm">
          {formatTime(time)}
        </div>
        {/* Main text */}
        <div className="relative z-10">
          {formatTime(time)}
        </div>
      </div>
    </div>
  );
};

export default Clock;
