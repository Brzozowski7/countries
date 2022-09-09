import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { NavbarContainer, ModeContainer } from "./Navbar.styles";
import { DarkModeContext } from "../../Contexts/DarkModeContext";

export default function Navbar() {
  const { isDarkMode, toggleIsDarkMode } = useContext(DarkModeContext);

  return (
    <NavbarContainer dark={isDarkMode}>
      <h1>Where In The World?</h1>
      <ModeContainer dark={isDarkMode} onClick={toggleIsDarkMode}>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </ModeContainer>
    </NavbarContainer>
  );
}
