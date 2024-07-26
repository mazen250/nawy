import React, { useEffect, useState } from "react";
import axios from "axios";
import ApartmentCard from "../component/ApartmentCard";
import Apartment from "@/types/Apartment";
import { API } from "@/endpoints/api";

const Apartments = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getApartments = async () => {
    try {
      const response = await axios.get(`${API.BASE_URL}/${API.APARTMENTS}`);
      setApartments(response.data.apartments);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-row justify-between items-center py-2">
        <h1 className="text-3xl font-bold text-primary mt-10 mb-5">{title}</h1>
        <h2 className="text-sm text-primary">{subtitle}</h2>
      </div>
      <div className="pb-15">
        {loading && (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-primary">Loading...</h1>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center">
            <p className="text-lg text-red-500">{error.message}</p>
          </div>
        )}
        {!loading && apartments.length === 0 ? (
          <div className="flex justify-center items-center">
            <p className="text-lg text-primary">No apartments available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {apartments.map((item: Apartment, index: number) => (
              <ApartmentCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apartments;
