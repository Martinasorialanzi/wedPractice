import React, { useState, useEffect } from 'react';
import { classNames } from '@emotion/react';

const Counter = () => {
  const [targetDate, setTargetDate] = useState(new Date('2024-06-10 18:00:00')); // Fecha y hora objetivo
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const delta = targetDate.getTime() - now.getTime();

      if (delta >= 0) {
        const days = Math.floor(delta / (1000 * 60 * 60 * 24));
        const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((delta % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={classNames('flex flex-col items-center justify-center', {
      'text-green-500': countdown.days > 0 || countdown.hours > 0 || countdown.minutes > 0 || countdown.seconds > 0,
      'text-red-500': countdown.days < 0 || countdown.hours < 0 || countdown.minutes < 0 || countdown.seconds < 0,
    })}>
      <div className="text-3xl font-bold">
        {countdown.days ? `${countdown.days}d ` : ''}
        {countdown.hours ? `${countdown.hours}h ` : ''}
        {countdown.minutes ? `${countdown.minutes}m ` : ''}
        {countdown.seconds ? `${countdown.seconds}s` : ''}
      </div>
      <span className="text-gray-500 mt-2">Tiempo restante hasta la fecha objetivo</span>
    </div>
  );
};

export default Counter;