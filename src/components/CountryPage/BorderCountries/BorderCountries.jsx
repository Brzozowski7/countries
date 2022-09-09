import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";
import ToastComponent from "../../ToastComponent/ToastComponent";

export default function BorderCountries({ borderCountries }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [fullNames, setFullNames] = useState([]);
  const fetchBorderCountriesNames = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/alpha?codes=${borderCountries}`
      );
      if (response.ok) {
        const data = await response.json();
        setFullNames(data);
      } else {
        throw response.status;
      }
    } catch (err) {
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch border countries. Please try again later.`
      );
    }
  };
  useEffect(() => {
    fetchBorderCountriesNames();
  }, [borderCountries]);
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
      <ToastComponent />
    </BorderCountriesContainer>
  );
}
BorderCountries.propTypes = {
  borderCountries: PropTypes.arrayOf(PropTypes.string),
};
