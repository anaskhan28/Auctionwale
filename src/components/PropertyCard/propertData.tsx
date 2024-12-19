"use client";
import React from "react";
import { Property } from "@/types/property";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

// In your JSX

const PropertyData = ({ imageUrl, price, name, location }) => {
  const handleLike = () => {
    console.log("Liked!");
  };

  const handleAddToCart = () => {
    console.log("Added to cart!");
  };

  const handleInterest = () => {
    window.open("https://wa.me/917030304717?text=Hello!%20I%20would%20like%20to%20chat.", "_blank");

    console.log("Interested!");
  };

  const handleViewMore = () => {
    console.log("View more!");
  };

  return (
    <>
      <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
        <div className="relative">
          <Image
            src={imageUrl}
            alt="Property"
            width={500}
            height={300}
            className="w-full"
            layout="responsive"
            objectFit="cover"
          />
          <div className="absolute right-0 top-0 m-2">
            {/* <button onClick={handleLike} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          ❤
          </button> */}
            {/* <button onClick={handleAddToCart} className="bg-blue-500 rounded px-1 py-2 m-1 shadow-lg text-white">
            Add to Cart
          </button> */}
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-gray-800">{name}</div>
          <p className="line-clamp-3 text-sm  text-gray-700 ">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-2 text-blue-500 "
            />
            {location}
          </p>
        </div>
        <div className="flex justify-between gap-2 px-4 pb-2 pt-2">
          <span className="mr-2 inline-block rounded bg-blue-500 px-1 py-2 text-sm font-semibold text-white">
            {" "}
            ₹{price}
          </span>
          <button
            onClick={handleInterest}
            className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700"
          >
            I&apos;m Interested
          </button>
          <button
            onClick={handleViewMore}
            className="rounded border border-blue-500 bg-transparent px-2 py-1 font-bold text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default PropertyData;
