import { useParams } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import ShimmerForMenu from './ShimmerForMenu';
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook';
import ResAccordianComp from './ResAccordianComp';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuHook(resId);

  if (resInfo === null) return <ShimmerForMenu></ShimmerForMenu>;

  const { name } = resInfo?.cards[0]?.card?.card?.info;

  const data = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories = data?.cards?.filter((item) => item.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div>
      <h1 className="text-center font-bold text-2xl py-2">{name}</h1>
      <div>
        {categories.map((data)=> (<ResAccordianComp data={data} key={data.card.card.title}/>))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
