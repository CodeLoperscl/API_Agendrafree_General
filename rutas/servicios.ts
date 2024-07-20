import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getServicio,getServicios,postServicio,putServicio,deleteServicio } from "../controllers/servicios";

const route = Router();

route.get("/", getServicios);
route.get("/:id", getServicio);
route.post("/", postServicio);
route.put("/:id", putServicio);
route.delete("/:id", deleteServicio);

export default route;
