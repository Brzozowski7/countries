import { useContext } from "react";
import PropTypes from "prop-types";
import {
  SearchBarContainer,
  StyledInput,
  XIconContainer,
} from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { isDarkModeContext } from "../../App/App";
export default function SearchBar({ setSearched, searched }) {
  const isDarkMode = useContext(isDarkModeContext);

  const handleChange = (e) => {
    setSearched(e.target.value);
  };
  const removeSearched = () => {
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
          <FontAwesomeIcon onClick={removeSearched} icon={faX} />
        </XIconContainer>
      )}
    </SearchBarContainer>
  );
}
SearchBar.propTypes = {
  searched: PropTypes.string,
  setSearched: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};
