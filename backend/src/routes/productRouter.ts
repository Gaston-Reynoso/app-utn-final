import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, updateProduct, searchProducts } from "../controllers/productControllers"
import { authMiddleware } from "../middleware/authMiddleware"

const productRouter = Router()

productRouter.get("/search/:term", searchProducts)
productRouter.get("/", getAllProducts)
productRouter.post("/", authMiddleware, createProduct)
productRouter.delete("/:id", authMiddleware, deleteProduct)
productRouter.patch("/:id", authMiddleware, updateProduct)

export { productRouter }