import { useEffect, useState,useContext } from "react";
import mockMenu , { 
  mcdonaldsMenu, 
  burgerKingMenu, 
  dominosMenu, 
  subwayMenu 
} from "../utils/mockMenu";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import UserContext from "../utils/UserContext";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showIndex, setShowIndex] = useState(null);
  const { loggedInUser, setUserName } = useContext(UserContext); // MOVED HERE - FIXED!
  
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = () => {
  try {
    setLoading(true);
    
    // Use mock data based on restaurant ID
    let menuData;
    if (resId === "1") {
      menuData = mockMenu;
    } else if (resId === "2") {
      menuData = mcdonaldsMenu;
    } else if (resId === "3") {
      menuData = burgerKingMenu;
    } else if (resId === "4") {
      menuData = dominosMenu;
    } else if (resId === "5") {
      menuData = subwayMenu;
    } else {
      menuData = mockMenu;
    }
    
    // Process data immediately (no delay)
    const info = menuData?.data?.cards?.[0]?.card?.card?.info;
    setRestaurantInfo(info);
    
    const categories = menuData?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCategories = categories.filter(
      (category) => 
        category?.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    setMenuCategories(itemCategories);
    setLoading(false);
    
  } catch (error) {
    console.error("Error fetching menu:", error);
    setLoading(false);
  }
};

  if (loading) {
    return <Shimmer />;
  }

  if (!restaurantInfo) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl">Restaurant not found</h2>
      </div>
    );
  }

  return (
    <div className="restaurant-menu max-w-4xl mx-auto p-4">
      <div className="restaurant-header border-b pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{restaurantInfo.name}</h1>
            <p className="text-gray-600 mt-2">{restaurantInfo.cuisines?.join(", ")}</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <div className="flex items-center text-green-600 font-bold">
              <span className="text-xl">⭐</span>
              <span className="ml-1">{restaurantInfo.avgRating}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{restaurantInfo.costForTwoMessage}</p>
          </div>
        </div>
        <div className="mt-4">
          <label>UserName: </label>
          <input 
            className="p-2 ml-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="menu-categories">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        
        {menuCategories.length === 0 ? (
          <p className="text-center text-gray-500">No menu items available</p>
        ) : (
          <div className="space-y-4">
            {menuCategories.map((category, index) => (
              <RestaurantCategories
                key={category?.card?.card?.title || index}
                data={category?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                isLast={index === menuCategories.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;