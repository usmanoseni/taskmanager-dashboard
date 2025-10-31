import React from "react";
import PropTypes from "prop-types";
import PortfolioImage from "../assets/Images/Portfolio _ Freepik.jpg";
import Button from "./button.jsx";

export default function Card() {
  return (
    <div className="flex max-w-xl h-full bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
  <img
    src={PortfolioImage}
    alt="Card Image"
    className="w-42 h-full object-cover"
  />
  <div className="p-5">
    <h3 className="text-md font-semibold text-gray-800 dark:text-dark-text mb-2">
      The Director
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi,
          inventore qui eius praesentium minus voluptates, dolor quibusdam suscipit totam cum veniam ea laboriosam!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sunt odit numquam, minima voluptate assumenda!
    </p>
    <div className="flex justify-end">
      <Button variant="primary" size="xs">
        Subscribe
      </Button>
    </div>
  </div>
</div>

  );
}


