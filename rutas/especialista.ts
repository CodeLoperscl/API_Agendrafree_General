import { Router } from "express";
import { getEspecialista,getEspecialistas,postEspecialista,putEspecialista,deleteEspecialista } from "../controllers/especialista";

const route = Router();

route.get("/", getEspecialistas);
route.get("/:id", getEspecialista);
route.post("/", postEspecialista);
route.put("/:id", putEspecialista);
route.delete("/:id", deleteEspecialista);

export default route;
