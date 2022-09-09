import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";

export default function BorderCountries({ borderCountries }) {
  const { isDarkMode } = useContext(DarkModeContext);
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
  borderCountries: PropTypes.arrayOf(PropTypes.string),
};
