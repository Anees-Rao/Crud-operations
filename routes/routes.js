const express=require("express");
const { createUser, getAllUsers, getUsers, patchUsers } = require("../controller/controller");

const userRouter= express.Router()
userRouter.get("/user", getUsers);
userRouter.get("/get-alluser", getAllUsers)
userRouter.post("/create-user",createUser);
userRouter.patch("update-user/:id",patchUsers);
// userRouter.delete("/:id",deleteUser);

module.exports = userRouter
