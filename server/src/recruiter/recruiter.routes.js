import { Router } from "express";
import { topResumesController } from "./recruiter.controllers.js";

const router = Router();

router.post("/top-resumes", topResumesController);

export default router;
