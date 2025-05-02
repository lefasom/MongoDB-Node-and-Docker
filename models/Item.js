import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  name: { type: String, required: true },
  dorsal: { type: Number, default: 0 },
});

export default model("Item", ItemSchema);
