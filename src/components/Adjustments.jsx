import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { useTranslation } from "../i18n";
import { useLocalStorage } from "../hooks/useLocalStorage";

import {
  boardSizeKey,
  textAlignmentKey,
  textSizeKey,
  ADJUSTMENT_CLASSES,
  adjustmentsMenuButtons,
} from "../constants";

function updatePropAndReturnNewObject(obj, updateKey) {
  let newObj = { ...obj };

  for (const k in obj) {
    if (k === updateKey) {
      newObj = {
        ...newObj,
        [updateKey]: !obj[updateKey],
      };
    } else {
      newObj = {
        ...newObj,
        [k]: false,
      };
    }
  }

  return newObj;
}

export function Adjustments({ canAdjust, onAdjustmentChange }) {
  const { translation } = useTranslation();

  const [gameAdjustments, setGameAdjustments] = useLocalStorage(
    "game-adjustments",
    {
      [boardSizeKey]: ADJUSTMENT_CLASSES[boardSizeKey].narrow,
      [textAlignmentKey]: ADJUSTMENT_CLASSES[textAlignmentKey].left,
      [textSizeKey]: ADJUSTMENT_CLASSES[textSizeKey].default,
    }
  );

  const [gameAdjustmentMenus, setGameAdjustmentMenus] = useState({
    boardSizeOpen: false,
    textSizeOpen: false,
    textAlignmentOpen: false,
  });

  /**
   * @param {String} key key should be "boardSizeOpen" or "textSizeOpen"
   * or "textAlignmentOpen"
   */
  const menuButtonHandler = (key) => {
    setGameAdjustmentMenus(() =>
      updatePropAndReturnNewObject(gameAdjustmentMenus, key)
    );
  };

  /**
   *
   * @param {String} type type should be "boardSize" or "textSize" or "textAlignment"
   * @param {String} value value must be a property of the gameAdjustments[type] object
   * @returns
   */
  const gameAdjustmentsHandler = (type, value) => {
    // block the interaction if it is during the game.
    if (!canAdjust) return;

    setGameAdjustments((adjustments) => ({
      ...adjustments,
      [type]: ADJUSTMENT_CLASSES[type][value],
    }));

    // Close the menu after selecting
    setGameAdjustmentMenus((adjustments) => ({
      ...adjustments,
      boardSizeOpen: false,
      textSizeOpen: false,
      textAlignmentOpen: false,
    }));
  };

  // update "adjustments" variable in "app" component when adjustments change
  useEffect(() => {
    onAdjustmentChange(gameAdjustments);
  }, [gameAdjustments]);

  return (
    <div className="primary-border absolute -right-44 top-0 flex w-40 flex-col overflow-hidden rounded-md text-center shadow-lg shadow-black">
      <div
        className={`flex items-center justify-around p-2 ${
          !canAdjust && "pointer-events-none"
        }`}
      >
        {adjustmentsMenuButtons.map((btn) => (
          <button key={btn.name} onClick={() => menuButtonHandler(btn.key)}>
            <btn.icon />
          </button>
        ))}
      </div>

      {adjustmentsMenuButtons.map((btn) =>
        btn.features.map((feature) => (
          <div
            key={feature.value}
            className={clsx("flex-col py-2 text-center text-sm", {
              flex: gameAdjustmentMenus[btn.key],
              hidden: !gameAdjustmentMenus[btn.key],
            })}
          >
            <button
              onClick={() => gameAdjustmentsHandler(feature.key, feature.value)}
            >
              {translation(feature.translationKey)}
            </button>
          </div>
        ))
      )}
      {!canAdjust && (
        <span className="py-2 text-sm text-gray-600">
          {translation("info.adjustments")}
        </span>
      )}
    </div>
  );
}

Adjustments.propTypes = {
  canAdjust: PropTypes.bool,
  onAdjustmentChange: PropTypes.func,
};
