import { Router } from "express";
import productController from "../controllers/product.controller";

const productRouter = Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProdById)
productRouter.put('/:id', productController.updateProd)
productRouter.post('/', productController.addProd)
productRouter.delete('/:id', productController.deleteProd)

export default productRouter