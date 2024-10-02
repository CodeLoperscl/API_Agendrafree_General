// import Users from "../models/usuario";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import Users from "../models/usuario";
import { generarjwt } from "../helpers/generarJWT";
import { v4 as uuidv4 } from 'uuid';//LIBRERIA UUID

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user: any = await Users.findOne({
      where: { username },
    });
    if (!user || !user.username) {
      return res.status(400).json({
        msg: `El usuario con el username ${username} no existe`,
      });
    }
    if (!user.estado_id) {
      return res.status(400).json({
        msg: `El usuario se encuentra deshabilitado`,
      });
    }

    // Comparación de la contraseña ingresada con la encriptada en la BD
    const validPassword = bcryptjs.compareSync(password, user.password);
    console.log(password, "Contraseña ingresada");
    console.log(user.password, "Contraseña usuario (hash)");

    if (!validPassword) {
      return res.status(400).json({
        msg: `La contraseña no es válida para este usuario`,
      });
    }

    // Generar token y responder al cliente
    const { id } = user;
    const name = user.username;
    const payload = { name, id };
    const token = await generarjwt(payload);
    
    res.json({
      msg: "login Ok",
      user,
      token,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Algo salió mal, hable con el administrador",
    });
  }
};