import Especialista from "../models/especialista";
import { Request, Response } from "express";
import Especialidad from "../models/especialidad";

export const getEspecialistas = async (req: Request, res: Response) => {
    const especialistas = await Especialista.findAll({
        include: Especialidad,
    });
    res.json({ especialistas });
};

export const getEspecialista = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const maqueta = await Especialista.findByPk(id, {
        include: Especialidad,
    });

    if (maqueta) {
        res.json(maqueta);
    } else {
        res.status(404).json({
            msg: `No existe una maqueta con la id ${id}`,
        });
    }
};

// export const getEspecialista_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const maqueta = await Especialista.findOne({
//     where: {rut},
//     include: Nacionalidades
//     });

//   if (maqueta) {
//     res.json(maqueta);
//   } else {
//   res.status(404).json({
//       msg: `No existe una maqueta con el rut: ${rut}`,
//   });
//   }
// };

export const postEspecialista = async (req: Request, res: Response) => {
    const { body } = req;
    const { usuario, contraseña } = body;
    try {
        const existeEspecialista = await Especialista.findOne({
            where: {
                usuario,
            },
        });

        if (existeEspecialista) {
            return res.status(400).json({
                msg: "Ya existe una maqueta con este usuario " + usuario,
            });
        }

        const maqueta = await Especialista.create({ usuario, contraseña });

        // res.json(psswd);
        res.json(maqueta);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putEspecialista = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const maqueta = await Especialista.findByPk(id);
        if (!maqueta) {
            return res.status(404).json({
                msg: "No existe una maqueta con el id " + id,
            });
        }

        await maqueta.update(body);

        res.json(maqueta);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteEspecialista = async (req: Request, res: Response) => {
    const { id } = req.params;
    const maqueta = await Especialista.findByPk(id);
    if (!maqueta) {
        return res.status(404).json({
            msg: "No existe una maqueta con el id " + id,
        });
    }
    await maqueta.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(maqueta);
};
