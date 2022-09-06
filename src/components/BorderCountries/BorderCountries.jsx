import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../App/App";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";
export default function BorderCountries({ borderCountries }) {
  const darkMode = useContext(DarkModeContext);
  const [fullNames, setFullNames] = useState([]);
  const fetchBorderCountriesNames = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/alpha?codes=${borderCountries}`
    );
    if (response.ok) {
      const data = await response.json();
      setFullNames(data);
    }
  };
  useEffect(() => {
    fetchBorderCountriesNames();
  }, [fullNames]);
  return (
    <BorderCountriesContainer>
      <b>Border countries:</b>
      {fullNames?.map((item) => {
        return (
          <BorderCountryLink
            dark={darkMode}
            to={`/country/${item.alpha3Code}`}
            key={item.alpha3Code}
          >
            {item.name}
          </BorderCountryLink>
        );
      })}
    </BorderCountriesContainer>
  );
}
