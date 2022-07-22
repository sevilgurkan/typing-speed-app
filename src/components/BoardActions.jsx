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
    <div className="flex items-center justify-center space-x-2 mt-10">
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
