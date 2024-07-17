import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getCita,getCitas,postCita,putCita,deleteCita } from "../controllers/cita";

const route = Router();

route.get("/", getCitas);
route.get("/:id", getCita);
route.post("/", postCita);
route.put("/:id", putCita);
route.delete("/:id", deleteCita);

export default route;
