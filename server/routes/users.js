import express from "express";

import { registerUser, userList, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/userlist", userList);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);




export default router;