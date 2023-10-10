import { Response, Request } from "express"
import { WaresInterface } from "./../../types/ware"
import Ware from "../../models/ware"

const getWares = async (req: Request, res: Response): Promise<void> => {
  try {
    const wares: WaresInterface[] = await Ware.find()
    res.status(200).json({ wares })
  } catch (error) {
    throw error
  }
}

const addWare = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<WaresInterface, "name" | "description" | "image" | "price" | "stock">

    const ware: WaresInterface = new Ware({
      name: body.name,
      description: body.description,
      image: body.image,
      price: body.price,
      stock: body.stock,
    })

    const newWare: WaresInterface = await ware.save()
    const allWares: WaresInterface[] = await Ware.find()

    res
      .status(201)
      .json({ message: "Ware added", ware: newWare, wares: allWares })
  } catch (error) {
    throw error
  }
}

const updateWare = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateWare: WaresInterface | null = await Ware.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allWares: WaresInterface[] = await Ware.find()
    res.status(200).json({
      message: "Ware updated",
      ware: updateWare,
      wares: allWares,
    })
  } catch (error) {
    throw error
  }
}

const deleteWare = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedWare: WaresInterface | null = await Ware.findByIdAndRemove(
      req.params.id
    )
    const allWares: WaresInterface[] = await Ware.find()
    res.status(200).json({
      message: "Ware deleted",
      ware: deletedWare,
      wares: allWares,
    })
  } catch (error) {
    throw error
  }
}

export { getWares, addWare, updateWare, deleteWare }