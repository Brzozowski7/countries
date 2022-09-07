import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isDarkModeContext } from "../../App/App";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";
export default function BorderCountries({ borderCountries }) {
  const isDarkMode = useContext(isDarkModeContext);
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
            dark={isDarkMode}
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
BorderCountries.propTypes = {
  borderCountries: PropTypes.array,
  isDarkMode: PropTypes.bool,
};
