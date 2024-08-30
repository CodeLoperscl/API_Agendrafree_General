import { Router } from "express";
import { getMaquetas,getMaqueta,postMaqueta,putMaqueta,deleteMaqueta } from "../controllers/maqueta";

const route = Router();

route.get("/", getMaquetas);
route.get("/:id", getMaqueta);
route.post("/", postMaqueta);
route.put("/:id", putMaqueta);
route.delete("/:id", deleteMaqueta);

export default route;
