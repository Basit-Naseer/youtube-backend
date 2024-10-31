import { Router } from "express";
import {
  loggedOut,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { upload, verifyJWT } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secure route
router.route("/loggeout").post(verifyJWT, loggedOut);

export default router;
