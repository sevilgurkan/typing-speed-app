import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

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
      className="rounded-lg border border-gray-600 bg-transparent px-2 py-1 text-gray-300 shadow-sm outline-none placeholder:text-center placeholder:text-sm placeholder:text-gray-500"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
      disabled={isGameEnd}
      placeholder={isGameEnd ? translation("info.input_disabled") : ""}
    />
  );
}

TextInput.propTypes = {
  status: PropTypes.string.isRequired,
  onStartTyping: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  handleLetterAnalysis: PropTypes.func.isRequired,
};
