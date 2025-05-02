import { Router } from "express";
const router = Router();
import Item from "../models/Item.js";

// Create
router.get("/create", async (req, res) => {
  try {
    const newItemData = {
      id: 1,
      name: "mastantuono",
      dorsal: 10,
    };
    console.log("POST recibido. Creando item con datos -->", newItemData);
    const newItem = new Item(newItemData);
    const saved = await newItem.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    console.log("Recibiendo solicitud GET en /items/"); // Log de llegada
    const items = await Item.find(); // Trae todos los documentos de la colección "items"
    console.log("Mostrando valores:", items);
    res.json(items); // Devuelve el array de items
  } catch (err) {
    console.error("Error al obtener items:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
