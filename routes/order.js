import express from "express";
import {getAllOrders, createOrder} from "../controllers/order.js";
const router = express.Router()

router.get('/', getAllOrders)
router.post('/', createOrder)

export {router}