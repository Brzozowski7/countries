import { useContext } from "react";
import PropTypes from "prop-types";
import {
  CountryContainer,
  FlagContainer,
  InformationContainer,
} from "./CountryComponent.styles";
import { DarkModeContext } from "../../App/App";
export default function CountryComponent({
  name,
  region,
  population,
  capital,
  flag,
}) {
  const darkMode = useContext(DarkModeContext);
  return (
    <CountryContainer dark={darkMode}>
      <FlagContainer>
        <img src={flag} alt={`${name} flag`} />
      </FlagContainer>
      <InformationContainer>
        <h2>{name}</h2>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </InformationContainer>
    </CountryContainer>
  );
}
CountryComponent.propTypes = {
  name: PropTypes.string,
  region: PropTypes.string,
  population: PropTypes.number,
  capital: PropTypes.string,
  flag: PropTypes.string,
};
