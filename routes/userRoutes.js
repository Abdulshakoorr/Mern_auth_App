import express from "express";
import {
  allUsers,
  createUser,
  deleteUser,
  singleUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/all-users", allUsers);
router.get("/all-users/:id", singleUser);
router.post("/all-users", createUser);
router.patch("/all-users/:id", updateUser);
router.delete("/all-users/:id", deleteUser);

export default router;
