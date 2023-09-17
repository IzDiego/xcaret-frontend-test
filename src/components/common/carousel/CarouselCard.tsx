import React, { useState } from "react";
import Image from "next/image";
import ModalPurchase from "../confirmPurchaseModal/ModalPurchaseIndex";
import { isMobile } from "react-device-detect";

interface ICarouselCardProps {
  imageSrc: string;
  altText?: string;
  title: string;
  description: string;
  action: string[];
  justify?: "start" | "center" | "end";
}

const CarouselCard: React.FC<ICarouselCardProps> = ({
  imageSrc,
  altText = "Image",
  title,
  description,
  action,
  justify = "center",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");
  const reservationDetails = {
    name:title,
    price:2300
  }

  if (isMobile) {
    justify = "center"; 
  }

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[justify];

  const alignItemsClass = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  }[justify];

  const handleClick = (title: string) => {
    setIsVisible(true);
    setTag(title);
  };

  const handleClose = () =>{
    setIsVisible(false)
  }

  return (
    <>
      <ModalPurchase title={tag} isVisible={isVisible} onClose={handleClose} reservationDetails={reservationDetails}/>
      <div
        className={`flex max-w-sm flex-col overflow-hidden rounded-lg shadow-lg ${alignItemsClass}`}
      >
        <div
          className={`flex w-full ${justifyClass} bg-gray-100`}
          style={{ height: "130px" }}
        >
          <Image
            src={imageSrc}
            alt={altText}
            width={100}
            height={100}
            style={{width:'auto', height:'auto'}}
            />
        </div>
        <div className={`px-6 py-4 ${justifyClass}`}>
          <div className="mb-2 text-xl font-bold">{title.toLocaleUpperCase()}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className={`px-6 pb-2 pt-4 ${alignItemsClass}`}>
          {action.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleClick(title)}
              className="text-xl mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition duration-300 hover:bg-blue-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
