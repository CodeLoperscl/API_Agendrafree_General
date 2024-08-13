import Estados_usuarios from "../models/estado_usuario";
import { Request, Response } from "express";
import Users from "../models/usuario";


export const getEstados_usuarios = async (req: Request, res: Response) => {
    const estados_usuarios = await Estados_usuarios.findAll({
        include: Users
    });
    res.json({ estados_usuarios });
};

export const getEstado_usuario = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const estado_usuario = await Estados_usuarios.findByPk(id, {
        include: Users
    });

    if (estado_usuario) {
    res.json(estado_usuario);
    } else {
    res.status(404).json({
        msg: `No existe el estado usuario con la id ${id}`,
    });
    }
};

export const postEstado_usuario = async (req: Request, res: Response) => {
    const { body } = req;
    const { estado } = body;
    try {
    const existeEstado_usuario = await Estados_usuarios.findOne({
        where: {
            estado,
        },
    });

    if (existeEstado_usuario) {
        return res.status(400).json({
        msg: "Ya existe un estado_usuario con este estado " + estado,
        });
    }

    const estado_usuario = await Estados_usuarios.create({ estado });
    // res.json(psswd);
    res.json(estado_usuario);
    
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: "Hable con el administrador",
    });
    }
};

export const putEstado_usuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
    const estado_usuario = await Estados_usuarios.findByPk(id);
    if (!estado_usuario) {
        return res.status(404).json({
        msg: "No existe un estado_usuario con el id " + id,
        });
    }

    await estado_usuario.update(body);

    res.json(estado_usuario);
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: "Hable con el administrador",
    });
    }
};

export const deleteEstado_usuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const estado_usuario = await Estados_usuarios.findByPk(id);
    if (!estado_usuario) {
    return res.status(404).json({
        msg: "No existe un estado_usuario con el id " + id,
    });
    }
    await estado_usuario.update({ estado: false });
  // await estado_usuario.destroy();
    res.json(estado_usuario);
};
