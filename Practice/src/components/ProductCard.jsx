function ProductCard({ image,title, description }) {

  return (
    <div className="p-6 bg-white rounded-xl text-center transition duration-300 hover:bg-gray-300 hover:scale-105  ">

      <img src={image} alt="ai-image"  className=" mx-auto w-full h-70 rounded-xl"/>
      
      <h3 className="text-2xl font-semibold mb-2  ">
        {title}
      </h3>

      <p className="text-base  lg:text-2xl text-gray-400">
        {description}
      </p>

    </div>
  );
}

export default ProductCard;