import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router()

//http://localhost:5000/api/auth
router.post('/login', login)
router.post('/register', register)

export {router}