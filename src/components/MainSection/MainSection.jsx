import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import SearchBar from "../SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
  StyledLink,
} from "./MainSection.styles";
import {
  find,
  shuffleCountries,
  rememberSearchAndSortSettings,
} from "./MainSection.utils";
import CountryCard from "../CountryCard";
import ToastComponent from "../ToastComponent/ToastComponent";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { sortByList } from "../../misc/sortByList";

export default function MainSection() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [sortBy, setSortBy] = useState("");
  const [searched, setSearched] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

  const sortCountries = () => {
    switch (sortBy) {
      case sortByList.Alphabetically:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          )
        );
        break;
      case sortByList.AlphabeticallyReversed:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0
          )
        );
        break;
      case sortByList.ByPopulationDecreasing:
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
      case sortByList.ByPopulationIncreasing:
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
      case sortByList.ByRegions:
        setCountriesArr((prev) =>
          [...prev].sort((a, b) =>
            a.region < b.region ? -1 : a.region > b.region ? 1 : 0
          )
        );
        break;
      case sortByList.ByAreaIncreasing:
        setCountriesArr((prev) =>
          prev
            .filter((item) => item.area)
            .sort((a, b) => (a.area < b.area ? -1 : a.area > b.area ? 1 : 0))
        );
        //removing countries on which we don't have area information
        break;
      case sortByList.ByAreaDecreasing:
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
  const setSearchedAndSortSettings = () => {
    const searchInSessionStorage = sessionStorage.getItem("search");
    const sortInSessionStorage = sessionStorage.getItem("sort");
    if (searchInSessionStorage) {
      setSearched(JSON.parse(searchInSessionStorage));
    }
    if (sortInSessionStorage) {
      setSortBy(JSON.parse(sortInSessionStorage));
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/all?fields=alpha3Code,name,capital,population,borders,area,car,flags,latlng,languages,region,subregion,timezones,currencies`
      );
      if (response.ok) {
        const data = await response.json();
        shuffleCountries(data);
        setCountriesArr(data);
      } else {
        throw response.status;
      }
    } catch (err) {
      toast(
        `Unexpected problem occurred (${err}). Cannot fetch countries. Please try again later.`
      );
    }
  };

  useEffect(() => {
    setSearchedAndSortSettings();
    fetchData();
  }, []);
  useEffect(() => {
    rememberSearchAndSortSettings(searched, sortBy);
  }, [searched, sortBy]);
  useEffect(() => {
    sortCountries();
  }, [sortBy]);

  return (
    <MainSectionContainer dark={isDarkMode}>
      <SearchBar
        searched={searched}
        setSearched={setSearched}
        searchedCountry={searched}
      />
      <SearchByContainer dark={isDarkMode}>
        <p>Sort:</p>
        <select value={sortBy} onChange={(e) => changeSortBy(e)}>
          {Object.values(sortByList).map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </select>
      </SearchByContainer>
      <FoundCountriesContainer>
        {countriesArr
          .filter((country) => (searched ? find(country, searched) : country))
          .map((item) => {
            return (
              <StyledLink key={item.name} to={"/country/" + item.alpha3Code}>
                <CountryCard
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
      <ToastComponent />
    </MainSectionContainer>
  );
}
