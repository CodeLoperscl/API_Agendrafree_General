import Estados from "../models/estado";
import { Request, Response } from "express";
import Users from "../models/usuario";

export const getEstados = async (req: Request, res: Response) => {
    const estados = await Estados.findAll({
    });

    res.json({ estados });
};

export const getEstado = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const estado = await Estados.findByPk(id, {

    });

    if (estado) {
        res.json(estado);
    } else {
        res.status(404).json({
            msg: `No existe un estado usuario con la id ${id}`,
        });
    }

};

export const postEstado = async (req: Request, res: Response) => {
    const { body } = req;
    const { estado } = body;
    try {
        const existeEstado = await Estados.findOne({
            where: {
                estado,
            },
        });

        if (existeEstado) {
            return res.status(400).json({
                msg: "Ya existe una maqueta con este usuario " + estado,
            });
        }


        const Estado = await Estados.create({ estado });
        res.json(Estado);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putEstado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const Estado = await Estados.findByPk(id);
        if (!Estado) {
            return res.status(404).json({
                msg: "No existe un estado con el " + id,
            });
        }

        await Estado.update(body);

        res.json(Estado);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteEstado = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Estado = await Estados.findByPk(id);
    if (!Estado) {
        return res.status(404).json({
            msg: "No existe un estado usuario con el id " + id,
        });
    }
    await Estado.update({ estado: false });
    // await Estado.destroy();
    res.json(Estado);
};
