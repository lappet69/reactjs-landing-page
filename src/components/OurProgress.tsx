import TextTitle from "./TextTitle";

const OurProgress = () => {
  const items = [
    { total: 1000, name: "Designs" },
    { total: 30, name: "Products" },
    { total: 58, name: "Website Development" },
  ];

  return (
    <div className="flex flex-col bg-black w-full py-12 gap-12 mt-24 ">
      <TextTitle
        text1="Our Progress Comes with a Collaboration Between"
        text2="Creativity,Ideas,and Technology"
        styles="text-primaryColor text-2xl md:text-4xl font-bold tracking-tight"
      />

      <div className="flex flex-col md:flex-row items-center text-center justify-around gap-6">
        {items?.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center md:gap-4">
            <p className="text-white text-5xl tracking-tight">{item.total}+</p>
            <p className="text-white text-3xl ">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProgress;
