export function find(obj, keyword) {
  let found = false;
  const iterate = (obj) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        iterate(value);
      } else {
        if (("" + value).indexOf(keyword) > -1) {
          found = true;
        }
      }
    });
  };

  iterate(obj);
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
