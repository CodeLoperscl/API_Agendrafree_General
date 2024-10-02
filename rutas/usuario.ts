import { Router } from "express";
import { getUsers, getUser,getUser_uid, postUsuario, deleteUsuario, putUsuario } from "../controllers/usuarios";
import { validarjwt } from "../middlewares/validarToken";


const route = Router();

// route.get("/", [validarjwt], getUsers);
route.get("/",[validarjwt], getUsers);
route.get("/uid/:uid",[validarjwt], getUser_uid);
route.get("/:id", getUser);
route.post("/",[validarjwt], postUsuario);
route.put("/:id",[validarjwt], putUsuario);
route.delete("/:id",[validarjwt], deleteUsuario);

export default route;
