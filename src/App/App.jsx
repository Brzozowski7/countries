import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import { Wrapper } from "./App.styles";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Wrapper>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <MainSection darkMode={darkMode}/>
    </Wrapper>
  );
}

export default App;
