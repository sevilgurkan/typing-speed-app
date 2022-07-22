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
        "primary-border absolute space-y-2 -left-44 top-0 shadow-lg transition-all duration-500 shadow-black p-2 rounded-md text-center w-40",
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
