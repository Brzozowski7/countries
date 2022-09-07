import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  CountryPageWrapper,
  StyledLink,
  CountryInformationContainer,
  FlagContainer,
  NameAndDetails,
  Details,
} from "./CountryPage.styles";
import { addCommas } from "../../misc/utils";
import { isDarkModeContext } from "../../App/App";
import BorderCountries from "../BorderCountries";

export default function CountryPage() {
  const isDarkMode = useContext(isDarkModeContext);
  const [country, setCountry] = useState();
  const params = useParams();
  const checkLocalStorage = () => {
    const localStorageItem = localStorage.getItem(`${params.countryCode}`);
    if (localStorageItem) {
      setCountry(JSON.parse(localStorageItem));
      return true;
    }
    return false;
  };
  const fetchSpecificCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.countryCode}`
    );
    if (response.ok) {
      const data = await response.json();
      setCountry(data);
      localStorage.setItem(`${params.countryCode}`, JSON.stringify(data));
    }
  };
  useEffect(() => {
    if (!checkLocalStorage()) {
      fetchSpecificCountry();
    }
  }, [params.countryCode]);

  return (
    <CountryPageWrapper dark={isDarkMode}>
      <StyledLink dark={isDarkMode} to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </StyledLink>
      {country && (
        <>
          <CountryInformationContainer>
            <FlagContainer>
              <img
                src={country[0].flags.png}
                alt={`${country[0].name.common} flag`}
              />
            </FlagContainer>
            <NameAndDetails>
              <h1>{country[0].name.common}</h1>
              <Details>
                <div>
                  <p>
                    <b>Native Name:</b> {country[0].name.official}
                  </p>
                  <p>
                    <b>Population:</b> {addCommas(country[0].population)}
                  </p>
                  <p>
                    <b>Region:</b> {country[0].region}
                  </p>
                  <p>
                    <b>Sub Region:</b> {country[0].subregion}
                  </p>
                  <p>
                    <b>Capital: </b> {country[0].capital}
                  </p>
                </div>
                <div>
                  <p>
                    <b>Top Level Domain: </b> {country[0].tld}
                  </p>
                  <p>
                    <b>Currencies:</b>{" "}
                    {country[0].currencies
                      ? Object.keys(country[0].currencies).join(", ")
                      : ""}
                  </p>
                  <p>
                    <b>Languages:</b>{" "}
                    {country[0].languages
                      ? Object.values(country[0].languages).join(", ")
                      : ""}
                  </p>
                  <p>
                    <b>Traffic:</b> {country[0].car.side}-handed
                  </p>
                </div>
                <div>
                  <p>
                    <b>Lat:</b> {country[0].latlng[0]}&#176;
                  </p>
                  <p>
                    <b>Long:</b> {country[0].latlng[1]}&#176;
                  </p>
                  <p>
                    <b>Area:</b> {country[0].area} km&sup2;
                  </p>
                  <p>
                    <b>Land locked:</b> {country[0].landlocked ? "Yes" : "No"}
                  </p>
                </div>
              </Details>
            </NameAndDetails>
          </CountryInformationContainer>
          <BorderCountries borderCountries={country[0].borders} />
        </>
      )}
    </CountryPageWrapper>
  );
}
CountryPage.propTypes = {
  isDarkMode: PropTypes.bool,
};
