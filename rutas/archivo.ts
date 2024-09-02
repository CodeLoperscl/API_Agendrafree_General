import { Router } from "express";
import { getArchivos,getArchivo,postArchivo,putArchivo,deleteArchivo } from "../controllers/archivo";

const route = Router();

route.get("/", getArchivos);
route.get("/:id", getArchivo);
route.post("/", postArchivo);
route.put("/:id", putArchivo);
route.delete("/:id", deleteArchivo);

export default route;
