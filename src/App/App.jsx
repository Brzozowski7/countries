import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/MainSection";
import CountryPage from "../components/CountryPage";
import { Wrapper } from "./App.styles";

export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <Router>
        <Wrapper dark={darkMode}>
          <Navbar setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<MainSection />}></Route>
            <Route
              path="/country/:countryCode"
              element={<CountryPage />}
            ></Route>
          </Routes>
        </Wrapper>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
