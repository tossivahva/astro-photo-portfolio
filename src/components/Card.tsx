import React from "react";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative h-[200px]  bg-slate-400  min-w-[200px]">
      <img className="w-full h-full object-cover" src={image} />
    </div>
  );
};

export default Card;
