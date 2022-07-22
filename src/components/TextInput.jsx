import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n";

import { isBlockedKey } from "../utils";
import { REGEX } from "../constants";

export function TextInput({
  status,
  onStartTyping,
  onAnswer,
  handleLetterAnalysis,
}) {
  const [inputValue, setInputValue] = useState("");
  const [keystrokes, setKeystrokes] = useState(0);
  const [currentKey, setCurrentKey] = useState("");
  const [pressedKeys, setPressedKeys] = useState({});
  const inputRef = useRef();

  const isGameStart = status === "start";
  const isGameEnd = status === "end";
  const isGameIdle = status === "idle";

  const { translation } = useTranslation();

  const clearInput = () => setInputValue("");

  const handleOnChange = (e) => {
    if (!isGameStart) {
      console.log("started");
      onStartTyping();
    }

    const value = e.target.value;
    if (value === " ") return;

    setInputValue(value);
    setKeystrokes(keystrokes + 1);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 32 || e.key === " ") {
      clearInput();
      onAnswer(inputValue.trim());
    }

    const key = e.key;

    if (isBlockedKey(key) || key.match(REGEX)) return;

    setCurrentKey(key);

    setPressedKeys((keys) => {
      if (keys[key]) {
        return { ...keys, [key]: keys[key]++ };
      }

      return { ...keys, [key]: 1 };
    });
  };

  useEffect(() => {
    handleLetterAnalysis(
      {
        pressedKeys,
        currentKey,
      },
      keystrokes
    );
  }, [keystrokes]);

  useEffect(() => {
    if (isGameIdle) {
      setPressedKeys({});
      clearInput();
      inputRef.current.focus();
    }

    if (isGameEnd) {
      clearInput();
    }
  }, [isGameIdle, isGameEnd]);

  // focus text input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      className="outline-none shadow-sm bg-transparent text-gray-300 px-2 py-1 rounded-lg border border-gray-600 placeholder:text-center placeholder:text-sm placeholder:text-gray-500"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      disabled={isGameEnd}
      placeholder={isGameEnd ? translation("info.input_disabled") : ""}
    />
  );
}
