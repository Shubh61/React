import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *      - Img
 *      - Name of  Restaurant, Star Rating, Dish Name, Delivery Time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
      return (
            <div className="header">
                  <div className="logo-container">
                        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"/>
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>About Us</li>
                              <li>Contact Us</li>
                              <li>Cart</li>
                        </ul>
                  </div>
            </div>
      )
};

const stylecard = {
      backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
      const { rest_data } = props;
      console.log("Name: ", rest_data.name);
      console.log("Cuisines: ", rest_data.cuisines);
      console.log("Star Rating: ", rest_data.avgRating);
      console.log("Delivery Time: ", rest_data.sla.deliveryTime);
      return (
      <div className="rest-card" style={stylecard}>
            <img 
            className="rest-logo" 
            alt="rest-logo" 
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1024px-KFC_logo.svg.png"/>
            <h3>{rest_data.name}</h3>
            <h4>{rest_data.cuisines.join(", ")}</h4>
            <h4>{rest_data.avgRating} Stars</h4>
            <h4>{rest_data.sla.deliveryTime} mins</h4>
      </div>
      );
};

const rest_obj = {
      "id": "432976",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
      "locality": "Double Road",
      "areaName": "Shanti Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-03 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
};

const Body = () => {
      return (
            <div className="body">
                  <div className="search">Search</div>
                  <div className="rest-cont">
                        <RestaurantCard 
                        rest_data={rest_obj}
                        />   

                        <RestaurantCard 
                        rest_name="Chinese Wok" 
                        cuisine="Chinese, Asian, Tibetan"
                        star_rating="4.4"
                        del_time="40-45 mins"/>       

                        <RestaurantCard 
                        rest_name="Domino's" 
                        cuisine="Pizza, Garlic Bread"
                        star_rating="4.3"
                        del_time="20-25 mins"/>      

                        <RestaurantCard 
                        rest_name="Baskin Robbins" 
                        cuisine="Ice Cream, Desserts"
                        star_rating="4.5"
                        del_time="40-45 mins"/>            
                  </div>
            </div>
      );
};

const AppLayout = () => {
      return (
            <div className="app">
                  <Header/>
                  <Body/>
            </div>
      );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)