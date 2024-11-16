import express, { Router } from "express";
import { mainController } from "./../controller/mainController.js";
const router = express.Router();

router.get("/", mainController.getSlash);


export default router;