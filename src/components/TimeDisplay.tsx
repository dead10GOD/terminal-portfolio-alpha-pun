
import React, { useState, useEffect } from 'react';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="absolute top-4 right-4 text-right">
      <div className="text-cyan-400 text-sm">{formatDate(currentTime)}</div>
      <div className="text-yellow-400 text-lg font-bold">{formatTime(currentTime)}</div>
    </div>
  );
};

export default TimeDisplay;
