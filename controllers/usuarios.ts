import Users from "../models/usuario";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
//import Estados_usuarios from "../models/estado_usuario";

export const getUsers = async (req: Request, res: Response) => {
  const users = await Users.findAll({
    // include: [
    //   {
    //     model: Estados_usuarios
    //   }
    // ]
  });
  res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const user = await Users.findByPk(id, {
    // include: [
    //   {
    //     model: Estados_usuarios
    //   }]
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `No existe el usuario con la id ${id}`,
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { user_name, password } = body;
  try {
    const existeUsuario = await Users.findOne({
      where: {
        user_name,
      },
    });

    if (existeUsuario) {
      return res.status(400).json({
        msg: "Ya existe un usuario con este nombre " + user_name,
      });
    }

    const salto = bcryptjs.genSaltSync();
    const psswd = bcryptjs.hashSync(password, salto);

    const usuario = await Users.create({ user_name, password: psswd });

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
  await usuario.update({ estado: false });
  // await usuario.destroy();
  res.json(usuario);
};
