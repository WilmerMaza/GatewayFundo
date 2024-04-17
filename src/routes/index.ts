// src/routes/index.ts
import { Router } from "express";
import statusRoutes from "./statusRoutes";
import userRoutes from "./userRoutes";

const router = Router();

// Utiliza las rutas específicas del recurso
router.use("/users", userRoutes);
router.use("/status", statusRoutes);

export default router;
