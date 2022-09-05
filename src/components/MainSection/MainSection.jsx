import { useState, useContext, useEffect } from "react";
import Axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import {
  MainSectionContainer,
  FoundCountriesContainer,
} from "./MainSection.styles";
import { DarkModeContext } from "../../App/App";
import CountryComponent from "../CountryComponent/CountryComponent";

export default function MainSection() {
  const darkMode = useContext(DarkModeContext);
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countriesArr, setCountriesArr] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchedCountry}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCountriesArr(data);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("request");
  }, [searchedCountry]);

  return (
    <MainSectionContainer dark={darkMode}>
      <SearchBar
        setSearchedCountry={setSearchedCountry}
        searchedCountry={searchedCountry}
      />
      <FoundCountriesContainer>
        {countriesArr?.map((item) => {
          return (
            <CountryComponent
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
