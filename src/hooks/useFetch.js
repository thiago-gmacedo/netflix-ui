import { useState, useEffect } from 'react';
import endpoints from '../endpoints';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "069aebc50919d2587528155d3058737f";

const useFetch = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    endpoints.forEach(async ([category, endpoint]) => {
      const response = await fetch(`${URL}${endpoint}?api_key=${API_KEY}`);
      const result = await response.json();
      setData((oldData) => {
        return {...oldData, [category]: result}
      });
    });
    setIsLoading(false);
  }, []);
  return { data, isLoading };
};

export default useFetch;