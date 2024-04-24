"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
/**
 * @openapi
 * /status:
 *   get:
 *     summary: Returns the current status of the API
 *     description: Provides an operational status of the API, useful for health checks.
 *     responses:
 *       200:
 *         description: API is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'API Gateway is running!'
 */
const getStatus = (_req, res) => {
    res.status(200).json({ status: 'API Gateway is running!' });
};
exports.getStatus = getStatus;
//# sourceMappingURL=statusController.js.map