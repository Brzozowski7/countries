import { useState, useEffect } from "react";
import { shuffleCountries } from "./MainSection.utils";

export const useFetchData = () => {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/all?fields=alpha3Code,name,capital,population,borders,area,car,flags,latlng,languages,region,subregion,timezones,currencies`
      );
      if (response.ok) {
        const data = await response.json();
        shuffleCountries(data);
        setCountries(data);
      } else {
        throw response.status;
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { countries, error };
  return value;
};
