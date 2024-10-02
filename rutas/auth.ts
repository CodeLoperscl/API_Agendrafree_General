import { Router } from "express";
import { 
    // generarTokenVisita, 
    login } from "../controllers/auth";

const route = Router();

route.post("/login", login);
// route.post("/visita",generarTokenVisita);

export default route;
