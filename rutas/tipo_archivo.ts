import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getTipo_Archivo,getTipos_Archivos,postTipo_Archivo,putTipo_Archivo,deleteTipo_Archivo } from "../controllers/tipo_archivo";

const route = Router();

route.get("/", getTipos_Archivos);
route.get("/:id", getTipo_Archivo);
route.post("/", postTipo_Archivo);
route.put("/:id", putTipo_Archivo);
route.delete("/:id", deleteTipo_Archivo);

export default route;
