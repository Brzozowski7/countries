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
