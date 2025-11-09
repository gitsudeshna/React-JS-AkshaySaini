import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



// Low level Design before starting the project
// Header
//  - Logo
//  - Nav Items

// Body
//  - Search
//  - RestaurantContainer
//  - Restaurant Card
//  - Image
//  - Name of restaurant - Cuisine, - Star rating, -Delivery time,

// Footer
//  - Copy right
//  - Links
//  - Address
//  - Contacts
