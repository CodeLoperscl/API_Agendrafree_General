import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPersonas, getPersona, postPersona, putPersona,getPersona_rut,getPersona_rut_paciente } from "../controllers/persona";

const route = Router();

route.get("/", getPersona_rut_paciente);
route.get("/rut/:rut",getPersona_rut);
route.get("/:id", getPersona);
route.post("/", postPersona);
route.put("/:id", putPersona);
// route.delete("/:id", deletePersona);

export default route;
