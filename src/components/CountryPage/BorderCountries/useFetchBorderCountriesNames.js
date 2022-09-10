import { useState, useEffect } from "react";

export const useFetchBorderCountriesNames = (borderCountries) => {
  const [names, setNames] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchBorderCountriesNames = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorderCountriesNames();
  }, [borderCountries]);

  const value = { names, loading, error };
  return value;
};
