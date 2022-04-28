import { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5, style = {} }) => {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((e, i) => (
        <Star
          selected={selectedStars >= i + 1}
          key={i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};
export default StarRating;
