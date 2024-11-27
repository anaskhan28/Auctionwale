"use client";
import React from "react";
import PropertyData from "./propertData";
import property from "property.json";
import "@/styles/index.css";

import Slider from "react-slick";

const PropertiesList = () => {
  // Function to format price
  const formatPrice = (price) => {
    if (price >= 10000000) {
      return (price / 10000000).toFixed(2) + " crore";
    } else if (price >= 100000) {
      return (price / 100000).toFixed(2) + " lakh";
    } else {
      return price.toString();
    }
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="p-8">
      <h1 className="mt-8 text-center text-4xl font-bold">
        Recently Added Properties
      </h1>
      <Slider {...settings} className="mt-8">
        {property.map((property) => {
          const {
            ID,
            Image_Url,
            Property_Type,
            Property_Address,
            Current_Auction_Reserve_Price,
          } = property;

          // Validation to skip invalid data
          if (
            !ID ||
            !Property_Type ||
            Property_Type.toLowerCase() === "link" ||
            !Property_Address ||
            Property_Address.toLowerCase() === "link" ||
            !Current_Auction_Reserve_Price ||
            isNaN(Current_Auction_Reserve_Price) ||
            Current_Auction_Reserve_Price <= 0
          ) {
            return null;
          }

          // Render PropertyData inside each slide
          return (
            <div key={ID} className="p-4">
              <PropertyData
                imageUrl={Image_Url}
                name={Property_Type}
                location={Property_Address}
                price={formatPrice(Current_Auction_Reserve_Price)}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PropertiesList;
