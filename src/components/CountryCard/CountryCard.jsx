import { useContext } from "react";
import PropTypes from "prop-types";
import {
  CountryContainer,
  FlagContainer,
  InformationContainer,
} from "./CountryCard.styles";
import { addCommas } from "./CountryCard.utils";
import { DarkModeContext } from "../../App/App";
export default function CountryCard({
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
          <b>Population:</b> {addCommas(population)}
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
CountryCard.propTypes = {
  name: PropTypes.string,
  region: PropTypes.string,
  population: PropTypes.number,
  capital: PropTypes.string,
  flag: PropTypes.string,
};