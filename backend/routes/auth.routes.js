import express from "express";
import {logIn, logOut, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login",logIn);

router.get("/logout",logOut);

router.get("/register",register);

export default router;