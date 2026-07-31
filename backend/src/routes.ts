import express from "express";

import { router as ApiRoutes } from "./api/api.routes";

const router = express.Router();

/* v1 routes */
router.use("/", ApiRoutes);

export default router;