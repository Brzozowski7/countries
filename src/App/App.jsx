import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection/MainSection";
import CountryPage from "../components/CountryPage";
import { Wrapper } from "./App.styles";
import { DarkModeContextProvider } from "../Contexts/DarkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <Router>
        <Wrapper>
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
    </DarkModeContextProvider>
  );
}

export default App;
