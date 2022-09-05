import { useState, useContext, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
} from "./MainSection.styles";
import { DarkModeContext } from "../../App/App";
import CountryComponent from "../CountryComponent/CountryComponent";
import { filters } from "../../misc/filters";

export default function MainSection() {
  const darkMode = useContext(DarkModeContext);
  const [searchedBy, setSearchedBy] = useState("name");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

  const handleChange = (e) => {
    setSearchedBy(e.target.value);
  };
  const fetchWelcomeCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (response.ok) {
      const data = await response.json();
      setCountriesArr(data);
    }
  };
  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/${searchedBy}/${searchedCountry}`
    );
    if (response.ok) {
      const data = await response.json();
      setCountriesArr(data);
    }
  };
  useEffect(() => {
    fetchWelcomeCountries();
  }, []);
  useEffect(() => {
    if (searchedCountry) {
      fetchData();
    }
  }, [searchedCountry]);

  return (
    <MainSectionContainer dark={darkMode}>
      <SearchBar
        setSearchedCountry={setSearchedCountry}
        searchedCountry={searchedCountry}
      />
      <SearchByContainer dark={darkMode}>
        <p>Search by:</p>
        <select onChange={(e) => handleChange(e)}>
          {filters.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </SearchByContainer>
      <FoundCountriesContainer>
        {countriesArr?.map((item) => {
          return (
            <CountryComponent
              key={item.name.common}
              flag={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          );
        })}
      </FoundCountriesContainer>
    </MainSectionContainer>
  );
}
