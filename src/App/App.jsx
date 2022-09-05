import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Wrapper } from "./App.styles";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Wrapper>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
    </Wrapper>
  );
}

export default App;
