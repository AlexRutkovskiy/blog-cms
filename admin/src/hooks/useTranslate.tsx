import React from "react"
import { TranslateContext } from "@context/translateContext"
import { SUPPORT_LANG } from "@utils/translate";


function getLang() {
    if (navigator.languages != undefined) 
      return navigator.languages[0]; 
    return navigator.language;
}

const locale = getLang() as SUPPORT_LANG
const defaultLocale = SUPPORT_LANG.EN;

export const useTranslate = () => {
  const translate = React.useContext(TranslateContext);
 
  return (locale in SUPPORT_LANG) ? translate[locale] : translate[defaultLocale]
}