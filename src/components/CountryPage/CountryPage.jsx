import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  CountryPageWrapper,
  StyledLink,
  CountryInformationContainer,
  FlagContainer,
} from "./CountryPage.styles";
import useFetchData from "../../hooks/useFetchData/useFetchData";
import CountryPageDetails from "./CountryPageDetails/CountryPageDetails";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import BorderCountries from "./BorderCountries";
import ToastComponent from "../ToastComponent";
import Spinner from "../Spinner";

export default function CountryPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const params = useParams();
  const { data, loading } = useFetchData(
    `https://restcountries.com/v3.1/alpha/${params.countryCode}`
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
        data && (
          <>
            <CountryInformationContainer>
              <FlagContainer>
                <img
                  src={data[0].flags.png}
                  alt={`${data[0].name.common} flag`}
                />
              </FlagContainer>
              <CountryPageDetails countryInformation={data[0]} />
            </CountryInformationContainer>
            {data[0].borders && (
              <BorderCountries borderCountries={data[0].borders} />
            )}
          </>
        )
      )}
      <ToastComponent />
    </CountryPageWrapper>
  );
}
