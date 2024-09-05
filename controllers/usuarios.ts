import Users from "../models/usuario";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import Estados_usuarios from "../models/estado";
import Persona from "../models/persona";
import Profesional from "../models/profesional";
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
  const { uid,username, password } = body;
  try {
    const existeUsuario = await Users.findOne({
      where: {
        uid,
      },
    });

    if (existeUsuario) {
      return res.status(400).json({
        msg: "Ya existe un usuario con este uid " + uid,
      });
    }

    const salto = bcryptjs.genSaltSync();
    const psswd = bcryptjs.hashSync(password, salto);

    const usuario = await Users.create({ uid, username, password: psswd });

    // res.json(psswd);
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
