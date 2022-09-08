import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/MainSection";
import CountryPage from "../components/CountryPage";
import { Wrapper } from "./App.styles";

export const isDarkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <isDarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Router>
        <Wrapper dark={isDarkMode}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainSection />}></Route>
            <Route
              path="/country/:countryCode"
              element={<CountryPage />}
            ></Route>
          </Routes>
        </Wrapper>
      </Router>
    </isDarkModeContext.Provider>
  );
}

export default App;
