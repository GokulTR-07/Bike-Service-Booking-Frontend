import { RiMotorbikeFill } from "react-icons/ri";
import { MdEngineering, MdVerifiedUser } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/aboutus",
  },
  {
    title: "Services",
    url: "/products",
  },
  {
    title: "Offers",
    url: "/events",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Pickup & Drop",
    Description: "over 2km to 10km",
    icon: (
      <RiMotorbikeFill size={40} className="text-red-600"/>
    ),
  },
  {
    id: 2,
    title: "Warranty",
    Description: "upto 10 days",
    icon: (
      <MdVerifiedUser size={40} className="text-red-600"/>
    ),
  },
  {
    id: 4,
    title: "Trained Mechanics",
    Description: "professional workers",
    icon: (
      <MdEngineering size={40} className="text-red-600"/>
    ),
  },
  {
    id: 5,
    title: "Genuine Spare Parts",
    Description: "Buying from the brand itself",
    icon: (
      <PiEngineFill size={40} className="text-red-600"/>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "General Service",
    subTitle: "",
    image_Url: 
    "https://us.123rf.com/450wm/yupiramos/yupiramos2307/yupiramos230700447/209408863-man-repairing-his-motorcycle.jpg?ver=6",
  },
  {
    id: 2,
    title: "periodic Service",
    subTitle: "",
    image_Url:
      "https://www.apnamechanic.com/wp-content/uploads/2023/01/AP-Mechanic-Spare-Parts.jpg",
  },
  {
    id: 3,
    title: "Full Service",
    subTitle: "",
    image_Url:
      "https://bromech.devakya.com/wp-content/uploads/2023/04/bike.gif",
  },
  {
    id: 4,
    title: "Engine Repair",
    subTitle: "",
    image_Url:
      "https://png.pngtree.com/png-clipart/20230217/original/pngtree-cool-motorcycle-engine-illustration-image-png-image_8957342.png",
  },
  {
    id: 5,
    title: "Accidental Repair",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/1216086843/vector/vector-character-mechanic-repairs-motorcycle.jpg?s=612x612&w=0&k=20&c=xNFFXUT5pmfYJ21_j13VmQQSpca-8RTBsAUfPk6QTq4=",
  },
  {
    id: 6,
    title: "Spare Parts",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/497859268/vector/vector-motorcycle-spares-concept.jpg?s=612x612&w=0&k=20&c=lVbDgX4KY195IXNMIGqA9UYsLJAsYJ6EAzQKE7Hoc9c=",
  },
  {
    id: 7,
    title: "Bike Batteries",
    subTitle: "",
    image_Url: "https://cdn-icons-png.flaticon.com/512/5752/5752366.png",
  },
  {
    id: 8,
    title: "Tyres",
    subTitle: "",
    image_Url:
      "https://thumbs.dreamstime.com/b/bike-wheel-icon-cartoon-vector-motorcycle-equipment-part-241395763.jpg",
  },
  {
    id: 9,
    title: "Vehicle Washing / Polishing",
    subTitle: "",
    image_Url:
      "https://t3.ftcdn.net/jpg/00/50/66/26/360_F_50662663_JulJGTrK8hOfSfW5RdNbOEekz57iKGmT.jpg",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    image_Url:
      "https://media.istockphoto.com/id/859605162/vector/a-classic-garage-for-motorcycle-repairs-old-biker-master-at-the-front.jpg?s=612x612&w=0&k=20&c=3B8lvGQHcrnfQxkmFxa9osMn_Kp-Mcqo1XylmGV1pIU=",
  },
];


export const footerProductLinks = [
  {
    name: "About us",
    link: "/aboutus"
  },
  {
    name: "Careers",
  },
  {
    name: "Store Locations",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "General Service",
  },
  {
    name: "Periodic Service",
  },
  {
    name: "Full Service",
  },
  {
    name: "Engine Repair",
  },
  {
    name: "Spare Parts",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];
