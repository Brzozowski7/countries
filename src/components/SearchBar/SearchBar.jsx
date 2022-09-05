import { useContext } from "react";
import { SearchBarContainer, StyledInput } from "./SearchBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../App/App";
export default function SearchBar({ setSearchedCountry, searchedCountry }) {
  const darkMode = useContext(DarkModeContext);

  const handleChange = (e) => {
    setSearchedCountry(e.target.value);
  };

  return (
    <SearchBarContainer dark={darkMode}>
      <FontAwesomeIcon icon={faSearch} />
      <StyledInput
        dark={darkMode}
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
        value={searchedCountry}
      />
    </SearchBarContainer>
  );
}
