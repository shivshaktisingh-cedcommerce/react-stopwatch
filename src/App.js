import React, { useState, useEffect } from "react";
import './App.css';

const App=()=> {
      const [time, setTime] = useState(0);
      const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch"><center>
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button id="start" onClick={() => setRunning(true)}>Start</button>
          <button id="stop" onClick={() => setRunning(false)}>Stop</button>
          <button id="reset" onClick={() => setTime(0)}>Reset</button>       
        </div>
      </center></div>
    );
  };
    

  

export default App;
