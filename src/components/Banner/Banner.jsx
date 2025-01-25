

const Banner = () => {
    return (
        <div className="relative w-full mt-16 rounded-3xl overflow-hidden">
      <img
        src="/src/assets/image/banner.jpg" 
        alt="Banner"
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover "
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex
       items-center  justify-center w-80%">
        <div className="flex-col gap-8 text-center">
        <h1 className="text-white text-6xl item-center font-bold gap-2">
        Discover an exceptional cooking
        <br />
        class tailored for you!
        </h1>
        <p className="text-white  item-center mt-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding
            <br /> problems to become an exceptionally well world-class Programmer.</p>
        <div className="mt-4 flex items-center justify-center space-x-4">
          <button className="btn btn-active btn-accent bg-green-600 text-black font-bold hover:bg-green-800 transition rounded-full">
            Explore Now
          </button>
          <button className="btn btn-outline text-white rounded-full">
           Our Feedback
          </button>
        </div>
        </div>

        
      </div>
    </div>
       
    );
};

export default Banner;