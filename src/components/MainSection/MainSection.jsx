import { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
  StyledLink,
} from "./MainSection.styles";
import { find, shuffleCountries } from "./MainSection.utils";
import { DarkModeContext } from "../../App/App";
import CountryCard from "../CountryCard";
import { sortByList, sortBySwitchList } from "../../misc/sortByList";

export default function MainSection() {
  const darkMode = useContext(DarkModeContext);
  const [sortBy, setSortBy] = useState("");
  const [searched, setSearched] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

  const sortCountries = () => {
    switch (sortBy) {
      case sortBySwitchList.Alphabetically:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          )
        );
        break;
      case sortBySwitchList.AlphabeticallyReversed:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0
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
      case sortBySwitchList.ByAreaIncreasing:
        setCountriesArr((prev) =>
          prev
            .filter((item) => item.area)
            .sort((a, b) => (a.area < b.area ? -1 : a.area > b.area ? 1 : 0))
        );
        //removing countries on which we don't have area information
        break;
      case sortBySwitchList.ByAreaDecreasing:
        setCountriesArr((prev) =>
          prev
            .filter((item) => item.area)
            .sort((a, b) => (a.area < b.area ? 1 : a.area > b.area ? -1 : 0))
        );
        //removing countries on which we don't have area information
        break;
      default:
        return;
    }
  };

  const changeSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const checkLocalStorage = () => {
    const localStorageItem = localStorage.getItem(`countryList`);
    if (localStorageItem) {
      const data = JSON.parse(localStorageItem);
      shuffleCountries(data);
      setCountriesArr(data);
      return true;
    } else return false;
  };
  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/all?fields=name,capital,population,borders,area,car,flags,latlng,languages,region,subregion,timezones,currencies`
    );
    if (response.ok) {
      const data = await response.json();
      shuffleCountries(data);
      setCountriesArr(data);
      localStorage.setItem("countryList", JSON.stringify(data));
    }
  };
  useEffect(() => {
    if (!checkLocalStorage()) {
      fetchData();
    } else return;
  }, []);

  useEffect(() => {
    sortCountries();
  }, [sortBy]);

  return (
    <MainSectionContainer dark={darkMode}>
      <SearchBar setSearched={setSearched} searchedCountry={searched} />
      <SearchByContainer dark={darkMode}>
        <p>Sort:</p>
        <select onChange={(e) => changeSortBy(e)}>
          {sortByList.map((item, index) => {
            return <option key={index}>{item.name}</option>;
          })}
        </select>
      </SearchByContainer>
      <FoundCountriesContainer>
        {countriesArr
          .filter((country) => (searched ? find(country, searched) : country))
          .map((item) => {
            return (
              <StyledLink to={"/country/" + item.name}>
                <CountryCard
                  key={item.name}
                  flag={item.flags.png}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              </StyledLink>
            );
          })}
      </FoundCountriesContainer>
    </MainSectionContainer>
  );
}
