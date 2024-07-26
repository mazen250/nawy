import { Schema, model } from "mongoose";

type IApartment = {
  title: string;
  about: string;
  price: number;
  thumbnail?: string;
  imageGallery?: string[];
  residenceType: string;
  noOfRooms: number;
  noOfBaths: number;
  size: number;
  startPrice: number;
  deliveryIn: string;
  saleType: string;
  finishing: string;
  compound: string;
  developer: string;
  locationLat: number;
  locationLong: number;
  paymentPlan: string;
  paymentDuration: number;
};

const apartmentSchema = new Schema<IApartment>(
  {
    title: { type: String, required: true },
    about: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String },
    imageGallery: { type: [String] },
    residenceType: { type: String, required: true },
    noOfRooms: { type: Number, required: true },
    noOfBaths: { type: Number, required: true },
    size: { type: Number, required: true },
    startPrice: { type: Number, required: true },
    deliveryIn: { type: String, required: true },
    saleType: { type: String, required: true },
    finishing: { type: String, required: true },
    compound: { type: String, required: true },
    developer: { type: String, required: true },
    locationLat: { type: Number, required: true },
    locationLong: { type: Number, required: true },
    paymentPlan: { type: String, required: true },
    paymentDuration: { type: Number },
  },
  { timestamps: true }
);

const Apartment = model<IApartment>("Apartment", apartmentSchema);

export default Apartment;
