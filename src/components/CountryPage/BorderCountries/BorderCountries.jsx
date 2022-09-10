import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";
import useFetchBorderCountriesNames from "./useFetchBorderCountriesNames";
import ToastComponent from "../../ToastComponent";
import Spinner from "../../Spinner";

export default function BorderCountries({ borderCountries }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [fullNames, setFullNames] = useState([]);

  const { names, loading, error } =
    useFetchBorderCountriesNames(borderCountries);

  useEffect(() => {
    setFullNames(names);
    if (error) {
      toast(
        `Unexpected problem occurred(${error}). Cannot fetch country's details. Please try again later.`
      );
    }
  }, [names, error]);

  return (
    <BorderCountriesContainer>
      <b>Border countries:</b>
      {loading ? (
        <Spinner />
      ) : (
        fullNames?.map((item) => {
          return (
            <BorderCountryLink
              dark={isDarkMode}
              to={`/country/${item.alpha3Code}`}
              key={item.alpha3Code}
            >
              {item.name}
            </BorderCountryLink>
          );
        })
      )}
      <ToastComponent />
    </BorderCountriesContainer>
  );
}
BorderCountries.propTypes = {
  borderCountries: PropTypes.arrayOf(PropTypes.string),
};
