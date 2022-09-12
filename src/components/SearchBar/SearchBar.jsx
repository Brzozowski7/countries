import { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import {
  SearchBarContainer,
  StyledInput,
  XIconContainer,
} from "./SearchBar.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

export default function SearchBar({ setSearched, searched }) {
  const { isDarkMode } = useContext(DarkModeContext);

  const handleChange = (e) => {
    setSearched(e.target.value);
  };
  const clearSearchBar = () => {
    setSearched("");
  };
  return (
    <SearchBarContainer dark={isDarkMode}>
      <FontAwesomeIcon icon={faSearch} />
      <StyledInput
        value={searched}
        dark={isDarkMode}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
      />
      {searched && (
        <XIconContainer>
          <FontAwesomeIcon onClick={clearSearchBar} icon={faX} />
        </XIconContainer>
      )}
    </SearchBarContainer>
  );
}
SearchBar.propTypes = {
  searched: PropTypes.string,
  setSearched: PropTypes.func.isRequired,
};
