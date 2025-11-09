import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127"
    );
    const json = await data.json();
    console.log("json", json);
  }

  const [resListIs, setRestListIs] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let resList = resListIs.filter(
              (res) => res.card.card.restaurant.info.avgRating > 4.3
            );
            setRestListIs(resList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resListIs.map((res) => (
          <RestaurantCard key={res.card.card.info.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
