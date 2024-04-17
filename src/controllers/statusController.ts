// src/controllers/statusController.ts
import { Request, Response } from 'express';

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
export const getStatus = (_req: Request, res: Response) => {
  res.status(200).json({ status: 'API Gateway is running!' });
};
