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
  rememberSearchAndSortSettings,
  sortCountries,
} from "./MainSection.utils";
import { useFetchData } from "./useFetchData";
import CountryCard from "../CountryCard";
import ToastComponent from "../ToastComponent/ToastComponent";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { sortByList } from "../../misc/sortByList";

export default function MainSection() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [sortBy, setSortBy] = useState("");
  const [searched, setSearched] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

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

  useEffect(() => {
    rememberSearchAndSortSettings(searched, sortBy);
  }, [searched, sortBy]);

  const { countries, error } = useFetchData();

  useEffect(() => {
    setSearchedAndSortSettings();
    setCountriesArr(countries);
    if (error) {
      toast(
        `Unexpected problem occurred(${error}). Cannot fetch countries. Please try again later.`
      );
    }
  }, [countries, error]);

  useEffect(() => {
    const sortedArr = sortCountries(countriesArr, sortBy);
    setCountriesArr(sortedArr);
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
          ?.filter((country) => (searched ? find(country, searched) : country))
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
