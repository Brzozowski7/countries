import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/MainSection";
import CountryPage from "../components/CountryPage";
import { Wrapper } from "./App.styles";
import { DarkModeContext } from "../contexts/DarkModeContext";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Router>
      <Wrapper dark={isDarkMode}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />}></Route>
          <Route path="/country/:countryCode" element={<CountryPage />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
