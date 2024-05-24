// src/routes/authRoutes.ts
import { Request, Response, Router } from "express";
import handleAxiosError from "../middleware/handleAxiosError";
import { registerService } from "../utils/api";

const router = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     AthleteRequest:
 *       type: object
 *       required:
 *         - Name
 *         - Numero_Sorteo
 *         - Birthdate
 *         - IwfCoiCode
 *         - Primer_Envion
 *         - Primer_Arranque
 *       properties:
 *         Name:
 *           type: string
 *           description: Nombre del deportista
 *           example: "Wilmer Maza"
 *         Numero_Sorteo:
 *           type: integer
 *           description: Número de sorteo del deportista
 *           example: 15
 *         Birthdate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del deportista
 *           example: "2002-01-10"
 *         IwfCoiCode:
 *           type: string
 *           description: Código IWF COI del deportista
 *           example: "asdsad"
 *         Primer_Envion:
 *           type: integer
 *           description: Primer envión del deportista
 *           example: 10
 *         Primer_Arranque:
 *           type: integer
 *           description: Primer arranque del deportista
 *           example: 10
 * 
 *     AthleteResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensaje de confirmación
 *           example: "Usuario registrado exitosamente"
 *         athlete:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: ID del deportista
 *               example: "245dd285-535d-4331-98d0-de4f31665cca"
 *             Name:
 *               type: string
 *               description: Nombre del deportista
 *               example: "Wilmer Maza"
 *             Numero_Sorteo:
 *               type: integer
 *               description: Número de sorteo del deportista
 *               example: 15
 *             Birthdate:
 *               type: string
 *               format: date
 *               description: Fecha de nacimiento del deportista
 *               example: "2002-01-10"
 *             IwfCoiCode:
 *               type: string
 *               description: Código IWF COI del deportista
 *               example: "asdsad"
 *             Primer_Envion:
 *               type: integer
 *               description: Primer envión del deportista
 *               example: 10
 *             Primer_Arranque:
 *               type: integer
 *               description: Primer arranque del deportista
 *               example: 10
 *             updatedAt:
 *               type: string
 *               format: date-time
 *               description: Fecha de última actualización
 *               example: "2024-05-18T05:39:30.702Z"
 *             createdAt:
 *               type: string
 *               format: date-time
 *               description: Fecha de creación
 *               example: "2024-05-18T05:39:30.702Z"
 */

/**
 * @openapi
 * /register/Athletes:
 *   post:
 *     tags:
 *       - Athletes
 *     summary: Registrar un nuevo deportista
 *     description: Registra un nuevo deportista con su información personal y resultados iniciales.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AthleteRequest'
 *     responses:
 *       201:
 *         description: Deportista registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AthleteResponse'
 *       400:
 *         description: Error en la solicitud de registro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Datos de registro no válidos"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 *                   example: "Error interno del servidor"
 */
router.post("/Athletes", async (req: Request, res: Response) => {
  try {
    const response = await registerService.post("/AthletesRegister", req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});


/**
 * @openapi
 * components:
 *   schemas:
 *     UpdateAthleteRequest:
 *       type: object
 *       required:
 *         - Name
 *         - Numero_Sorteo
 *         - Birthdate
 *         - IwfCoiCode
 *         - Primer_Envion
 *         - Primer_Arranque
 *       properties:
 *         Name:
 *           type: string
 *           description: Nombre del deportista
 *           example: "Wilmer Maza"
 *         Numero_Sorteo:
 *           type: integer
 *           description: Número de sorteo del deportista
 *           example: 15
 *         Birthdate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del deportista
 *           example: "2002-01-10"
 *         IwfCoiCode:
 *           type: string
 *           description: Código IWF COI del deportista
 *           example: "asdsad"
 *         Primer_Envion:
 *           type: integer
 *           description: Primer envión del deportista
 *           example: 10
 *         Primer_Arranque:
 *           type: integer
 *           description: Primer arranque del deportista
 *           example: 10
 * 
 *     UpdateAthleteResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Mensaje de confirmación
 *           example: "Usuario actualizado exitosamente"
 *         athlete:
 *           type: object
 *           properties:
 *             ID:
 *               type: string
 *               description: ID del deportista
 *               example: "f097f3a6-ade0-4e95-995f-7989fda2da4f"
 *             Name:
 *               type: string
 *               description: Nombre del deportista
 *               example: "Alfonso Maza"
 *             Numero_Sorteo:
 *               type: integer
 *               description: Número de sorteo del deportista
 *               example: 15
 *             Birthdate:
 *               type: string
 *               format: date
 *               description: Fecha de nacimiento del deportista
 *               example: "2002-01-10"
 *             IwfCoiCode:
 *               type: string
 *               description: Código IWF COI del deportista
 *               example: "asdsad"
 *             Primer_Envion:
 *               type: integer
 *               description: Primer envión del deportista
 *               example: 10
 *             Primer_Arranque:
 *               type: integer
 *               description: Primer arranque del deportista
 *               example: 10
 */

/**
 * @openapi
 * /register/AthleteUpdate/{idAthlete}:
 *   put:
 *     tags:
 *       - Athletes
 *     summary: Actualizar un deportista
 *     description: Actualiza la información de un deportista existente.
 *     parameters:
 *       - in: path
 *         name: idAthlete
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del deportista a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateAthleteRequest'
 *     responses:
 *       200:
 *         description: Deportista actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateAthleteResponse'
 *       400:
 *         description: Error en la solicitud de actualización
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Datos de actualización no válidos"
 *       404:
 *         description: Deportista no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Deportista no encontrado"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 *                   example: "Error interno del servidor"
 */


router.put("/AthleteUpdate/:idAthlete", async (req: Request, res: Response) => {
  try {
    const {
      params: { idAthlete },
    } = req;
    const response = await registerService.put(`/AthleteUpdate/${idAthlete}`, req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});

/**
 * @openapi
 * components:
 *   schemas:
 *     Athlete:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID del deportista
 *           example: "a35f09cd-1a11-4006-bfe4-d7718104f33c"
 *         Name:
 *           type: string
 *           description: Nombre del deportista
 *           example: "Wilmer Maza"
 *         Numero_Sorteo:
 *           type: integer
 *           description: Número de sorteo del deportista
 *           example: 15
 *         Birthdate:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento del deportista
 *           example: "2002-01-10T00:00:00.000Z"
 *         IwfCoiCode:
 *           type: string
 *           description: Código IWF COI del deportista
 *           example: "asdsad"
 *         Primer_Envion:
 *           type: integer
 *           description: Primer envión del deportista
 *           example: 10
 *         Primer_Arranque:
 *           type: integer
 *           description: Primer arranque del deportista
 *           example: 10
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro
 *           example: "2024-05-18T06:43:07.157Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización del registro
 *           example: "2024-05-18T06:43:07.157Z"
 * 
 *   parameters:
 *     JWTToken:
 *       name: Authorization
 *       in: header
 *       required: true
 *       schema:
 *         type: string
 *         format: jwt
 *       description: Token de autenticación JWT en formato 'Bearer token'.
 * 
 *   responses:
 *     GetAllAthletesResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Athlete'
 */

/**
 * @openapi
 * /register/athletes:
 *   get:
 *     tags:
 *       - Athletes
 *     summary: Obtener todos los deportistas
 *     description: Retorna una lista de todos los deportistas registrados.
 *     parameters:
 *       - $ref: '#/components/parameters/JWTToken'
 *     responses:
 *       200:
 *         description: Lista de deportistas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/GetAllAthletesResponse'
 *       401:
 *         description: Token de autenticación inválido o no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error de autenticación
 *                   example: "Token de autenticación inválido"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error interno
 *                   example: "Error interno del servidor"
 */

router.get("/athletes", async (req: Request, res: Response) => {
  try {
    console.log("Solicitud recibida:", req);

    console.log("Token JWT recibido:", req.header("Authorization"));
    const response = await registerService.get(`/AthletesAll`, req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});
export default router;
