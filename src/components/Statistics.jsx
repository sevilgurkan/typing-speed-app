import PropTypes from "prop-types";
import clsx from "clsx";

import { useTranslation } from "../i18n";

export function Statistics({ statistics, isGameEnd }) {
  const { keystrokes, corrects, wrongs, accuracy, wordsPerMinute } = statistics;
  const { language, translation } = useTranslation();

  return (
    <StatisticsList isGameEnd={isGameEnd}>
      <StatisticsItem
        value={keystrokes}
        title={translation("statistics.keystrokes")}
      />
      <StatisticsItem
        value={corrects}
        title={translation("statistics.corrects")}
      />
      <StatisticsItem value={wrongs} title={translation("statistics.wrongs")} />

      {isGameEnd && (
        <>
          <StatisticsItem
            className="flex flex-col pt-4"
            value={language === "en" ? `${accuracy}%` : `%${accuracy}`}
            title={translation("statistics.accuracy")}
          />
          <StatisticsItem
            value={wordsPerMinute}
            valueClass="text-2xl text-yellow-500"
            title={translation("statistics.words_per_minute")}
          />
        </>
      )}
    </StatisticsList>
  );
}

function StatisticsList({ children, isGameEnd }) {
  return (
    <div
      className={clsx(
        "primary-border absolute -left-44 top-0 w-40 space-y-2 rounded-md p-2 text-center shadow-lg shadow-black transition-all duration-500",
        isGameEnd && "border border-x-yellow-500 border-y-yellow-300"
      )}
    >
      {children}
    </div>
  );
}

function StatisticsItem({
  className = "flex flex-col",
  title,
  titleClass = "text-gray-500",
  value,
  valueClass,
}) {
  return (
    <div className={className}>
      <span className={titleClass}>{title}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.shape({
    keystrokes: PropTypes.number.isRequired,
    corrects: PropTypes.number.isRequired,
    wrongs: PropTypes.number.isRequired,
    accuracy: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    wordsPerMinute: PropTypes.number.isRequired,
  }),
  isGameEnd: PropTypes.bool.isRequired,
};

StatisticsItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueClass: PropTypes.string,
};
