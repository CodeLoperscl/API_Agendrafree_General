import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getEstado, getEstados,postEstado,putEstado,deleteEstado } from "../controllers/estados";

const route = Router();

route.get("/", getEstados);
route.get("/:id", getEstado);
route.post("/", postEstado);
route.put("/:id", putEstado);
route.delete("/:id", deleteEstado);

export default route;
