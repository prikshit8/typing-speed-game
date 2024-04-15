import React, { useEffect, useState } from "react";

const Timer = ({ startCounting, correctWords }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);
  const minutes = timeElapsed / 60;
  return (
    <>
      <p>Time: {timeElapsed}</p>
      <p>Speed: {correctWords / minutes || 0}</p>
    </>
  );
};

export default Timer;
