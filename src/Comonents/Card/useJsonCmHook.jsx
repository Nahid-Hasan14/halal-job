// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export default function useJsonCmHook(url) {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Data Fatching Error");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null); // data asle to r error hobe na, tai null
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false); // Data asle Loading hobe na
        });
    }, 2000);
  }, [url]);
  return { data, isLoding, error };
}
