import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { NavbarContainer, ModeContainer } from "./Navbar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function Navbar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);

  return (
    <NavbarContainer dark={isDarkMode}>
      <h1>Where In The World?</h1>
      <ModeContainer dark={isDarkMode} onClick={toggleIsDarkMode}>
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} /> + "Light Mode"
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </ModeContainer>
    </NavbarContainer>
  );
}
