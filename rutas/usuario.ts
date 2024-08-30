import { Router } from "express";
import { getUsers, getUser,getUser_uid, postUsuario, deleteUsuario, putUsuario } from "../controllers/usuarios";
import { validarjwt } from "../middlewares/validarToken";


const route = Router();

// route.get("/", [validarjwt], getUsers);
route.get("/", getUsers);
route.get("/uid/:uid", getUser_uid);
route.get("/:id", getUser);
route.post("/", postUsuario);
route.put("/:id", putUsuario);
route.delete("/:id", deleteUsuario);

export default route;
