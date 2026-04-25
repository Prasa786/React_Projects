function Card({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl text-center transition duration:300 hover:bg-gray-300 hover:scale-105  ">
      
      <h3 className="text-2xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-base text-grey-200">
        {description}
      </p>

    </div>
  );
}

export default Card;