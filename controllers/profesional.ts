import Profesional from "../models/profesional";
import { Request, Response } from "express";
import Persona from "../models/persona";
import Estados from "../models/estado";

export const getProfesionales = async (req: Request, res: Response) => {
    const profesionales = await Profesional.findAll({
        include: [Persona, Estados]
    });
    res.json({ profesionales });
};

export const getProfesional = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const profesional = await Profesional.findByPk(id, {
        include: [Persona, Estados]
    });

    if (profesional) {
        res.json(profesional);
    } else {
        res.status(404).json({
            msg: `No existe una profesional con la id ${id}`,
        });
    }
};

// export const getProfesional_rut = async (req: Request, res: Response) => {
//     const { rut }: any = req.params;
//     const profesional = await Profesional.findOne({
//         where: { rut },
//         include: Persona,
//     });

//     if (profesional) {
//         res.json(profesional);
//     } else {
//         res.status(404).json({
//             msg: `No existe una profesional con el rut: ${rut}`,
//         });
//     }
// };

export const postProfesional = async (req: Request, res: Response) => {
    const { body } = req;
    const { bd_host, bd_name, bd_pass, bd_url, persona_id } = body;
    try {
        const existeProfesional = await Profesional.findOne({
            where: {
                bd_name,
            },
        });

        if (existeProfesional) {
            return res.status(400).json({
                msg: "Ya existe una profesional con esta bd name " + bd_name,
            });
        }

        const profesional = await Profesional.create({bd_host, bd_name, bd_pass, bd_url, persona_id});

        // res.json(psswd);
        res.json(profesional);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putProfesional = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const profesional = await Profesional.findByPk(id);
        if (!profesional) {
            return res.status(404).json({
                msg: "No existe una profesional con el id " + id,
            });
        }

        await profesional.update(body);

        res.json(profesional);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteProfesional = async (req: Request, res: Response) => {
    const { id } = req.params;
    const profesional = await Profesional.findByPk(id);
    if (!profesional) {
        return res.status(404).json({
            msg: "No existe una profesional con el id " + id,
        });
    }
    await profesional.update({ estado_id: 2 });
    // await estado_usuario.destroy();
    res.json(profesional);
};
