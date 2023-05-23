import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IPackage } from "../interface";

interface Props {
  packages: IPackage;
}

const Card = ({ packages }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="h-full rounded-lg border border-[gray/75] p-10 md:p-4 lg:p-5 justify-between gap-5 cursor-pointer hover:border-primaryColor">
      <div
        className="flex flex-col  items-center md:items-start"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="h-15 md:w-15 ">
          <img src={packages.img} alt="" className="h-full" />
        </div>
        <div className="flex flex-col h-full items-center text-center md:text-left md:items-start mt-6">
          <p className="flex md:text-lg lg:text-xl text-primaryColor font-semibold items-center gap-2">
            {packages.title} {isHover && <BsArrowRight />}
          </p>
          <p>{packages.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
