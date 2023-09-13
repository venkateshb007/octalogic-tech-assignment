import React from "react"; // Import React if not already imported
import profile from "../assets/profile.png";

interface CardProps {
  num: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ num, desc }) => {
  return (
    <div className="flex border rounded-lg shadow-lg w-60 justify-between bg-white p-2 pt-4 h-32">
      <img
        className="h-9 rounded-full p-2 bg-green-200 mt-4"
        src={profile}
        alt="Profile"
      />
      <div className="pr-2">
        <h1 className="text-xl text-left  font-semibold">{num}</h1>
        <p className="text-sm text-gray-400">{desc}</p>
        <div className="text-right mt-6 text-[#901E75]">view</div>
      </div>
    </div>
  );
};

export default Card;