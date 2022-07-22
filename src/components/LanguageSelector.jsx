import { useLanguage } from "../context/language-context";

export function LanguageSelector({ handleSelectLanguage }) {
  const { language } = useLanguage();

  return (
    <div className="inline-block bg-[#22282a] py-1 px-2 rounded-md text-sm font-medium">
      <select
        className="bg-transparent outline-none"
        onChange={handleSelectLanguage}
        value={language}
      >
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
    </div>
  );
}
