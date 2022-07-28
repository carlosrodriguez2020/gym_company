import { Router } from "express";

const router = Router();

import * as productController from "../controllers/products.controller";

router.post("/", productController.creatProduct);

router.get("/", productController.getProducts);

router.get("/:productId", productController.getProductByid);

router.put("/:productId", productController.updateProductByid);

router.delete("/:productId", productController.deleteProductByid);

export default router;
