const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      {/* overlay */}
      <div className="max-h-[500px] relative">
        <div className="absolute text-gray-200 max-h-[500px] w-full h-full bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 txet-4xl sm:text-5xl md:txet-6xl lg:text-7xl font-bold">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-600">Foods</span>Delivered
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
