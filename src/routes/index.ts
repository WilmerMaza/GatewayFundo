import { Router } from "express";
import verifyToken from '../middleware/ValidatorJWT';
import authRoutes from "./authRoutes";
import statusRoutes from "./statusRoutes";
import userRoutes from "./userRoutes";

const router = Router();

// Utiliza las rutas específicas del recurso
router.use("/users",verifyToken ,userRoutes);
router.use("/status", statusRoutes);
router.use('/auth', authRoutes);

export default router;
