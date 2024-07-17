import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getHora_disponible, getHoras_disponibles, postHora_disponible, putHora_disponible, deleteHora_disponible } from "../controllers/hora_disponible";

const route = Router();

route.get("/", getHoras_disponibles);
route.get("/:id", getHora_disponible);
route.post("/", postHora_disponible);
route.put("/:id", putHora_disponible);
route.delete("/:id", deleteHora_disponible);

export default route;
