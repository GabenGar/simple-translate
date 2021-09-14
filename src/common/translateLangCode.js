import browser from "webextension-polyfill";

const populateLangCodes = () => {
  /**
   * @type {{ [code: string]: string }}
   */
  const langCodes = {};
  const langListText = browser.i18n.getMessage("langList").split(", ");

  langListText.forEach((lang) => {
    const [code, name] = lang.split(":");
    langCodes[code] = name;
  });

  return langCodes;
};

const langCodes = populateLangCodes();

/**
 * @param {string} textLangCode Language code string.
 * @example
 * ```js
 * const lang = translateLangCode("en");
 * console.log(lang); // "English"
 * ```
 * @returns {string | undefined} Human-readable language string.
 */
export const translateLangCode = (textLangCode) => {
  const resultString = !langCodes[textLangCode]
    ? undefined
    : langCodes[textLangCode];

  return resultString
}
