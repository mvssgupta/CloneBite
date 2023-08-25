import { useState, useEffect } from 'react';
import {SWIGGY_API} from '../utils/constants'

const useFetchSwiggyDataHook = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);
  const fetchDataFromApi = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setResData(json);
  };

  return resData;
};

export default useFetchSwiggyDataHook;
