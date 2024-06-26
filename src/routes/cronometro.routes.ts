// src/routes/authRoutes.ts
import { Request, Response, Router } from "express";
import handleAxiosError from "../middleware/handleAxiosError";
import { cronometerService, getSSE } from "../utils/api";

const router = Router();
/**
 * @openapi
 * info:
 *   title: Cronometro API
 *   description: API para manejar eventos de cronómetro para competencias.
 *   version: "1.0.0"
 * servers:
 *   - url: 'https://api.tuservidor.com/'
 *     description: Servidor de producción
 * paths:
 *   /cronometro/{platform}/{event}/{partidaId}:
 *     post:
 *       tags:
 *         - Cronometro
 *       summary: Controla eventos del cronómetro para una partida específica
 *       description: Permite iniciar, pausar o detener un cronómetro basado en la acción y el ID de la partida proporcionados.
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
      params: { event, partidaId,platform },body
    } = req;
    const response = await cronometerService.post(
      `/${platform}/${event}/${partidaId}`,
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
 *   title: Cronometro API
 *   description: API para manejar eventos de cronómetro para competencias, incluyendo SSE para actualizaciones en tiempo real.
 *   version: "1.0.0"
 * servers:
 *   - url: 'https://api.tuservidor.com/'
 *     description: Servidor de producción
 * paths:
 *   /cronometro/{platform}/{partidaId}:
 *     get:
 *       tags:
 *         - Cronometro
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
    const response = await getSSE(`/${platform}/${partidaId}`, {
      responseType: "stream", // Asegura que Axios maneje la respuesta como un stream
    });

    // Reenviar el stream de SSE directamente al cliente
    response.data.pipe(res);
  } catch (error) {
    console.error("SSE streaming failed", error);
    res.status(500).send("Failed to establish a stream.");
  }
});

export default router;
