import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import {
  CountryPageWrapper,
  StyledLink,
  CountryInformationContainer,
  FlagContainer,
} from "./CountryPage.styles";
import CountryPageDetails from "./CountryPageDetails/CountryPageDetails";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import BorderCountries from "./BorderCountries";
import ToastComponent from "../ToastComponent/ToastComponent";

export default function CountryPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [country, setCountry] = useState();
  const params = useParams();

  const fetchSpecificCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${params.countryCode}`
      );
      if (response.ok) {
        const data = await response.json();
        setCountry(data);
      } else {
        throw response.status;
      }
    } catch (err) {
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch country's details. Please try again later.`
      );
    }
  };
  useEffect(() => {
    fetchSpecificCountry();
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
            <CountryPageDetails countryInformation={country[0]} />
          </CountryInformationContainer>
          {country[0].borders && (
            <BorderCountries borderCountries={country[0].borders} />
          )}
        </>
      )}
      <ToastComponent />
    </CountryPageWrapper>
  );
}
