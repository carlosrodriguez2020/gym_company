import { Router } from "express";

const router = Router();

import * as productController from "../controllers/products.controller";

router.get("/", productController.creatProduct);

router.get("/", productController.getProducts);

router.get("/:productId", productController.getProductByid);

router.put("/:productId", productController.upDateProductByid);

router.delete("/:productId", productController.deleteProductByid);

export default router;
