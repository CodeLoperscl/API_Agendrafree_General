import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPersonas, getPersona, postPersona, putPersona, deletePersona } from "../controllers/persona";

const route = Router();

route.get("/", getPersonas);
route.get("/:id", getPersona);
route.post("/", postPersona);
route.put("/:id", putPersona);
route.delete("/:id", deletePersona);

export default route;
