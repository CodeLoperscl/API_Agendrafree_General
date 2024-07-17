import { Router } from "express";
import { deleteNacionalidad, getNacionalidad, getNacionalidades, postNacionalidad, putNacionalidad } from "../controllers/nacionalidad";

const route = Router();

route.get("/", getNacionalidades);
route.get("/:id", getNacionalidad);
route.post("/", postNacionalidad);
route.put("/:id", putNacionalidad);
route.delete("/:id", deleteNacionalidad);

export default route;
