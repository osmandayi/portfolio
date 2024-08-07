'use client'
import { createContext, useContext, useState } from 'react';
import { languages } from "@/translate/languages";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState("turkce");
    const language = languages.find((language) => language.value === selectedValue);


    return (
        <LanguageContext.Provider value={{ selectedValue, setSelectedValue, language }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
