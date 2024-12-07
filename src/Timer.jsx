import React from "react";
import { useState, useEffect } from "react";
import { Buttons } from "./buttons";

export const Timer = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isDecreasing, setIsDecreasing] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false); 

  useEffect(() => {
    let intervalId;
    if (isDecreasing) {
      intervalId = setInterval(() => {
        setCurrentTime(time => time - 1000); 
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isDecreasing]);

  const handlePause = () => {
    setIsDecreasing(false);
  };

  const handleContinue = () => {
    setIsDecreasing(true);
  };

  const handleDelete = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null;
  }

  const timeDate = new Date(currentTime);
  // const hours = timeDate.getHours();
  const minutes = timeDate.getMinutes();
  const seconds = timeDate.getSeconds();

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-300 rounded shadow-sm text-orange-700">
      <h2 className="text-lg font-semibold mb-2 text-orange-800">Timer:</h2>
      <p className="text-2xl font-bold">
        {/* {hours.toString().padStart(2, "0")}: */}
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>

      <Buttons
        onPause={handlePause}
        onContinue={handleContinue}
        onDelete={handleDelete}
      />
    </div>
  );
};
