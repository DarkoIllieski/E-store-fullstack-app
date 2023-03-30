import express from 'express';
import { addNewProduct, deleteSingleProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productsController.js';
import { auth } from '../middlewares/auth.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { rules } from '../middlewares/validators.js';
const router = express.Router();


//get ruquest "/products/"
router.get('/', getAllProducts )

// post request "/products/"
router.post('/', auth, isAdmin, addNewProduct )

//get request "/products/ single product
router.get('/:id', getSingleProduct )

//patch request "/products/:id" 
router.patch('/:id',auth, isAdmin, updateProduct )

// delete request "/products/:id"
router.delete('/:id',auth, isAdmin, deleteSingleProduct )

export default router;