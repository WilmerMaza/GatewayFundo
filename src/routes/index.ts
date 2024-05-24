import { Router } from "express";
import authRoutes from "./auth.routes";
import crometroRouter from "./cronometro.routes";
import registerRoutes from "./register.routes";
import statusRoutes from "./statusRoutes";
import userRoutes from "./userRoutes";
const router = Router();

// Utiliza las rutas específicas del recurso
router.use("/users", userRoutes);
router.use("/status", statusRoutes);
router.use("/auth", authRoutes);
router.use("/cronometro", crometroRouter);
router.use("/register", registerRoutes);

export default router;
