import { WaresInterface } from "./../types/ware"
import { model, Schema } from "mongoose"

const WaresSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<WaresInterface>("Ware", WaresSchema)