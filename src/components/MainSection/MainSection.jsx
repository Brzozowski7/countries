import { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
} from "./MainSection.styles";
import { DarkModeContext } from "../../App/App";
import CountryComponent from "../CountryComponent/CountryComponent";
import { filters } from "../../misc/filters";
import { sortByList, sortBySwitchList } from "../../misc/sortByList";

export default function MainSection() {
  const darkMode = useContext(DarkModeContext);
  const [searchedBy, setSearchedBy] = useState("name");
  const [sortBy, setSortBy] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

  const sortCountries = () => {
    switch (sortBy) {
      case sortBySwitchList.Alphabetically:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name.common < b.name.common
              ? -1
              : a.name.common > b.name.common
              ? 1
              : 0
          )
        );
        break;
      case sortBySwitchList.AlphabeticallyReversed:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name.common < b.name.common
              ? 1
              : a.name.common > b.name.common
              ? -1
              : 0
          )
        );
        break;
      case sortBySwitchList.ByPopulationDecreasing:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.population < b.population
              ? 1
              : a.population > b.population
              ? -1
              : 0
          )
        );
        break;
      case sortBySwitchList.ByPopulationIncreasing:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.population < b.population
              ? -1
              : a.population > b.population
              ? 1
              : 0
          )
        );
        break;
      case sortBySwitchList.ByRegions:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.region < b.region ? -1 : a.region > b.region ? 1 : 0
          )
        );
        break;
      default:
        return;
    }
  };
  const changeSearchBy = (e) => {
    setSearchedBy(e.target.value);
  };
  const changeSortBy = (e) => {
    setSortBy(e.target.value);
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
  }, [searchedCountry, searchedBy]);
  useEffect(() => {
    sortCountries();
  }, [sortBy]);

  return (
    <MainSectionContainer dark={darkMode}>
      <SearchBar
        setSearchedCountry={setSearchedCountry}
        searchedCountry={searchedCountry}
      />
      <SearchByContainer dark={darkMode}>
        <p>Search by:</p>
        <select onChange={(e) => changeSearchBy(e)}>
          {filters.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
        <p>Sort:</p>
        <select onChange={(e) => changeSortBy(e)}>
          {sortByList.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
      </SearchByContainer>
      <p>Number of matches: {countriesArr.length}</p>
      <FoundCountriesContainer>

        {countriesArr.map((item) => {
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
