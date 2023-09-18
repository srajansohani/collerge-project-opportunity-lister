import express from "express";
import { Login, Register } from "../contollers/auth.js";

const router = express.Router();

router.post('/register',Register);
router.post('/login',Login);

export default router;