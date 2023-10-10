import { Router } from "express"
import { getWares, addWare, updateWare, deleteWare } from "../controllers/wares"

const router: Router = Router()

router.get("/wares", getWares)

router.post("/add-ware", addWare)

router.put("/edit-ware/:id", updateWare)

router.delete("/delete-ware/:id", deleteWare)

export default router