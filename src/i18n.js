import { useLanguage } from "./context/language-context";

function getDeepValueOfObject(obj, keys, index = 0) {
  if (Object.prototype.hasOwnProperty.call(obj, keys[index])) {
    if (obj[keys[index]] instanceof Object) {
      return getDeepValueOfObject(obj[keys[index++]], keys, index++);
    } else {
      return obj[keys[index]];
    }
  } else {
    throw new Error(`No property found with this key "${keys[index]}"`);
  }
}

const translationConfig = {
  resources: {
    en: {
      translation: {
        title: "Typing Speed Application",
        statistics: {
          keystrokes: "Keystrokes",
          corrects: "Right words",
          wrongs: "Wrong words",
          accuracy: "Accuracy",
          words_per_minute: "Words Per Minute",
        },
        info: {
          start: "Start typing to get started",
          restart: "Restart the game to play again",
          input_disabled: "disabled",
          adjustments: "You can't change settings while playing",
        },
        adjustments: {
          board_size: {
            wide: "Wide",
            narrow: "Narrow",
          },
          alignments: {
            left: "Left alignment",
            center: "Center alignment",
            right: "Right alignment",
          },
          text_size: {
            small: "Small",
            default: "Default",
            big: "Big",
          },
        },
        words: "Words",
      },
    },
    tr: {
      translation: {
        title: "Yazma Hızı Uygulaması",
        statistics: {
          keystrokes: "Tuş vuruşları",
          corrects: "Doğru kelimeler",
          wrongs: "Yanlış kelimeler",
          accuracy: "Doğruluk",
          words_per_minute: "Dakika Başına Kelime",
        },
        info: {
          start: "Başlamak için yazmaya başlayın",
          restart: "Tekrar oynamak için oyunu yeniden başlatın",
          input_disabled: "engellendi",
          adjustments: "Oynarken ayarları değiştiremezsiniz",
        },
        adjustments: {
          board_size: {
            wide: "Geniş",
            narrow: "Dar",
          },
          alignments: {
            left: "Sola hizala",
            center: "Ortaya hizala",
            right: "Sağa hizala",
          },
          text_size: {
            small: "Küçük",
            default: "Varsayılan",
            big: "Yüksek",
          },
        },
        words: "Kelime",
      },
    },
  },
};

export const LANGUAGES = {
  en: "English",
  tr: "Turkish",
};

export const useTranslation = () => {
  const { language, setLanguage } = useLanguage();

  const translationObj = translationConfig.resources[language].translation;

  /**
   * @param {string} key
   * @returns
   */
  const translation = (key) => {
    const _key = key.match(/[^ .]+/g);

    if (Array.isArray(_key)) {
      return getDeepValueOfObject(translationObj, _key);
    }

    return translationObj[_key];
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return {
    translation,
    changeLanguage,
    language,
  };
};
