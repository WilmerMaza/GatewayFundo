"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = require("express");
const statusController_1 = require("../controllers/statusController");
const router = (0, express_1.Router)();
router.get('/', statusController_1.getStatus);
exports.default = router;
//# sourceMappingURL=statusRoutes.js.map