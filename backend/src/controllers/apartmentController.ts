import { Request, Response } from "express";
import Apartment from "../models/Apartment";

// Create a new apartment
export const createApartment = async (req: Request, res: Response) => {
  try {
    const apartment = new Apartment(req.body);
    await apartment.save();
    res.status(201).send(apartment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all apartments with pagination
export const getApartments = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const apartments = await Apartment.find()
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    const total = await Apartment.countDocuments();

    res.status(200).send({
      apartments,
      totalPages: Math.ceil(total / Number(limit)),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single apartment by ID
export const getApartmentById = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) {
      return res.status(404).send();
    }
    res.status(200).send(apartment);
  } catch (error) {
    res.status(500).send(error);
  }
};

//in case of additional crud operations

// Update an apartment by ID
// export const updateApartment = async (req: Request, res: Response) => {
//   try {
//     const apartment = await Apartment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!apartment) {
//       return res.status(404).send();
//     }
//     res.status(200).send(apartment);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// // Delete an apartment by ID
// export const deleteApartment = async (req: Request, res: Response) => {
//   try {
//     const apartment = await Apartment.findByIdAndDelete(req.params.id);
//     if (!apartment) {
//       return res.status(404).send();
//     }
//     res.status(200).send(apartment);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
