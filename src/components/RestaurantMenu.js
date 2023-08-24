import { useParams } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import ShimmerUI from './ShimmerUI';
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuHook(resId);

  if (resInfo === null) return <ShimmerUI />;

  const { name } = resInfo?.cards[0]?.card?.card?.info;

  const data = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  let menuItems;
  if (data?.cards[1]?.card?.card?.itemCards) {
    menuItems = data.cards[1].card.card.itemCards;
  } else if (data?.cards[2]?.card?.card?.itemCards) {
    menuItems = data.cards[2].card.card.itemCards;
  }

  return (
    <>
      <h1 className="Restaurant-name">{name}</h1>
      <ul className="menu-items">
        {menuItems?.map((data) => (
          <MenuItemCard
            key={data?.card?.info?.id}
            props={data?.card?.info}
          ></MenuItemCard>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
