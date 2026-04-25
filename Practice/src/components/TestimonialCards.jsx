import React from "react";

function TestimonialCards({ image, name, role, feedback }) {
  return (
    <div className="flex flex-col items-center bg-white text-center p-4 sm:p-6 md:p-8   rounded-xl shadow-md transition duration-300 hover:scale-105 gap-4">

      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
      />

      <p className="text-gray-600 text-sm sm:text-base lg:text-2xl leading-relaxed">
        "{feedback}"
      </p>

      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
        {name}
      </h3>

      <span className="text-sm lg:text-2xl  md:text-gray-500  lg:text-gray-600">
        {role}
      </span>

    </div>
  );
}

export default TestimonialCards;