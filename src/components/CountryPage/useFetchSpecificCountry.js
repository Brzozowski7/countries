import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchSpecificCountry = (countryCode) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState();

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
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch country's details. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecificCountry(countryCode);
  }, [countryCode]);

  const value = { details, loading };
  return value;
};
export default useFetchSpecificCountry;
