import Nacionalidades from "../models/nacionalidad";
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import Persona from "../models/persona";

export const getNacionalidades = async (req: Request, res: Response) => {
    const nacionalidades = await Nacionalidades.findAll({
        include: [{
            model: Persona
        }]

    });
    res.json({ nacionalidades });
};

export const getNacionalidad = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const nacionalidad = await Nacionalidades.findByPk(id, {
        include: [{
            model:Persona
        }]
    });

    if (nacionalidad) {
    res.json(nacionalidad);
    } else {
    res.status(404).json({
        msg: `No existe el nacionalidad con la id ${id}`,
    });
    }
};

export const postNacionalidad = async (req: Request, res: Response) => {
    const { body } = req;
    const { nombre } = body;
    try {
    const existeNacionalidad = await Nacionalidades.findOne({
        where: {
            nombre,
        },
    });

    if (existeNacionalidad) {
        return res.status(400).json({
        msg: "Ya existe esta nacionalidad con este nombre " + nombre,
        });
    }

    const nacionalidad = await Nacionalidades.create({ nombre });
    // res.json(psswd);
    res.json(nacionalidad);
    
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: "Hable con el administrador",
    });
    }
};

export const putNacionalidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
    const nacionalidad = await Nacionalidades.findByPk(id);
    if (!nacionalidad) {
        return res.status(404).json({
        msg: "No existe un nacionalidad con el id " + id,
        });
    }

    await nacionalidad.update(body);

    res.json(nacionalidad);
    } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: "Hable con el administrador",
    });
    }
};

export const deleteNacionalidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const nacionalidad = await Nacionalidades.findByPk(id);
    if (!nacionalidad) {
    return res.status(404).json({
        msg: "No existe un nacionalidad con el id " + id,
    });
    }
    await nacionalidad.update({ estado: false });
  // await nacionalidad.destroy();
    res.json(nacionalidad);
};
