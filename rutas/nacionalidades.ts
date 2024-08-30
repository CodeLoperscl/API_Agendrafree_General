import { Router } from "express";
import { getNacionalidad,getNacionalidades,postNacionalidad,putNacionalidad,deleteNacionalidad } from "../controllers/nacionalidad";

const route = Router();

route.get("/", getNacionalidades);
route.get("/:id", getNacionalidad);
route.post("/", postNacionalidad);
route.put("/:id", putNacionalidad);
route.delete("/:id", deleteNacionalidad);

export default route;
