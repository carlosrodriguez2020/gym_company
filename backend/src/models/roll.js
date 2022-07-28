import { Schema, model } from "mongoose";

const rollSchema = new Schema(
  {
    name: String,
  },
  { versionKey: false }
);

export default model("Role", rollSchema);
