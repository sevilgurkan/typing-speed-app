import clsx from "clsx";

export function LetterAnalysis({ analysis, isGameEnd }) {
  const { pressedKeys, currentKey } = analysis;

  return (
    <section className=" mt-8">
      {/* <h2 className="text-lg my-2">Letter Analysis</h2> */}
      <div className="flex flex-wrap">
        {Object.keys(pressedKeys).map((key) => (
          <div
            key={key}
            className={clsx(
              "flex flex-col items-center transition-colors duration-100 justify-center primary-border p-2 basis-[10%]",
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
