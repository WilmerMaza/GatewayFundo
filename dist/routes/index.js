"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidatorJWT_1 = __importDefault(require("../middleware/ValidatorJWT"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const cronometro_routes_1 = __importDefault(require("./cronometro.routes"));
const register_routes_1 = __importDefault(require("./register.routes"));
const statusRoutes_1 = __importDefault(require("./statusRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = (0, express_1.Router)();
// Utiliza las rutas específicas del recurso
router.use("/users", ValidatorJWT_1.default, userRoutes_1.default);
router.use("/status", statusRoutes_1.default);
router.use("/auth", auth_routes_1.default);
router.use("/cronometro", cronometro_routes_1.default);
router.use("/register", register_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map