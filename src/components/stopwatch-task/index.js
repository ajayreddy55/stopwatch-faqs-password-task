import { useState, useEffect } from "react";
import "./index.css";

const StopWatch = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isTimerRunning) {
      timerId = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isTimerRunning, totalSeconds]);

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTotalSeconds(0);
  };

  const getMinutes = () => {
    return Math.floor(totalSeconds / 60);
  };

  const getSeconds = () => {
    return totalSeconds % 60;
  };

  const minutes = getMinutes();
  const seconds = getSeconds();

  const minutesToDisplay = minutes < 10 ? "0" + minutes : minutes;
  const secondsToDisplay = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className="stopwatch-bg-container">
      <div className="stopwatch-main-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="d-flex align-items-center justify-content-center mt-3 mb-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <h2 className="stopwatch-timer-heading">Timer</h2>
          </div>
          <h1 className="stopwatch-timer">
            {minutesToDisplay}:{secondsToDisplay}
          </h1>
          <div className="d-flex align-items-center justify-content-around mt-3 mb-3">
            <button
              type="button"
              className="btn btn-success"
              onClick={startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
