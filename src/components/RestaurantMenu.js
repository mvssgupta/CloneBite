import { useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import { SWIGGY_MENU_API } from '../utils/constants';

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const {resId} = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API+resId);
    const json = await data.json();
    setMenuData(json.data.cards[0].card.card.info.name);
    setMenuItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(menuItems);
  };

  return (
    <>
      <h3>{menuData}</h3>
      <ul>{menuItems?.map((data) => (<li key={data?.card?.info?.id}>{data.card?.info?.name}</li>))}</ul>
    </>
  );
};

export default RestaurantMenu;
