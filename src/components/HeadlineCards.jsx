

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="relative  rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold pt-4 px-2 text-2xl">
            {"Sun's Out BOGO's Out"}
          </p>
          <p className="px-2">Through 8/6</p>
          <button className="border-white bg-white absolute text-black mx-2  bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl "
        />
      </div>
      <div className="relative  rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold pt-4 px-2 text-2xl">New Resturants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white absolute text-black mx-2  bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover  rounded-xl "
        />
      </div>
      <div className="relative  rounded-xl">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold pt-4 px-2 text-2xl">We Deliver Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white absolute text-black mx-2  bottom-4">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt=""
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default HeadlineCards