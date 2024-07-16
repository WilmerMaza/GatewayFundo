import { Request, Response, Router } from "express";
import handleAxiosError from "../middleware/handleAxiosError";
import { puntuacionesService, getSSEPuntuaciones } from "../utils/api";

const router = Router();

/**
 * @openapi
  components:
 *   schemas:
 *     RegistroDocument:
 *       type: object
 *       required:
 *         - Name
 *         - LastName
 *         - Numero_Sorteo
 *         - Birthdate
 *         - IwfCoiCode
 *         - tipo
 *         - numero
 *         - Id_Partida
 *       properties:
 *         Name:
 *           type: string
 *           description: Nombre del deportista
 *           example: "Wilmer"
 *         LastName:
 *           type: string
 *           description: Apellido del deportista
 *           example: "Perez"
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
 *         tipo:
 *           type: string
 *           description: Tipo de intento del deportista
 *           example: "Arranque"
 *         numero:
 *           type: integer
 *           description: Número de intento del deportista
 *           example: 1
 *         Id_Partida:
 *           type: string
 *           description: Código de competición / Partida
 *           example: "BUPL0PY"
 * 
 *     RegistroDocumentResponse:
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
 *             Id_Partida:
 *               type: string
 *               description: Código de competición / Partida
 *               example: "BUPL0PY"
 *             Name:
 *               type: string
 *               description: Nombre del deportista
 *               example: "Maza"
 *             LastName:
 *               type: string
 *               description: Apellido del deportista
 *               example: "Maza"
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
 *             peso:
 *               type: integer
 *               description: Peso del intento del deportista
 *               example: 100
 *             resultado:
 *               type: string
 *               enum:
 *                 - "Éxito"
 *                 - "Fallo"
 *                 - "Evaluar"
 *               description: Resultado del intento del deportista
 *               example: "Éxito"
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
 * 
 * /puntuaciones/insert:
 *   post:
 *     tags:
 *       - Puntuaciones
 *     summary: Registrar un nuevo deportista
 *     description: Registra un nuevo deportista con su información personal y resultados iniciales.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegistroDocument'
 *     responses:
 *       201:
 *         description: Registro creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: 'Informacion de registro'
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
 *                   example: "Error al crear o actualizar el registro"
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
router.post("/insert", async (req: Request, res: Response) => {
  try {
    const response = await puntuacionesService.post("/puntaciones/create", req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});


/**
 * @openapi
 * /puntuaciones/partida/{partidaId}:
 *   get:
 *     tags:
 *       - Puntuaciones
 *     summary: Obtener información de una partida
 *     description: Obtiene la información de una partida específica según su ID.
 *     parameters:
 *       - in: path
 *         name: partidaId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la partida de la cual se desea obtener información
 *     responses:
 *       200:
 *         description: Informacion de partida obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de confirmación.
 *                   example: 'informacion de partida'
 *       404:
 *         description: Registros de deportistas no encontrada en Id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener los registros del deportista"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error interno del servidor"
 */
router.get("/partida/:partidaId", async (req: Request, res: Response) => {
  try {
    const {
      params: { partidaId },
    } = req;
    const response = await puntuacionesService.get(`puntaciones/partida/${partidaId}`, req.body);
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});


/**
 @openapi
 * info:
 *   title: Puntaciones API
 *   description: API para manejar eventos de cronómetro para competencias.
 *   version: "1.0.0"
 * servers:
 *   - url: 'https://api.tuservidor.com/'
 *     description: Servidor de producción
 * paths:
 *   /puntuaciones/{platform}/{event}/{partidaId}:
 *     post:
 *       tags:
 *         - Puntuaciones
 *       summary: Controla  la notificacion de eventos  de una  una partida específica
 *       description: Notificacion de evento  de una partida específica
 *       parameters:
 *         - in: path
 *           name: platform
 *           required: true
 *           schema:
 *             type: string
 *           description: Tipo de plataforma (cronometro, platform, Movil).
 *         - in: path
 *           name: event
 *           required: true
 *           schema:
 *             type: string
 *           description: Tipo de evento del cronómetro (start, pause, stop).
 *         - in: path
 *           name: partidaId
 *           required: true
 *           schema:
 *             type: string
 *           description: Identificador único de la partida.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: datetime
 *                   description: Tiempo en el que el evento es registrado.
 *                   example: '2021-07-21T17:32:28Z'
 *       responses:
 *         200:
 *           description: Evento del cronómetro procesado correctamente.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de confirmación.
 *                     example: 'Evento del cronómetro procesado correctamente.'
 *         400:
 *           description: Error de validación en la entrada.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Un mensaje describiendo qué estaba mal con la entrada.
 *                     example: 'Datos de entrada inválidos.'
 *         500:
 *           description: Error interno del servidor.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de error interno.
 *                     example: 'Error procesando la solicitud.'
 *
 */
 router.post("/:platform/:event/:partidaId", async (req: Request, res: Response) => {
  try {
    const {
      params: { event, partidaId, platform }, body
    } = req;
    const response = await puntuacionesService.post(
      `puntaciones/${platform}/${event}/${partidaId}`,
      body
    );
    res.json(response.data);
  } catch (error: any) {
    handleAxiosError(error, req, res);
  }
});
/**
 * @openapi
 * info:
 *   title: Putuaciones API
 *   description: API para manejar eventos de cronómetro para competencias, incluyendo SSE para actualizaciones en tiempo real.
 *   version: "1.0.0"
 * servers:
 *   - url: 'https://api.tuservidor.com/'
 *     description: Servidor de producción
 * paths:
 *   /puntuaciones/{platform}/{partidaId}:
 *     get:
 *       tags:
 *         - Puntuaciones
 *       summary: Suscripción a eventos del cronómetro
 *       description: >
 *         Abre un stream de Server-Sent Events que emite actualizaciones del cronómetro en tiempo real para una partida específica.
 *       parameters:
 *         - in: path
 *           name: platform
 *           required: true
 *           schema:
 *             type: string
 *           description: Tipo de plataforma (cronometro, platform, Movil).
 *         - in: path
 *           name: partidaId
 *           required: true
 *           schema:
 *             type: string
 *           description: Identificador único de la partida.
 *       responses:
 *         200:
 *           description: Conexión SSE establecida y eventos siendo transmitidos.
 *           content:
 *             text/event-stream:
 *               schema:
 *                 type: string
 *                 example: |
 *                   data: {"time":"2023-03-29T12:34:56Z","event":"start"}
 * 
 *         400:
 *           description: Error de validación en la entrada.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Un mensaje describiendo qué estaba mal con la entrada.
 *                     example: 'Partida ID inválido o faltante.'
 *         500:
 *           description: Error interno del servidor.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Mensaje de error interno.
 *                     example: 'Error procesando la solicitud.'
 * 
 */

router.get("/:platform/:partidaId", async (req: Request, res: Response) => {
  const { platform, partidaId } = req.params; // Destructuring simplificado

  // Configuración inicial de los headers para SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    // Conectarse al servicio que maneja los SSE y obtener el stream
    const response = await getSSEPuntuaciones(`puntaciones/${platform}/${partidaId}`);

    // Reenviar el stream de SSE directamente al cliente
    response.data.pipe(res);
  } catch (error) {
    console.error("SSE streaming failed", error);
    res.status(500).send("Failed to establish a stream.");
  }
});


export default router;
