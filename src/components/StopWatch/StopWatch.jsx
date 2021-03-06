import React, { useState, useEffect } from "react";
import './StopWatch.scss'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
  
    useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
    return (
      <div className="stopwatch">
        <h2>{time}</h2>
        <div id="buttons">
        {!timerOn && time === 0 && (
          <button className="start" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className="stop" onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className="reset" onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className="resume" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
      </div>
    );
  };
export default StopWatch;
