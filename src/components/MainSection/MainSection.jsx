import { useState, useContext, useEffect } from "react";
import SearchBar from "../SearchBar";
import {
  MainSectionContainer,
  SearchByContainer,
  FoundCountriesContainer,
  StyledLink,
} from "./MainSection.styles";
import { find, shuffleCountries, sortCountries } from "./MainSection.utils";
import useFetchData from "../../hooks/useFetchData/useFetchData";
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

  const { data, loading } = useFetchData(
    `https://restcountries.com/v2/all?fields=alpha3Code,name,capital,population,borders,area,car,flags,latlng,languages,region,subregion,timezones,currencies`
  );

  const changeSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    setSortBy(savedSortBy);
    setSearched(savedSearched);
  }, []);

  useEffect(() => {
    shuffleCountries(data);
    setCountriesArr(data);
  }, [data]);

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
