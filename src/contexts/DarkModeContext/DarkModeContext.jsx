import { useEffect, createContext, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},
});

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [darkModeLocalStorage, setDarkModeLocalStorage] = useLocalStorage(
    "isDarkMode",
    isDarkMode
  );
  const toggleIsDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleIsDarkMode,
  };

  useEffect(() => {
    setIsDarkMode(darkModeLocalStorage);
  }, []);

  useEffect(() => {
    setDarkModeLocalStorage(isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
