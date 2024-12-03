import express, { Router } from "express";
import * as pagesController from "./../controller/pagesController.js";
const router = express.Router();

router.get("/usina", pagesController.getPage0);
router.get("/coletivo", pagesController.getPage1);
router.get("/timeline", pagesController.getPage2);
router.get("/blog", pagesController.getPage3);

router.get("/agenda", pagesController.getPage4);
router.get("/doe", pagesController.getPage5);

router.get("/loja", pagesController.getPage6);

router.get("/colabore", pagesController.getPage7);
router.get("/apoio-e-patrocinio", pagesController.getPage8);
router.get("/contato", pagesController.getPage9);
router.get("/sign-in", pagesController.getPage10);

export default router;