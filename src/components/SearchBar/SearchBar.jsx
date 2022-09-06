import { useContext } from "react";
import PropTypes from "prop-types";
import { SearchBarContainer, StyledInput } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../App/App";
export default function SearchBar({ setSearched }) {
  const darkMode = useContext(DarkModeContext);

  const handleChange = (e) => {
    setSearched(e.target.value);
  };

  return (
    <SearchBarContainer dark={darkMode}>
      <FontAwesomeIcon icon={faSearch} />
      <StyledInput
        dark={darkMode}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
      />
    </SearchBarContainer>
  );
}
SearchBar.propTypes = {
  setSearched: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};
