import PropTypes from "prop-types";
import clsx from "clsx";

export const WordList = ({ resource, updateWordClass, isStale, itemsRef }) => {
  const words = resource.words.read();

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

WordList.propTypes = {
  resource: PropTypes.shape({
    words: PropTypes.shape({
      read: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  updateWordClass: PropTypes.func.isRequired,
  isStale: PropTypes.bool.isRequired,
  itemsRef: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
