import express from "express";

import { router as TestRoute } from "./api/api.routes";
import { router as UserRoutes } from "./api/User/api.routes";

const router = express.Router();

/* v1 routes */
router.use("/", TestRoute);
router.use("/user", UserRoutes);

export default router;