import { GAME_TIME_SECOND } from "../constants";

export function calculateWordsPerMinute(totalCorrectsAndWrongs) {
  return totalCorrectsAndWrongs / (GAME_TIME_SECOND / 60);
}
