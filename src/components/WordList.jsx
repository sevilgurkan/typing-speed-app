import clsx from "clsx";

export const WordList = ({ resource, updateWordClass, isStale, itemsRef }) => {
  const words = resource.words.read();

  console.log(isStale);
  return (
    words &&
    words.map((word, index) => (
      <span
        ref={(element) => (itemsRef.current[index] = element)}
        key={word}
        data-id={`word_${index + 1}`}
        className={clsx("word", !isStale && updateWordClass(index))}
        style={{ opacity: isStale ? 0.3 : 1 }}
      >
        {word}
      </span>
    ))
  );
};
