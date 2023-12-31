import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
   const [displaySettings, setDisplaySettings] = useState(false);
   const [isDarkTheme, setIsDarkTheme] = useState(true);
   const [themeColors, setThemeColors] = useState({
      roomBgColor: '',
      messageBgColor: '',
   });

   useEffect(() => {
      const userTheme = JSON.parse(localStorage.getItem('userTheme'));
      const darkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (userTheme) {
         setThemeColors({
            ...userTheme,
         });
      } else {
         localStorage.setItem('userTheme', JSON.stringify(themeColors));
      }

      if (darkMode !== null) {
         setIsDarkTheme(darkMode);
      } else {
         localStorage.setItem('darkMode', JSON.stringify(isDarkTheme));
      }
      // eslint-disable-next-line
   }, []);

   return (
      <ThemeContext.Provider
         value={{
            displaySettings,
            setDisplaySettings,
            themeColors,
            setThemeColors,
            isDarkTheme,
            setIsDarkTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};
