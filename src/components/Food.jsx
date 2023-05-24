import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* filter type*/}
        <div>
          <p className="text-gray-700 font-bold">Filter Type</p>
          <div className="flex justify-between flex-wrap space-x-2">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("burger")}
            >
              Burger
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("salad")}
            >
              Salads
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="text-gray-700 font-bold">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$")}
            >
              $
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$")}
            >
              $$
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$$")}
            >
              $$$
            </button>
            <button
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterPrice("$$$$")}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* dislay foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between  px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
