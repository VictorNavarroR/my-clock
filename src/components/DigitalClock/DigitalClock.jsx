import React, { useEffect, useState } from "react";
import './DigitalClock.scss'

const Digitalclock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      }, 1000);
    }, []);
    return (
      <div className="digital-clock">
      <i class="fa-solid fa-clock"></i>
        <h2>{clockState}</h2>
      </div>
    );
}

export default Digitalclock;
