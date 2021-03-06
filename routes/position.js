import express from "express";
import {getAllPositions, deletePosition, createPosition, updatePosition} from "../controllers/position.js";
const router = express.Router()

//http://localhost:5000/api/position
router.get('/:categoryId', getAllPositions)
router.delete('/:id', deletePosition)
router.post('/', createPosition)
router.patch('/:id', updatePosition)

export {router}