import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPaciente, getPacientes, postPaciente, putPaciente, deletePaciente } from "../controllers/paciente";

const route = Router();

route.get("/", getPacientes);
route.get("/:id", getPaciente);
route.post("/", postPaciente);
route.put("/:id", putPaciente);
route.delete("/:id", deletePaciente);

export default route;
