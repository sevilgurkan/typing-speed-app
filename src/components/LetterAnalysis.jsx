import PropTypes from "prop-types";
import clsx from "clsx";

export function LetterAnalysis({ analysis, isGameEnd }) {
  const { pressedKeys, currentKey } = analysis;

  return (
    <section className=" mt-8">
      <div className="flex flex-wrap">
        {Object.keys(pressedKeys).map((key) => (
          <div
            key={key}
            className={clsx(
              "primary-border flex basis-[10%] flex-col items-center justify-center p-2 transition-colors duration-100",
              { "border-gray-600": currentKey === key && !isGameEnd }
            )}
          >
            <span className={clsx("text-lg")}>{key}</span>
            <span>{pressedKeys[key]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

LetterAnalysis.propTypes = {
  analysis: PropTypes.shape({
    pressedKeys: PropTypes.instanceOf(Object),
    currentKey: PropTypes.string,
  }).isRequired,
  isGameEnd: PropTypes.bool.isRequired,
};
