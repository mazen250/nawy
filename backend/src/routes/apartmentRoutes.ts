import { Router } from "express";
import {
  createApartment,
  getApartments,
  getApartmentById,
  //   updateApartment,
  //   deleteApartment,
} from "../controllers/apartmentController";

const router = Router();

router.post("/", createApartment);
router.get("/", getApartments);
router.get("/:id", getApartmentById);
// router.put("/:id", updateApartment);
// router.delete("/:id", deleteApartment);

export default router;
