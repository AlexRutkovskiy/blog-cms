import React from "react";
import { translate } from "@utils/translate";

export type ITranslate = typeof translate

export const TranslateContext = React.createContext<ITranslate>(translate)

export const TranslateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const translate = React.useContext(TranslateContext)
    
    return (
        <TranslateContext.Provider value={translate}>
            {children}
        </TranslateContext.Provider>
    )
}