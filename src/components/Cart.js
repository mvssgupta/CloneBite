import { useDispatch,useSelector } from 'react-redux';
import {clearCart} from '../utils/cartSlice'
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch();

  const handleClearChat = () => {
    dispatch(clearCart())
  }

  return (
    <div className="text-center">
      <h1 className="text-xl font-extrabold mb-3">Cart</h1>
      {cartItems.length>0 ? 

      <div className="w-6/12 mx-auto">
       <span className="bg-red-500 mt-4 p-2 rounded-md" onClick={handleClearChat}>Clear Cart</span>
      {cartItems?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-1 pt-3 shadow-md border-b-2 border-gray-300 flex justify-between"
        >
          <div className="w-10/12 justify-start">
            <h1 className="font-semibold">{item?.card?.info?.name}</h1>
            <h1 className="text-sm">Rs.{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h1>
            <p className="text-xs mx-1">{item?.card?.info?.description}</p>
          </div>
          <div className="flex items-end justify-end">
          {item.card.info.imageId &&<img className="mb-2 w-16 h-12" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId}/>}
            <span className="bg-green-400 hover:bg-green-700 mx-2 px-2 rounded-md absolute" onClick={() =>handleDelItem(item)}>Del</span>
          </div>
        </div>
      ))}
    </div>
    :<span className="text-center text-2xl">Cart is Empty</span>}
    </div>
  );
};

export default Cart;
