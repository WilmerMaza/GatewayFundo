"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/authRoutes.ts
const express_1 = require("express");
const handleAxiosError_1 = __importDefault(require("../middleware/handleAxiosError"));
const api_1 = require("../utils/api");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new user
 *     description: Registers a new user with username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's chosen username
 *                 example: 'newuser123'
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *                 example: 'user@example.com'
 *               password:
 *                 type: string
 *                 description: The user's chosen password
 *                 example: 'securepassword123'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message
 *                   example: 'User registered successfully'
 *       400:
 *         description: Input validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message describing what was wrong with the input
 *                   example: 'Username is already taken'
 *       500:
 *         description: Internal server error
 */
router.post("/register", async (req, res) => {
    try {
        const response = await api_1.authService.post("/register", req.body);
        res.json(response.data);
    }
    catch (error) {
        (0, handleAxiosError_1.default)(error, req, res);
    }
});
/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login a user
 *     description: Authenticates a user by username and password, and returns a JWT if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: 'user123'
 *               password:
 *                 type: string
 *                 description: The user's password
 *                 example: 'pass1234'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: The JWT token for accessing protected routes
 *                   example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 *       400:
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message describing the error
 *                   example: 'Username or password is incorrect'
 *       500:
 *         description: Internal server error
 */
router.post("/login", async (req, res) => {
    try {
        const response = await api_1.authService.post("/login", req.body);
        res.json(response.data);
    }
    catch (error) {
        (0, handleAxiosError_1.default)(error, req, res);
    }
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map