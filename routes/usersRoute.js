import express from "express";
import { addNewUser, deleteUser, getAllUsers, getSingleUser, updateUser, loginUser } from "../controllers/usersController.js"; 
import { rules } from "../middlewares/validators.js";
import { auth } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();    
router.get("/", getAllUsers);

router.post("/", rules, addNewUser);   // post request "/users/" add new user

//login post request"/users/login" login user (autentication)

router.post("/login", loginUser )

router.get("/:id", auth, isAdmin, getSingleUser); // get request "/users/hsfas97sa8333q3dfsfd" get single user 

router.patch("/:id",auth, isAdmin, updateUser); // patch request "/users/7sdfdsf538423jh4gj234" update a user 

router.delete("/:id", auth, isAdmin, deleteUser); // delete request "/users/7sdfdsf538423jh4gj234" delete a user   

export default router;