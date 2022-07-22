export const isBlockedKey = (key) => {
  return [
    "Meta",
    "Alt",
    "Control",
    "Shift",
    "Backspace",
    "CapsLock",
    "Escape",
    "Tab",
    "Enter",
    "Dead",
    '"',
    "'",
    "é",
    ".",
    ",",
    "!",
    "+",
    "-",
    "_",
    "%",
    "&",
    "/",
    "(",
    ")",
    "=",
    "?",
    "*",
    "<",
    " ",
  ].includes(key);
};
