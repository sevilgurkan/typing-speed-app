import {
  BoardSizeIcon,
  TextSizeIcon,
  TextAlignmentIcon,
} from "./components/Icons";

// 40px height
// 8px padding
// 40px + 8px = 48px
// default board height (48 * 2) = 96px
export const GAME_TIME_SECOND = 60;
export const WORD_COL_HEIGHT = 40;
export const WORD_COL_PADDING = 8;

// Regex
export const REGEX = /[^\w\s+ıçğşüöÇİĞÖÜŞ]/gi;

// Word Classes
export const WORD_CLASSES = {
  highlight: "text-white",
  correct: "text-green-500",
  wrong: "text-red-500",
};

export const boardSizeKey = "boardSize";
export const textSizeKey = "textSize";
export const textAlignmentKey = "textAlignment";

export const ADJUSTMENT_CLASSES = {
  [boardSizeKey]: {
    narrow: "h-[100px]",
    wide: "h-[150px]",
  },
  [textAlignmentKey]: {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  },
  [textSizeKey]: {
    small: "text-xl",
    default: "text-2xl",
    big: "text-3xl",
  },
};

export const adjustmentsMenuButtons = [
  {
    name: "boardSize",
    icon: BoardSizeIcon,
    key: "boardSizeOpen",
    features: [
      {
        key: boardSizeKey,
        translationKey: "adjustments.board_size.narrow",
        value: "narrow",
      },
      {
        key: boardSizeKey,
        translationKey: "adjustments.board_size.wide",
        value: "wide",
      },
    ],
  },
  {
    name: "textAlignment",
    icon: TextAlignmentIcon,
    key: "textAlignmentOpen",
    features: [
      {
        key: textAlignmentKey,
        translationKey: "adjustments.alignments.left",
        value: "left",
      },
      {
        key: textAlignmentKey,
        translationKey: "adjustments.alignments.center",
        value: "center",
      },
      {
        key: textAlignmentKey,
        translationKey: "adjustments.alignments.right",
        value: "right",
      },
    ],
  },
  {
    name: "textSize",
    icon: TextSizeIcon,
    key: "textSizeOpen",
    features: [
      {
        key: textSizeKey,
        translationKey: "adjustments.text_size.small",
        value: "small",
      },
      {
        key: textSizeKey,
        translationKey: "adjustments.text_size.default",
        value: "default",
      },
      {
        key: textSizeKey,
        translationKey: "adjustments.text_size.big",
        value: "big",
      },
    ],
  },
];
