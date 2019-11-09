import React from 'react';
import { useRouter } from 'next/router';
import { isLocale } from '../translations/types';

export const LocaleContext = React.createContext({
    locale: 'id',
    setLocale: () => null
});


export const LocaleProvider = ({ lang, children }) => {
    const [locale, setLocale] = React.useState(lang);
    const { query } = useRouter();

    React.useEffect(() => {
        if (locale !== localStorage.getItem('locale')) {
            localStorage.setItem('locale', locale);
        }
    }, [locale]);

    React.useEffect(() => {
        if (typeof query.langs === 'string' && isLocale(query.langs) && locale !== query.langs) {
            setLocale(query.langs);
        }
    }, [query.langs, locale]);
    return  <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
