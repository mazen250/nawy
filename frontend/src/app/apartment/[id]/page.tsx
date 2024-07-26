"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Carousel from "./component/Carousel";
import axios from "axios";
import Apartment from "@/types/Apartment";
import Info from "./component/Info";
import { API } from "@/endpoints/api";
function page() {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    axios
      .get(`${API.BASE_URL}/${API.APARTMENT_DETAILS}/${id}`)
      .then((res) => {
        setApartment(res.data);
        console.log(res.data.thumbnail);
        const images = [res.data.thumbnail, ...res.data.imageGallery];
        setImages(images);
        console.log(images);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <Carousel images={images} />
      <Info data={apartment} />
    </div>
  );
}

export default page;
