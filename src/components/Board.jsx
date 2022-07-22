import { useDeferredValue } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { WORD_CLASSES } from "../constants";

import { WordList } from "./WordList";

export function Board({
  resource,
  gameAdjustments,
  boardOffsetTop,
  wordsRef,
  currentIndex,
  results,
}) {
  const deferredResource = useDeferredValue(resource);

  const isStale = deferredResource !== resource;

  const updateWordClass = (wordIndex) => {
    if (wordIndex > currentIndex) return;

    if (wordIndex !== currentIndex && wordIndex < currentIndex) {
      if (results.has(wordIndex)) {
        return WORD_CLASSES[results.get(wordIndex)];
      }
    }

    return WORD_CLASSES["highlight"];
  };

  return (
    <div
      className={clsx(
        "my-4 overflow-hidden p-2 transition-transform",
        gameAdjustments.boardSize
      )}
    >
      <div
        className={clsx(
          "relative flex flex-wrap gap-2",
          gameAdjustments.textAlignment,
          gameAdjustments.textSize
        )}
        style={{
          top: `-${boardOffsetTop}px`,
        }}
      >
        <WordList
          resource={deferredResource}
          isStale={isStale}
          updateWordClass={updateWordClass}
          itemsRef={wordsRef}
        />
      </div>
    </div>
  );
}

Board.propTypes = {
  resource: PropTypes.shape({
    words: PropTypes.shape({ read: PropTypes.func }),
  }),
  gameAdjustments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      boardSize: PropTypes.string,
      textAlignment: PropTypes.string,
      textSize: PropTypes.string,
    }),
  ]),
  boardOffsetTop: PropTypes.number,
  wordsRef: PropTypes.object,
  currentIndex: PropTypes.number,
  results: PropTypes.instanceOf(Map),
};
