"use client";
import React, { useState, useEffect } from 'react';

const Counter = ({ fechaCounter, counterStyle }) => {
  const [targetDate, setTargetDate] = useState(new Date(fechaCounter)); // Inicializa con la fecha pasada por prop
  const [countdown, setCountdown] = useState(null);

  const calculateCountdown = () => {
    const now = new Date();
    const delta = targetDate.getTime() - now.getTime(); // Diferencia en milisegundos entre la fecha objetivo y la fecha actual

    if (delta > 0) {
      const days = Math.floor(delta / (1000 * 60 * 60 * 24)); // Días restantes
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas restantes
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)); // Minutos restantes

      return { days, hours, minutes };
    } else {
      return { days: 0, hours: 0, minutes: 0 }; // Si ya pasó la fecha
    }
  };

  useEffect(() => {
    const initialCountdown = calculateCountdown();
    setCountdown(initialCountdown);

    const interval = setInterval(() => {
      const updatedCountdown = calculateCountdown();
      setCountdown(updatedCountdown);
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [targetDate]); // Escucha cambios en la fecha objetivo

  if (countdown === null) {
    return <div className="text-center">. . .</div>;
  }

  return (
    <div>
      <div className={`text-[20px] font-bold text-center ${counterStyle} `}>
        {countdown.days ? `${countdown.days} dias ` : ''}
        {countdown.hours ? `| ${countdown.hours} horas ` : ''}
        {countdown.minutes ? `| ${countdown.minutes} minutos ` : ''}
      </div>
      <p className={`text-[15px] lg:text-[30px] font-bold text-center ${counterStyle} `}>
        {countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 ? `¡Llego el día!` : ''}
      </p>
    </div>
  );
};

export default Counter;
