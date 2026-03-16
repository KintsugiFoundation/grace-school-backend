import express from "express";    
import { createContactController } from "../controllers/contact.controller.js";

const router = express.Router()

router.post('/', createContactController)

export default router