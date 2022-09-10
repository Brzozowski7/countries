import { useState, useEffect } from "react";

export const useFetchSpecificCountry = (countryCode) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const fetchSpecificCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (response.ok) {
        const data = await response.json();
        setDetails(data);
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
    fetchSpecificCountry(countryCode);
  }, [countryCode]);

  const value = { details, loading, error };
  return value;
};
