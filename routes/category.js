import express from "express";
import {getAllCategories, getCategoryById, deleteCategory, createCategory, updateCategory} from "../controllers/category.js";
const router = express.Router()

//http://localhost:5000/api/category

router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.delete('/:id', deleteCategory)
router.post('/', createCategory)
router.patch('/:id', updateCategory)

export {router}