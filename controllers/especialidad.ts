import Especialidad from "../models/especialidad";
import { Request, Response } from "express";
import Especialista from "../models/especialista";

export const getEspecialidades = async (req: Request, res: Response) => {
    const especialidades = await Especialidad.findAll({
        include: Especialista

    });
    res.json({ especialidades });

};

export const getEspecialidad = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const especialidad = await Especialidad.findByPk(id, {
        include: Especialista

    });

    if (especialidad) {
        res.json(especialidad);
    } else {
        res.status(404).json({
            msg: `No existe una especialidad con la id ${id}`,
        });
    }
};

// export const getEspecialidad_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const especialidad = await Especialidad.findOne({ 
//     where: {rut},
//     include: Nacionalidades
//     });


//   if (especialidad) {
//     res.json(especialidad);
//   } else {
//   res.status(404).json({
//       msg: `No existe una especialidad con el rut: ${rut}`,
//   });
//   }
// };


export const postEspecialidad = async (req: Request, res: Response) => {
    const { body } = req;
    const { usuario, contraseña } = body;
    try {
        const existeEspecialidad = await Especialidad.findOne({
            where: {
                usuario,
            },
        });

        if (existeEspecialidad) {
            return res.status(400).json({
                msg: "Ya existe una especialidad con este usuario " + usuario,
            });
        }

        const especialidad = await Especialidad.create({ usuario, contraseña });

        // res.json(psswd);
        res.json(especialidad);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putEspecialidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const especialidad = await Especialidad.findByPk(id);
        if (!especialidad) {
            return res.status(404).json({
                msg: "No existe una especialidad con el id " + id,
            });
        }

        await especialidad.update(body);

        res.json(especialidad);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteEspecialidad = async (req: Request, res: Response) => {
    const { id } = req.params;
    const especialidad = await Especialidad.findByPk(id);
    if (!especialidad) {
        return res.status(404).json({
            msg: "No existe una especialidad con el id " + id,
        });
    }
    await especialidad.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(especialidad);
};
