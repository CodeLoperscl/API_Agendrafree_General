import { Router } from "express";
import { validarjwt } from "../middlewares/validarToken";
import { getPrevision, getPrevisiones, postPrevision, putPrevision, deletePrevision } from "../controllers/prevision";

const route = Router();

route.get("/", getPrevisiones);
route.get("/:id", getPrevision);
route.post("/", postPrevision);
route.put("/:id", putPrevision);
route.delete("/:id", deletePrevision);

export default route;
