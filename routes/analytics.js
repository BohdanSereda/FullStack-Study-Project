import express from "express";
import {overview, analytics} from "../controllers/analytics.js";
const router = express.Router()
//http://localhost:5000/api/analytics
router.get('/overview', overview)
router.get('/analytics', analytics)

export {router}