import { useDeferredValue } from "react";
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
        "p-2 my-4 overflow-hidden transition-transform",
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
