import { Router } from "express";
import {apiGet} from "./api.controller";

const router = Router();
router.get("/", apiGet);

export { router };
