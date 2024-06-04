import React from "react";
import { randomImagesSet1 } from "../utils/images.ts";
import Card from "./Card.tsx";

const SmallCarouselAnimated = () => {
  return (
    <div className="bg-amber-300 p-10">
      <div className="absolute left-0 flex gap-4">
        {randomImagesSet1.map((image, index) => (
          <Card image={image.path} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SmallCarouselAnimated;
