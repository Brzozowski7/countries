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

export const sortCountries = (arr, sorter) => {
  switch (sorter) {
    case sortByList.Alphabetically:
      return [...arr].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    case sortByList.AlphabeticallyReversed:
      return [...arr].sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));
    case sortByList.ByPopulationDecreasing:
      return [...arr].sort((a, b) =>
        a.population < b.population ? 1 : a.population > b.population ? -1 : 0
      );
    case sortByList.ByPopulationIncreasing:
      return [...arr].sort((a, b) =>
        a.population < b.population ? -1 : a.population > b.population ? 1 : 0
      );
    case sortByList.ByRegions:
      return [...arr].sort((a, b) =>
        a.region < b.region ? -1 : a.region > b.region ? 1 : 0
      );
    case sortByList.ByAreaIncreasing:
      return [...arr]
        .filter((item) => item.area)
        .sort((a, b) => (a.area < b.area ? -1 : a.area > b.area ? 1 : 0));
      //removing countries on which we don't have area information
    case sortByList.ByAreaDecreasing:
      return [...arr]
        .filter((item) => item.area)
        .sort((a, b) => (a.area < b.area ? 1 : a.area > b.area ? -1 : 0));
      //removing countries on which we don't have area information
    default:
      return;
  }
};
