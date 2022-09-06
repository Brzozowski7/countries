import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  CountryPageWrapper,
  StyledLink,
  CountryInformationContainer,
} from "./CountryPage.styles";
import { addCommas } from "./CountryPage.utils";
import { DarkModeContext } from "../../App/App";
export default function CountryPage() {
  const darkMode = useContext(DarkModeContext);
  const [country, setCountry] = useState();
  const params = useParams();
  const checkLocalStorage = () => {
    const localStorageItem = localStorage.getItem(`${params.countryName}`);
    if (localStorageItem) {
      setCountry(JSON.parse(localStorageItem));
      return true;
    }
    return false;
  };
  const fetchSpecificCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`
    );
    if (response.ok) {
      const data = await response.json();
      setCountry(data);
      localStorage.setItem(`${params.countryName}`, JSON.stringify(data));
    }
  };
  useEffect(() => {
    if (!checkLocalStorage()) {
      fetchSpecificCountry();
    }
  }, []);
  return (
    <CountryPageWrapper dark={darkMode}>
      <StyledLink dark={darkMode} to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </StyledLink>
      {country?.map((item) => {
        return (
          <>
            <img src={item.flags.png} alt={`${item.name} flag`} />
            <CountryInformationContainer>
              <h2>{item.name.common}</h2>
              <div>
                <p>
                  <b>Native Name:</b> {item.name.official}
                </p>
                <p>
                  <b>Population:</b> {addCommas(item.population)}
                </p>
                <p>
                  <b>Region:</b> {item.region}
                </p>
                <p>
                  <b>Sub Region:</b> {item.subregion}
                </p>
                <p>
                  <b>Capital: </b> {item.capital}
                </p>
              </div>
              <div>
                <p>
                  <b>Top Level Domain: </b> {item.tld}
                </p>
                <p>
                  <b>Currencies:</b> {Object.keys(item.currencies).join(", ")}
                </p>
                <p>
                  <b>Languages:</b> {Object.values(item.languages).join(", ")}
                </p>
              </div>
            </CountryInformationContainer>
          </>
        );
      })}
    </CountryPageWrapper>
  );
}
