import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getEstado_cita, getEstados_citas, postEstado_cita, putEstado_cita, deleteEstado_cita } from "../controllers/estado_cita";

const route = Router();

route.get("/", getEstados_citas);
route.get("/:id", getEstado_cita);
route.post("/", postEstado_cita);
route.put("/:id", putEstado_cita);
route.delete("/:id", deleteEstado_cita);

export default route;
