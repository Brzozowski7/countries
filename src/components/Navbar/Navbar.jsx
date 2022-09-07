import { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { NavbarContainer, ModeContainer } from "./Navbar.styles";
import { isDarkModeContext } from "../../App/App";
export default function Navbar({ setIsDarkMode }) {
  const isDarkMode = useContext(isDarkModeContext);
  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <NavbarContainer dark={isDarkMode}>
      <h1>Where In The World?</h1>
      <ModeContainer dark={isDarkMode} onClick={handleClick}>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </ModeContainer>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  setIsDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};
