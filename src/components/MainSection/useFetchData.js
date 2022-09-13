import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { shuffleCountries } from "./MainSection.utils";

const useFetchData = () => {
  const [countries, setCountries] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
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
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch countries. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { countries, loading };
  return value;
};
export default useFetchData;
