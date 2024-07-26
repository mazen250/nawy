import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { CiRuler } from "react-icons/ci";
import { FaBath, FaBed, FaPhoneAlt } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

function Info({ data }: { data: any }) {
  return (
    <div className="container mx-auto overflow-hidden">
      <div className="md:mx-auto mx-[5%]">
        <h1 className="text-2xl font-bold text-primary mt-10">
          {data?.residenceType}
        </h1>
        <h1 className="text-2xl font-semibold text-secondary mt-4">
          {data?.title}
        </h1>
        <h1 className="text-2xl font-semibold  mt-4">
          price {data?.price.toLocaleString()} EGP
        </h1>
        <div className="flex items-center mt-4">
          <span className="text-lg text-secondary mr-1 flex flex-row items-center">
            <FaBed size={25} className="mr-2" /> {data?.noOfRooms} Beds
          </span>
          <Divider type="vertical" className="bg-primary" />
          <span className="text-lg text-secondary flex flex-row items-center ">
            <FaBath size={20} className="mr-2" /> {data?.noOfBaths} Baths
          </span>
          <Divider type="vertical" className="bg-primary" />
          <span className="text-lg text-secondary flex flex-row items-center ">
            <CiRuler size={25} className="mr-2" /> {data?.size} m²
          </span>
        </div>
        {data?.paymentPlan == "Installments" && (
          <div className="flex flex-col items-center mt-10 bg-secondary p-20 rounded-lg w-fit">
            <h1 className="text-lg text-white mr-1 flex flex-row items-center">
              Installment up to
            </h1>
            <h1 className="text-2xl font-bold text-white">
              {data?.paymentDuration} years
            </h1>
          </div>
        )}
        <div className="flex flex-row items-center my-8">
          <Link
            href={`https://wa.me/+201005785550`}
            className="bg-green-500 p-2 ml-2 text-white flex flex-row items-center px-4 rounded-lg w-36  justify-center"
            target="_blank"
          >
            <SiWhatsapp className="text-white mr-2" size={20} /> WhatsApp
          </Link>
          <Link
            href={`tel:+201005785550`}
            className="bg-placeholder p-2 ml-2  flex flex-row items-center px-4 rounded-lg w-36  justify-center text-primary"
            target="_blank"
          >
            <FaPhoneAlt className="mr-2" size={20} /> Call
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
