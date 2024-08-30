import Paciente from "../models/paciente";
import { Request, Response } from "express";
import Persona from "../models/persona";
import Prevision from "../models/prevision";
import Estado from "../models/estados";

export const getPacientes = async (req: Request, res: Response) => {
    const pacientes = await Paciente.findAll({
        include: Prevision,
    });
    res.json({ pacientes });
};

export const getPaciente = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const paciente = await Paciente.findByPk(id, {
        include: Prevision,
    });

    if (paciente) {
        res.json(paciente);
    } else {
        res.status(404).json({
            msg: `No existe una paciente con la id ${id}`,
        });
    }
};

// export const getPaciente_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const paciente = await Paciente.findOne({
//     where: {rut},
//     include: Nacionalidades
//     });

//   if (paciente) {
//     res.json(paciente);
//   } else {
//   res.status(404).json({
//       msg: `No existe una paciente con el rut: ${rut}`,
//   });
//   }
// };

export const postPaciente = async (req: Request, res: Response) => {
    const { body } = req;
    const { persona_id, prevision_id, estado_id } = body;
    try {
        const existePaciente = await Paciente.findOne({
            where: {
                persona_id
            },
        });

        if (existePaciente) {
            return res.status(400).json({
                msg: "Ya existe una paciente con este usuario " + persona_id,
            });
        }

        const paciente = await Paciente.create({ persona_id, prevision_id, estado_id });

        // res.json(psswd);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putPaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const paciente = await Paciente.findByPk(id);
        if (!paciente) {
            return res.status(404).json({
                msg: "No existe una paciente con el id " + id,
            });
        }

        await paciente.update(body);

        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deletePaciente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
        return res.status(404).json({
            msg: "No existe una paciente con el id " + id,
        });
    }
    await paciente.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(paciente);
};
