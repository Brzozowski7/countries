import { useState, createContext } from "react";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/MainSection";
import { Wrapper } from "./App.styles";

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <Wrapper dark={darkMode}>
        <Navbar setDarkMode={setDarkMode} />
        <MainSection />
      </Wrapper>
    </DarkModeContext.Provider>
  );
}

export default App;
