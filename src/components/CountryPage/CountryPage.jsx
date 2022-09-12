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
import useFetchSpecificCountry from "./useFetchSpecificCountry";
import CountryPageDetails from "./CountryPageDetails/CountryPageDetails";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import BorderCountries from "./BorderCountries";
import ToastComponent from "../ToastComponent";
import Spinner from "../Spinner";

export default function CountryPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const params = useParams();
  const { details, loading } = useFetchSpecificCountry(
    params.countryCode
  );

  return (
    <CountryPageWrapper dark={isDarkMode}>
      <StyledLink dark={isDarkMode} to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </StyledLink>
      {loading ? (
        <Spinner />
      ) : (
        details && (
          <>
            <CountryInformationContainer>
              <FlagContainer>
                <img
                  src={details[0].flags.png}
                  alt={`${details[0].name.common} flag`}
                />
              </FlagContainer>
              <CountryPageDetails countryInformation={details[0]} />
            </CountryInformationContainer>
            {details[0].borders && (
              <BorderCountries borderCountries={details[0].borders} />
            )}
          </>
        )
      )}
      <ToastComponent />
    </CountryPageWrapper>
  );
}
