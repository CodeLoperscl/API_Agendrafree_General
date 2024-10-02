import { Router } from "express";
import { getNacionalidad,getNacionalidades,postNacionalidad,putNacionalidad,deleteNacionalidad } from "../controllers/nacionalidad";
import { validarjwt } from "../middlewares/validarToken";
const route = Router();

route.get("/",[validarjwt], getNacionalidades);
route.get("/:id",[validarjwt], getNacionalidad);
route.post("/",[validarjwt], postNacionalidad);
route.put("/:id",[validarjwt], putNacionalidad);
route.delete("/:id",[validarjwt], deleteNacionalidad);

export default route;
