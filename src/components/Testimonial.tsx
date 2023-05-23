import { bgTetismonial } from "../assets";
import Clients from "./Clients";
import TextTitle from "./TextTitle";
const Testimonial = () => {
  return (
    <div className="my-10 w-full">
      <TextTitle
        title="Testimonial"
        text1="What clients love in working"
        text2="with Albatech Team"
        styles="text-3xl font-semibold"
      />
      <div className="relative">
        <img src={bgTetismonial} alt="" className="bg-cover" />
      </div>
      <Clients />
      <div className="flex justify-center relative ">
        <div className="w-full flex flex-col sm:bg-primaryColor sm:border border-black rounded-lg mx-24  items-center py-6 gap-6">
          <p className="text-center">
            Is software important for your business?
          </p>
          <p className="text-3xl text-center">Build it with Albatech</p>
          <button className="outline outline-primaryColor hover:bg-primaryColor sm:outline-black outline-1 px-10 py-3 rounded-full font-semibold">
            Consultant Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
