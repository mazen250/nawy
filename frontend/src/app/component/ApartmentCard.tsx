import React from "react";
import { useRouter } from "next/router";
import { FaBath, FaBed, FaPhoneAlt } from "react-icons/fa";
import { Divider, Image } from "antd";
import { CiRuler } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import Apartment from "@/types/Apartment";

const ApartmentCard = ({ item }: { item: Apartment }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      <Image className="w-full" src={item.thumbnail} alt={item.residenceType} />
      <Link href={`/apartment/${item._id}`}>
        <div className="px-6 ">
          <div className="font-semibold text-xl mb-2">{item.residenceType}</div>
          <p className="text-gray-700 text-base">{item.compound}</p>
          <div className="flex items-center">
            <span className="text-sm text-secondary mr-1 flex flex-row items-center">
              <FaBed /> {item.noOfRooms} Beds
            </span>
            <Divider type="vertical" className="bg-primary" />
            <span className="text-sm text-secondary flex flex-row items-center ">
              <FaBath /> {item.noOfBaths} Baths
            </span>
            <Divider type="vertical" className="bg-primary" />
            <span className="text-sm text-secondary flex flex-row items-center ">
              <CiRuler /> {item.size} m²
            </span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-row justify-between items-center">
          <span className="text-2xl text-black font-semibold">
            ${item.price.toLocaleString()} EGP
          </span>
          <div className="flex flex-row items-center mb-4">
            <Link
              href={`tel:+201005785550`}
              className="bg-placeholder rounded-full p-2"
            >
              <FaPhoneAlt className="text-primary" size={20} />
            </Link>
            <Link
              href={`https://wa.me/+201005785550`}
              className="bg-green-500 rounded-full p-2 ml-2"
            >
              <SiWhatsapp className="text-white" size={20} />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ApartmentCard;
