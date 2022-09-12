import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchBorderCountriesNames = (borderCountries) => {
  const [names, setNames] = useState();
  const [loading, setLoading] = useState();

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
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch border countries. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorderCountriesNames();
  }, [borderCountries]);

  const value = { names, loading };
  return value;
};
export default useFetchBorderCountriesNames;
