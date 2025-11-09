import { CARD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  console.log("resData", resList);
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img
        src={`${CARD_LOGO}${resList.card.card.info.imageId}`}
        alt={resList.card.card.info.name}
        className="res-logo"
      />
      <h3>{resList.card.card.restaurant.info.name}</h3>
      <h4>{resList.card.card.restaurant.info.cuisines.join(", ")}</h4>
      <h4>₹{resList.card.card.info.price / 100}</h4>
      <h4>{resList.card.card.restaurant.info.avgRating}</h4>
      <h4>{resList.card.card.restaurant.info.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
