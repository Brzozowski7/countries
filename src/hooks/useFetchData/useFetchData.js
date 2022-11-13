import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setData(jsonResponse);
    } catch (err) {
      toast(
        `Unexpected problem occurred(${err}). Cannot fetch data. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const value = { data, loading };
  return value;
};
export default useFetchData;
