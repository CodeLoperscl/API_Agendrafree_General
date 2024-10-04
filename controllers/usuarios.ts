import Users from "../models/usuario";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import Estados_usuarios from "../models/estado";
import Persona from "../models/persona";
import Profesional from "../models/profesional";

import { v4 as uuidv4 } from 'uuid';//LIBRERIA UUID

export const crearUsuario = async(username:string) => {
  const uuid = uuidv4();
  const shortUuid = uuid.slice(0, 8);   // Limitar el UUID a los primeros 5 caracteres

      const existeUsuario = await Users.findOne({
        where: {
          username,
        },
      });
  
      if (existeUsuario) {
        return false;
      }
  
      const salto = bcryptjs.genSaltSync();
      const psswd = bcryptjs.hashSync(shortUuid, salto);
  
      const usuario = await Users.create({ uid: shortUuid , username, password: psswd });
      console.log(usuario);
      return usuario;

}

//ULtima version 05-09-2024 10:36hrs
export const getUsers = async (req: Request, res: Response) => {
  const users = await Users.findAll({
    include: [Estados_usuarios]

  });
  res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const user = await Users.findByPk(id, {
    include: [Estados_usuarios]

  
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `No existe el usuario con la id ${id}`,
    });
  }
};

export const getUser_uid = async (req: Request, res: Response) => {
  const { uid }: any = req.params;
  const user:any = await Users.findOne({
    where: {uid},
    include:[ {
      model: Persona, 
      include: [Profesional]
    }]
  });

  if (user) {
    // if(user.personas.profesionales.habilitado){
      // res.json(user);
      res.json(user);
    // }else{
    //   res.status(404).json({
    //     msg: `El profesional ${user.personas.nombre} se encuentra deshabilitado`,
    //   });
    // }
  } else {
    res.status(404).json({
      msg: `No existe el usuario con la id ${uid}`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { username } = body;
  try {
    const usuario = await crearUsuario(username);
    if(!usuario){
      return res.status(400).json({
        msg: "Ya existe un usuario con este nombre " + username,
      });
    }
    res.json(usuario);
  } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Hable con el administrador",
      });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Users.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: "No existe un usuario con el id " + id,
      });
    }

    await usuario.update(body);

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Users.findByPk(id);
  if (!usuario) {
    return res.status(404).json({
      msg: "No existe un usuario con el id " + id,
    });
  }
  await usuario.update({ estado_id: 2 });
  // await usuario.destroy();
  res.json(usuario);
};
