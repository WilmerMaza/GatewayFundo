// src/controllers/userController.ts
import { Request, Response } from 'express';

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Returns a list of users, optionally filtering through query parameters.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The user ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The user's name
 *                     example: John Doe
 */
export const getUsers = (_req: Request, res: Response) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
    res.status(200).json(users);
};
