"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ValidEnvironment_1 = require("../utils/ValidEnvironment");
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Authorization header is required" });
    }
    const token = authHeader.split(" ")[1]; // Bearer TOKEN_HERE
    jsonwebtoken_1.default.verify(token, ValidEnvironment_1.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }
        req.user = decoded;
        next();
    });
};
exports.default = verifyToken;
//# sourceMappingURL=ValidatorJWT.js.map