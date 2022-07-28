import { Router } from "express";

const router = Router();

import * as authcontroles from "../controllers/authu.controllers";

router.post("/signIn", authcontroles.signIn);
router.post("/signUp", authcontroles.signUp);

export default router;
