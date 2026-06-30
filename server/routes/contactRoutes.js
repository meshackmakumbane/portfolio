import express from 'express'
const router = express.Router()

import { contactController } from "../controllers/contactController.js";

router.post('/contact', contactController)

export default router