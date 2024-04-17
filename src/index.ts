import express from "express";

const app = express();
const port = process.env.PORT || 3000; // Puerto por defecto a 3000

app.get("/", (_req:any, res:any) => {
  res.send("API Gateway en funcionamiento!");
});

app.listen(port, () => {
  console.log(`API Gateway escuchando en http://localhost:${port}`);
});
