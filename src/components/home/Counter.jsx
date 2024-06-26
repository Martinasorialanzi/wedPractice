"use client";
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [targetDate, setTargetDate] = useState(
    // Ensure your target date is a valid future date and time
    new Date("November 2, 2024 18:00:00")
  );
  const [countdown, setCountdown] = useState(null);

  const calculateCountdown = () => {
    const now = new Date();
    const delta = targetDate.getTime() - now.getTime();

    // Handle the case where the target date has passed
    if (delta >= 0) {
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));

      return { days, hours, minutes };
    } else {
      return { days: 0, hours: 0, minutes: 0 };
    }
  };

  useEffect(() => {
    const initialCountdown = calculateCountdown();
    setCountdown(initialCountdown);

    const interval = setInterval(() => {
      const updatedCountdown = calculateCountdown();
      setCountdown(updatedCountdown);
    }, 2);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (countdown === null) {
    return <div className="text-center"> . . . </div>;
  }

  return (
    <div>
      <div className="text-[20px] font-bold text-center ">
        {countdown.days ? `${countdown.days} dias ` : ''}
        {countdown.hours ? `| ${countdown.hours} horas ` : ''}
        {countdown.minutes ? `| ${countdown.minutes} minutos ` : ''}
      </div>
      <p className="text-[15px] lg:text-[30px] font-bold text-center ">
        {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 ? `Llego el dia` : ''}
      </p>
    </div>
  );
};

export default Counter;