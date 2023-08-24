import { useState, useEffect } from 'react';
import { SWIGGY_MENU_API } from './constants';
const useRestaurantMenuHook = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    const data = await fetch(SWIGGY_MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenuHook;


