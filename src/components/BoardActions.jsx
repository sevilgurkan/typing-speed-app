import PropTypes from "prop-types";

import { RefreshButton } from "./RefreshButton";
import { Timer } from "./Timer";
import { TextInput } from "./TextInput";

export function BoardActions({
  inputValue,
  handleLetterAnalysis,
  status,
  onStartTyping,
  onAnswer,
  onRefresh,
  onTimeEnd,
}) {
  return (
    <div className="mt-10 flex items-center justify-center space-x-2">
      {/* Timer */}
      <Timer status={status} onTimeEnd={onTimeEnd} />

      {/* Text Input */}
      <TextInput
        status={status}
        value={inputValue}
        handleLetterAnalysis={handleLetterAnalysis}
        onAnswer={onAnswer}
        onStartTyping={onStartTyping}
      />

      {/* Refresh Button */}
      <RefreshButton onClick={onRefresh} />
    </div>
  );
}

BoardActions.propTypes = {
  inputValue: PropTypes.string,
  handleLetterAnalysis: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  onStartTyping: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
};
