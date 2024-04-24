"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidatorJWT_1 = __importDefault(require("../middleware/ValidatorJWT"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const statusRoutes_1 = __importDefault(require("./statusRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = (0, express_1.Router)();
// Utiliza las rutas específicas del recurso
router.use("/users", ValidatorJWT_1.default, userRoutes_1.default);
router.use("/status", statusRoutes_1.default);
router.use('/auth', authRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map