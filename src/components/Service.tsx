import {
  androidImg,
  angular,
  aws,
  cloud,
  cmsImg,
  css,
  digitalImg,
  html5,
  maintenanceImg,
  mongodb,
  mysql,
  nodejs,
  paymentImg,
  php,
  psql,
  python,
  reactjs,
  ruby,
  sqlserver,
  webImg,
} from "../assets/";

import { IPackage } from "../interface";
import Card from "./Card";
import OurProgress from "./OurProgress";
import Tech from "./Tech";
import TextTitle from "./TextTitle";

const Service = () => {
  const packages: IPackage[] = [
    {
      id: 1,
      title: "Web development",
      desc: "High-performance website to reach out more your potential customer",
      img: webImg,
    },
    {
      id: 2,
      title: "Mobile apps development",
      desc: "To accelerate your business process",
      img: androidImg,
    },
    {
      id: 3,
      title: "Digital product design",
      desc: "Complete digital product creations from UX prototyping to final UI designs",
      img: digitalImg,
    },
    {
      id: 4,
      title: "Maintenance",
      desc: "Make sure your digital environment keep online and updated",
      img: maintenanceImg,
    },
    {
      id: 5,
      title: "CMS development",
      desc: "You can update your website content yourself",
      img: cmsImg,
    },
    {
      id: 6,
      title: "Intergrated payment gateway",
      desc: "Simplify the payment system with just one step",
      img: paymentImg,
    },
  ];

  const techs: string[] = [
    aws,
    cloud,
    angular,
    css,
    html5,
    nodejs,
    php,
    python,
    reactjs,
    ruby,
    mongodb,
    mysql,
    psql,
    sqlserver,
  ];

  return (
    <div className="flex flex-col p-6 md:p-0 mt-10">
      <TextTitle
        title="Complete Package"
        text1="From product design to software continues delivery"
        styles=" font-bold text-shadow-xl text-2xl md:text-4xl"
      />

      <div className="w-full flex flex-col md:grid grid-cols-3 gap-6  mt-16 md:p-12 lg:px-32">
        {packages.map((item, idx) => (
          <Card key={idx} packages={item} />
        ))}
      </div>
      <div className=" w-full flex flex-wrap justify-evenly md:grid grid-cols-6  gap-10  md:p-12">
        {techs.map((item, idx) => (
          <Tech key={idx} techs={item} />
        ))}
      </div>
      <OurProgress />
    </div>
  );
};

export default Service;
