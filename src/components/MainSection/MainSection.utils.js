import { useState, useEffect } from "react";
import { sortByList } from "../../misc/sortByList";

export function find(obj, keyword) {
  let found = false;
  const goDeeper = (obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        goDeeper(value);
      } else {
        if (
          ("" + value.toString().toLowerCase()).indexOf(keyword.toLowerCase()) >
          -1
        ) {
          found = true;
        }
      }
    });
  };

  goDeeper(obj);
  return found;
}
export const shuffleCountries = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
export const rememberSearchAndSortSettings = (search, sort) => {
  sessionStorage.setItem("search", JSON.stringify(search));
  sessionStorage.setItem("sort", JSON.stringify(sort));
};

export const useFetchData = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/all?fields=alpha3Code,name,capital,population,borders,area,car,flags,latlng,languages,region,subregion,timezones,currencies`
      );
      if (response.ok) {
        const countries = await response.json();
        shuffleCountries(countries);
        setData(countries);
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

  const value = { data, error };
  return value;
};

export const useSortCountries = (arr, sorter) => {
  const sortCountries = () => {
    switch (sorter) {
      case sortByList.Alphabetically:
        arr.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
        break;
      case sortByList.AlphabeticallyReversed:
        arr.sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));
        break;
      case sortByList.ByPopulationDecreasing:
        arr.sort((a, b) =>
          a.population < b.population ? 1 : a.population > b.population ? -1 : 0
        );
        break;
      case sortByList.ByPopulationIncreasing:
        arr.sort((a, b) =>
          a.population < b.population ? -1 : a.population > b.population ? 1 : 0
        );
        break;
      case sortByList.ByRegions:
        arr.sort((a, b) =>
          a.region < b.region ? -1 : a.region > b.region ? 1 : 0
        );
        break;
      case sortByList.ByAreaIncreasing:
        arr
          .filter((item) => item.area)
          .sort((a, b) => (a.area < b.area ? -1 : a.area > b.area ? 1 : 0));
        //removing countries on which we don't have area information
        break;
      case sortByList.ByAreaDecreasing:
        arr
          .filter((item) => item.area)
          .sort((a, b) => (a.area < b.area ? 1 : a.area > b.area ? -1 : 0));
        //removing countries on which we don't have area information
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    sortCountries(sorter);
  }, [arr, sorter]);

  return arr;
};
