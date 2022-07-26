import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { GAME_TIME_SECOND } from "../constants";

export function Timer({ status, onTimeEnd }) {
  const [gameTime, setGameTime] = useState(GAME_TIME_SECOND);
  const intervalRef = useRef();

  const isGameStart = status === "start";
  const isGameIdle = status === "idle";

  useEffect(() => {
    if (gameTime === 0) {
      clearInterval(intervalRef.current);
      onTimeEnd();
    }
  }, [gameTime]);

  useEffect(() => {
    if (isGameStart) {
      intervalRef.current = setInterval(() => {
        setGameTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isGameStart]);

  useEffect(() => {
    if (isGameIdle) {
      setGameTime(GAME_TIME_SECOND);
    }
  }, [isGameIdle]);

  return (
    <div className="flex items-center justify-center rounded-sm bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {gameTime}
    </div>
  );
}

Timer.propTypes = {
  status: PropTypes.string.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
};
