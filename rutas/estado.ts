import { Router } from "express";
import { getEstado,getEstados,postEstado,putEstado,deleteEstado} from "../controllers/estado";
import { validarjwt } from "../middlewares/validarToken";

const route = Router();

route.get("/",[validarjwt], getEstados);
route.get("/:id",[validarjwt], getEstado);
route.post("/",[validarjwt], postEstado);
route.put("/:id",[validarjwt], putEstado);
route.delete("/:id",[validarjwt], deleteEstado);

export default route;
