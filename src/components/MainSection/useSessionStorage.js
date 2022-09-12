import { useState } from "react";

const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const checkSessionStorage = sessionStorage.getItem(key);
      if (checkSessionStorage) {
        return JSON.parse(checkSessionStorage);
      } else {
        return initialValue;
      }
    } catch (err) {
      console.log(err);
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
export default useSessionStorage;
