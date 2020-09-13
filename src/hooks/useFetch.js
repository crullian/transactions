import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url, options);
        const json = await result.json();
        setResponse(json)
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchData();
  }, [options, url]);
  
  return { response, error };
}