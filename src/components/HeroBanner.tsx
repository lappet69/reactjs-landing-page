import { heroBanner } from "../assets";

const HeroBanner = () => {
  return (
    <div className="w-full h-[70vh] bg-white md:h-[calc(100vh-100px)] relative flex justify-center md:justify-between ">
      <div className="flex  w-full flex-col text-center md:items-start md:ml-16 lg:ml-32 justify-center items-center  z-10  md:absolute top-0 left-0 h-full">
        <p className=" md:bg-white  text-5xl lg:text-7xl py-5 font-bold flex md:w-fit md:pr-16 ">
          Build or scale up
        </p>
        <p className="text-4xl lg:text-6xl tracking-wider md:bg-white ,md:pr-16 py-5">
          your development team
        </p>
        <p className="text-2xl tracking-wider flex flex-col md:flex-row items-center gap-4 my-4">
          <span className="text-headingColor relative before:absolute before:rounded-lg  before:w-20 before:h-1 before:-bottom-1 before:left-0 before:bg-primaryColor transition-all ease-in-out duration-100 mr-24"></span>
          in weeks, not months
        </p>
        <button className="bg-primaryColor font-semibold w-fit px-16 py-4 rounded-full ">
          Book now
        </button>
      </div>

      <div className="absolute w-[200%] h-full bg-overlay z-[1] "></div>
      <img
        src={heroBanner}
        alt="banner"
        className=" absolute w-[200%] md:relative md:max-w-xl lg:max-w-7xl md:w-full ml-auto h-full md:-mt-[13.5rem] lg:mt-0 md:object-contain object-cover  object-center-left"
      />
    </div>
  );
};

export default HeroBanner;
