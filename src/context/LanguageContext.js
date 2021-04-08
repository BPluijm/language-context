import { createContext, useState } from 'react';

export const LanguageContext = createContext({});

export function LanguageContextProvider({ children }) {
    const [language, toggleLanguage] = useState('nl');

    function setNl() {
        toggleLanguage('nl');
    }

    function setEs() {
        toggleLanguage('es')
    }

    const data = {
        activeLanguage: language,
        setNL: setNl,
        setEs: setEs,
    }

    return (
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    );
}

export default LanguageContextProvider;