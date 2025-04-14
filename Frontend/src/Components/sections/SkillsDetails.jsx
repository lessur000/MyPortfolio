import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import useToggle from "../../Hooks/useToggle"; // Import useToggle

const SkillsDetails = ({ title, description }) => {
  const { toggle, handleToggle } = useToggle(); // Use toggle hook

  return (
    <div className="w-[300px] mx-auto p-2 sm:p-0">
      <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
        <h1 className="text-white text-lg">{title}</h1>
        <button onClick={handleToggle}>
          {toggle ? <FaArrowDown className="text-white" /> : <FaArrowRight className="text-white" />}
        </button>
      </div>

      {toggle && (
        <div className="mt-2 bg-gray-900 p-3 rounded-lg text-gray-400 text-sm">
          {description}
        </div>
      )}
    </div>
  );
};

export default SkillsDetails;
