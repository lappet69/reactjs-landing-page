import { portfolio1, portfolio2, portfolio3 } from "../assets";
import TextTitle from "./TextTitle";

interface IPortfolio {
  id: number;
  product: string;
  title: string;
  desc: string;
  img: string;
}

const Portfolio = () => {
  const portfolios: IPortfolio[] = [
    {
      id: 1,
      product: "Mobile apps",
      title: "ILIOS app (B2B E-commerce",
      desc: "Has a unique selling point where not all companies offer applications for sales, data collection and management",
      img: portfolio1,
    },
    {
      id: 2,
      product: "Website development",
      title: "Home and Living",
      desc: "Albatech helps in creating a website catalog to show brand identities and information in accordance with vision and mission of Home and Living",
      img: portfolio2,
    },
    {
      id: 3,
      product: "Website development",
      title: "Hippo",
      desc: "Albatech help to create e-commerce and company profile for Hippo's Website with realtime transactions and integration with Payment Gateway to accept multiple payment.",
      img: portfolio3,
    },
  ];
  return (
    <div className="flex flex-col justify-center gap-14 p-6 md:px-16">
      <TextTitle
        title="Portfolio"
        text1={`The software that we build `}
        text2={`takes our clients to the next level`}
        styles="text-3xl font-bold"
      />

      <div>
        <div className="flex lg:flex-row flex-col gap-10 justify-center ">
          {portfolios &&
            portfolios.map((item) => (
              <div
                key={item.id}
                className="max-w-none lg:max-w-md  rounded-xl drop-shadow-lg shadow-lg border hover:border-primaryColor"
              >
                <div className="  ">
                  <img
                    src={item?.img}
                    alt=""
                    className="w-full md:h-[320px] rounded-t-xl border-none"
                  />
                </div>
                <div className="flex flex-col gap-3 py-8 ">
                  <p className="ml-4 text-sm font-semibold ">{item.product}</p>
                  <p className="ml-4 text-lg text-primaryColor font-semibold">
                    {item.title}
                  </p>
                  <p className="ml-4 ">{item.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <button className="bg-primaryColor w-fit self-center font-bold px-10 py-3 rounded-full">
        Learn More
      </button>
    </div>
  );
};

export default Portfolio;
