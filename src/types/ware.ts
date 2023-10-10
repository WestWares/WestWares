import { Document } from "mongoose"

export interface WaresInterface extends Document {
  name: string
  description: string
  image: string
  price: number
  stock: number
}