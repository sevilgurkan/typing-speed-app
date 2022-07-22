import PropTypes from "prop-types";

import { useTranslation } from "../i18n";

const wordCounts = ["200", "400", "600", "800", "1000"];

export function WordCountSelector({ amount, handleSelectWordAmount }) {
  const { translation } = useTranslation();

  return (
    <div className="ml-1 inline-block rounded-md bg-[#22282a] py-1 px-2 text-sm font-medium">
      <select
        className="bg-transparent outline-none"
        onChange={handleSelectWordAmount}
        value={amount}
      >
        {wordCounts.map((count) => (
          <option key={count} value={count}>
            {count}&nbsp;{translation("words")}
          </option>
        ))}
      </select>
    </div>
  );
}

WordCountSelector.propTypes = {
  amount: PropTypes.string.isRequired,
  handleSelectWordAmount: PropTypes.func.isRequired,
};
