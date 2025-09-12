import express from "express";
import { getAllBarbies, getBarbieById } from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbieById)
export default router;