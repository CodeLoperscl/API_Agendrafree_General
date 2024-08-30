import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getProfesional,getProfesionales,postProfesional,putProfesional,deleteProfesional } from "../controllers/profesional";

const route = Router();

route.get("/", getProfesionales);
route.get("/:id", getProfesional);
route.post("/", postProfesional);
route.put("/:id", putProfesional);
route.delete("/:id", deleteProfesional);

export default route;
