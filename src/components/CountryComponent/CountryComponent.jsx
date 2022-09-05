import { useContext } from "react";
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
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </InformationContainer>
    </CountryContainer>
  );
}
