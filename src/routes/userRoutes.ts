import express from "express";
import {
  bulkUserSignup,
  deleteUser,
  getUser,
  getUsers,
  makeAdmin,
  sendForgetMail,
  sendGeneratePassMail,
  userForgetPassword,
  userGeneratePassword,
  userLogin,
  userLogout,
  userProfile,
  userSignup,
  userUpdatePassword,
} from "../controllers/uesrController";
import { authCheck } from "../middlewares/auth";
import { adminCheck } from "../middlewares/isAdmin";

const userRouter = express.Router();

userRouter.post("/bulk", bulkUserSignup);
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.patch("/send-generate-password-mail", sendGeneratePassMail);
userRouter.patch("/set-password/:token", userGeneratePassword);
userRouter.get("/profile", authCheck, userProfile);
userRouter.patch("/forget-mail", sendForgetMail);
userRouter.patch("/forget-password/:token", userForgetPassword);
userRouter.patch("/change-password", authCheck, userUpdatePassword);
userRouter.get("/logout", userLogout);
userRouter.patch("/make-admin/:userId", makeAdmin);

// admin route

userRouter.get("/users", adminCheck, getUsers);
userRouter.get("/user/:userId", adminCheck, getUser);
userRouter.delete("/:userId", adminCheck, deleteUser);

export default userRouter;
