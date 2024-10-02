import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getProfesional,getProfesionales,postProfesional,putProfesional,deleteProfesional } from "../controllers/profesional";

const route = Router();

route.get("/",[validarjwt], getProfesionales);
route.get("/:id",[validarjwt], getProfesional);
route.post("/",[validarjwt], postProfesional);
route.put("/:id",[validarjwt], putProfesional);
route.delete("/:id",[validarjwt], deleteProfesional);

export default route;
