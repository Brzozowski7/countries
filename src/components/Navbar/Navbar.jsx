import { NavbarContainer, ModeContainer } from "./Navbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
export default function Navbar({ setDarkMode, darkMode }) {
  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <NavbarContainer dark={darkMode}>
      <h1>Where In The World?</h1>
      <ModeContainer dark={darkMode} onClick={handleClick}>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </ModeContainer>
    </NavbarContainer>
  );
}
