import {
  androidImg,
  cmsImg,
  digitalImg,
  maintenanceImg,
  paymentImg,
  webImg,
} from "../assets";
import { IPackage } from "../interface";

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
export const fetchService = () => {
  const data = Promise.resolve(packages).then((res) => res);
  return data;
};

export const postData = async (url: string, data: any) => {
  return await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const fetchUser = (): any => {
  const userInfoString = localStorage.getItem("user");
  let userInfo: any = null;

  if (userInfoString && userInfoString !== "undefined") {
    userInfo = JSON.parse(userInfoString);
  } else {
    localStorage.clear();
  }

  return userInfo;
};
