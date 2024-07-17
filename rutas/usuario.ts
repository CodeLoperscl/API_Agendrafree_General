import { Router } from "express";
import { getUsers, getUser, postUsuario, deleteUsuario, putUsuario } from "../controllers/usuarios";
import { validarjwt } from "../middlewares/validarToken";


const route = Router();

route.get("/", [validarjwt], getUsers);
route.get("/:id", [validarjwt], getUser);
route.post("/", postUsuario);
route.put("/:id", putUsuario);
route.delete("/:id", deleteUsuario);


export default route;
