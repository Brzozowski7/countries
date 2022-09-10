import { useState, useEffect } from "react";

export const useFetchBorderCountriesNames = (borderCountries) => {
  const [names, setNames] = useState();
  const [error, setError] = useState();

  const fetchBorderCountriesNames = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/alpha?codes=${borderCountries}`
      );
      if (response.ok) {
        const data = await response.json();
        setNames(data);
      } else {
        throw response.status;
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchBorderCountriesNames();
  }, [borderCountries]);

  const value = { names, error };
  return value;
};
