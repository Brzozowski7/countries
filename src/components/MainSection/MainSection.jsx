import { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
  StyledLink,
} from "./MainSection.styles";
import { find, sortCountries } from "./MainSection.utils";
import useFetchData from "./useFetchData";
import useSessionStorage from "./useSessionStorage";
import CountryCard from "../CountryCard";
import ToastComponent from "../ToastComponent";
import Spinner from "../Spinner";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import { sortByList } from "../../misc/sortByList";

export default function MainSection() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [sortBy, setSortBy] = useState("");
  const [searched, setSearched] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);
  const [savedSearched, setSavedSearched] = useSessionStorage("search", "");
  const [savedSortBy, setSavedSortBy] = useSessionStorage("sortBy", "");

  const { countries, loading } = useFetchData();

  const changeSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    setSortBy(savedSortBy);
    setSearched(savedSearched);
  }, []);

  useEffect(() => {
    setCountriesArr(countries);
  }, [countries]);

  useEffect(() => {
    if (countriesArr) {
      setCountriesArr(sortCountries(countriesArr, sortBy));
    }
    setSavedSortBy(sortBy);
  }, [sortBy]);

  useEffect(() => {
    setSavedSearched(searched);
  }, [searched]);

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
        {loading ? (
          <Spinner />
        ) : (
          countriesArr
            ?.filter((country) =>
              searched ? find(country, searched) : country
            )
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
            })
        )}
      </FoundCountriesContainer>
      <ToastComponent />
    </MainSectionContainer>
  );
}
