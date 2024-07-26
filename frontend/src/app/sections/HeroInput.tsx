import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React from "react";

function HeroInput() {
  return (
    <div className="flex flex-col mx-[5%]">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
        Find Your New Home
      </h1>
      <h1 className="text-white text-normal md:text-xl font-light mb-10">
        Search & compare among 5000+ properties and 500+ compounds or list your
        property for sale
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center p-10 bg-white/80 rounded-lg">
        <Input
          className="col-span-8 md:col-span-5 h-14 md:placeholder:text-lg placeholder:text-secondary border-secondary"
          placeholder="Area, Compound, Real Estate Developer"
        />
        <Select
          className="col-span-8 md:col-span-2 h-14 "
          options={[
            { value: "1", label: "Apartment" },
            { value: "2", label: "House" },
            { value: "3", label: "Land" },
            { value: "4", label: "Villa" },
            { value: "5", label: "Office" },
            { value: "6", label: "Shop" },
          ]}
          placeholder="Property Type"
        />
        <Select
          className="col-span-8 md:col-span-2 h-14 border-secondary"
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
          ]}
          placeholder="Bedrooms"
        />
        <Select
          className="col-span-8 md:col-span-2 h-14 border-secondary text-2xl"
          options={[
            { value: "1", label: "Less than 1M" },
            { value: "2", label: "1M - 2M" },
            { value: "3", label: "2M - 3M" },
            { value: "4", label: "3M - 4M" },
            { value: "5", label: "4M - 5M" },
            { value: "6", label: "5M - 6M" },
          ]}
          placeholder="Price"
        />
        <Button className="col-span-8 md:col-span-1 h-14 bg-primary text-white ">
          Search
        </Button>
      </div>
    </div>
  );
}

export default HeroInput;
