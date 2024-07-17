import { Router } from "express";
import { getEstado_usuario, getEstados_usuarios, postEstado_usuario, putEstado_usuario, deleteEstado_usuario } from "../controllers/estado_usuario";

const route = Router();

route.get("/", getEstados_usuarios);
route.get("/:id", getEstado_usuario);
route.post("/", postEstado_usuario);
route.put("/:id", putEstado_usuario);
route.delete("/:id", deleteEstado_usuario);

export default route;
