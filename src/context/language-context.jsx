import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const value = {
    language,
    setLanguage,
  };

  return <LanguageContext.Provider value={value} {...props} />;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
