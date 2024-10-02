import { Router } from "express";
import { getMaquetas,getMaqueta,postMaqueta,putMaqueta,deleteMaqueta } from "../controllers/maqueta";
import { validarjwt } from "../middlewares/validarToken";
const route = Router();

route.get("/",[validarjwt], getMaquetas);
route.get("/:id",[validarjwt], getMaqueta);
route.post("/",[validarjwt], postMaqueta);
route.put("/:id",[validarjwt], putMaqueta);
route.delete("/:id",[validarjwt], deleteMaqueta);

export default route;
