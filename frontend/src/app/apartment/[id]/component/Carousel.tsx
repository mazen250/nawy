"use client";
import React, { useEffect } from "react";
import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#282929",
};

const Index = ({ images }: { images: string[] }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    console.log(images);
  }, [images]);
  return (
    <Carousel afterChange={onChange} draggable arrows>
      {images.map((image, index) => (
        <div>
          <div key={index} className="w-full cursor-grab">
            <Image
              src={image}
              alt={`Apartment Image ${index + 1}`}
              style={contentStyle}
              className=" h-[400px] object-contain "
              width={"100%"}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Index;
