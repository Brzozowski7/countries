import { useContext } from "react";
import PropTypes from "prop-types";
import { DarkModeContext } from "../../../contexts/DarkModeContext/DarkModeContext";
import {
  BorderCountriesContainer,
  BorderCountryLink,
} from "./BorderCountries.styles";
import useFetchBorderCountriesNames from "./useFetchBorderCountriesNames";
import ToastComponent from "../../ToastComponent";
import Spinner from "../../Spinner";

export default function BorderCountries({ borderCountries }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const { names, loading } = useFetchBorderCountriesNames(borderCountries);

  return (
    <BorderCountriesContainer>
      <b>Border countries:</b>
      {loading ? (
        <Spinner />
      ) : (
        names?.map((item) => {
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
