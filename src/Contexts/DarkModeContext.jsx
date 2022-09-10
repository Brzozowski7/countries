import { useEffect, createContext, useState } from "react";

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},
});

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleIsDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = {
    isDarkMode,
    toggleIsDarkMode,
  };

  useEffect(() => {
    const check = localStorage.getItem("isDarkMode");
    if (check === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
