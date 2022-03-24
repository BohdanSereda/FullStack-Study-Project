import express from "express";
import {getAllOrders, createOrder} from "../controllers/order.js";
const router = express.Router()

//http://localhost:5000/api/order
router.get('/', getAllOrders)
router.post('/', createOrder)

export {router}