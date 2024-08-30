import { Router } from "express";
import { getEspecialidad,getEspecialidades,postEspecialidad,putEspecialidad,deleteEspecialidad } from "../controllers/especialidad";

const route = Router();

route.get("/", getEspecialidades);
route.get("/:id", getEspecialidad);
route.post("/", postEspecialidad);
route.put("/:id", putEspecialidad);
route.delete("/:id", deleteEspecialidad);

export default route;
