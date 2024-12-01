import express, { Router } from "express";
import * as pagesController from "./../controller/pagesController.js";
const router = express.Router();

router.get("/", pagesController.getPage1);
router.get("/coletivo", pagesController.getPage2);
router.get("/timeline", pagesController.getPage3);
router.get("/blog", pagesController.getPage4);
router.get("/eventos", pagesController.getPage5);
router.get("/doe", pagesController.getPage6);
router.get("/apoio-e-patrocinio", pagesController.getPage7);
router.get("/contatos", pagesController.getPage8);
router.get("/sign-in", pagesController.getPage9);
router.get("/sign-up", pagesController.getPage10);
router.get("/recovery", pagesController.getPage11);
export default router;