import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 text-2xl font-bold text-hive-yellow-500">
      {count.toLocaleString()} hours
    </div>
  );
};

export default Counter;