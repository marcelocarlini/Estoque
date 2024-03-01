import express from "express";
import { getEquips } from "../controllers.equip.js";

const router = express.Router()

router.get("/", getEquips)

export default router

