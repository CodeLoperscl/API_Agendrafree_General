import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPersonas, getPersona, postPersona ,getPersona_rut, putPersona,deletePersona } from "../controllers/persona";

const route = Router();

route.get("/",[validarjwt], getPersonas);
route.get("/rut/:rut",[validarjwt],getPersona_rut);
route.get("/:id",[validarjwt], getPersona);
route.post("/",[validarjwt], postPersona);
route.put("/:id",[validarjwt], putPersona);
route.delete("/:id",[validarjwt], deletePersona);

export default route;
