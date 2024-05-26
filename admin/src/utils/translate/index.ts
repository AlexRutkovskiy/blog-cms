import * as en from "./en.json";

export enum SUPPORT_LANG {
  EN = "en",
}

interface ILanguage {
  [SUPPORT_LANG.EN]: typeof en;
}

export const translate: ILanguage = {
  en: en,
};
