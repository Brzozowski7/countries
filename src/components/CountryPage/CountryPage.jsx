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
import { useFetchSpecificCountry } from "./useFetchSpecificCountry";
import CountryPageDetails from "./CountryPageDetails/CountryPageDetails";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import BorderCountries from "./BorderCountries";
import ToastComponent from "../ToastComponent/ToastComponent";

export default function CountryPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [country, setCountry] = useState("");

  const params = useParams();

  const { details, error } = useFetchSpecificCountry(params.countryCode);

  useEffect(() => {
    setCountry(details);

    if (error) {
      toast(
        `Unexpected problem occurred(${error}). Cannot fetch country's details. Please try again later.`
      );
    }
  }, [details, error]);

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
