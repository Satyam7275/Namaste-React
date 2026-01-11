import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState,useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/uesOnlineStatus";
import UserContext from "../utils/UserContext";


// Mock restaurant data as fallback
const mockRestaurants = [
  {
    info: {
      id: "1",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: 4.2,
      promoted: true
    }
  },
  {
    info: {
      id: "2",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      cuisines: ["Burgers", "American"],
      costForTwo: 35000,
      deliveryTime: 30,
      avgRating: 4.5,
      promoted: false
    }
  },
  {
    info: {
      id: "3",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "Fast Food"],
      costForTwo: 30000,
      deliveryTime: 25,
      avgRating: 4.0,
      promoted: true
    }
  },
  {
    info: {
      id: "4",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      cuisines: ["Pizzas", "Italian"],
      costForTwo: 50000,
      deliveryTime: 35,
      avgRating: 4.3,
      promoted: false
    }
  },
  {
    info: {
      id: "5",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      cuisines: ["Sandwiches", "Healthy Food"],
      costForTwo: 25000,
      deliveryTime: 20,
      avgRating: 4.6,
      promoted: false
    }
  }
];



const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const { loggedInUser, setUserName } = useContext(UserContext); 
    const OnlineStatus=useOnlineStatus();
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
     
  
      setTimeout(() => {
        setListOfRestaurants(mockRestaurants);
        setFilteredRestaurant(mockRestaurants);
        setLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      
   
      setListOfRestaurants(mockRestaurants);
      setFilteredRestaurant(mockRestaurants);
      setLoading(false);
    }
  };

  if (OnlineStatus === false) {
    return (
      <h1 className="text-center p-8 text-2xl">
        Looks like you're offline!! Please check your internet connection
      </h1>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border p-2 border-solid border-black rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search restaurants..."
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:bg-green-200"
            onClick={() => {
              if (searchText.trim() === "") {
                
                setFilteredRestaurant(listOfRestaurants);
              } else {
                const filtered = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filtered);
              }
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
           
              setSearchText("");
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            Clear
          </button>
        </div>
        
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.0
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants (4.0+)
          </button>
          
          <button
            className="px-4 py-2 ml-4 bg-blue-100 rounded-lg hover:bg-blue-200"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            Show All
          </button>
          
          <div className="ml-8 flex items-center">
            <label className="mr-2">UserName :</label>
            <input
              className="p-2 border border-black rounded"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>
      </div>
      
      {filteredRestaurant.length === 0 ? (
        <div className="text-center p-8">
          <h2 className="text-xl mb-4">No restaurants found matching your criteria</h2>
          <button
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
              setSearchText("");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show All Restaurants
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
            restaurant.info.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant}
              />
            )
          ))}
        </div>
      )}
      
   
    </div>
  );
};

export default Body;