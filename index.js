import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import { connect } from "mongoose";
import itemRoutes from "./routes/items.js"; // Importamos las rutas

const app = express();
app.use(json()); // Middleware para parsear JSON

// Rutas
app.use("/", itemRoutes); // Usamos '/items' como ruta base

console.log("Mongo URI:", process.env.MONGO_URI);

// Conexión a MongoDB y arranque del servidor
connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("Error de conexión:", err));
