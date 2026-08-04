import { Router } from "express";
import {apiGetUser,apiCreateUser,apiLoginUser} from "./api.controler";

const router = Router();
router.get("/", apiGetUser );
router.post("/", apiCreateUser);
router.put("/login", apiLoginUser);

export { router };
