import Profesional from "../models/profesional";
import { Request, Response } from "express";
import Persona from "../models/persona";
import Estados from "../models/estado";
//HOLA
export const getProfesionales = async (req: Request, res: Response) => {
    const profesionales = await Profesional.findAll({
        include: [Persona]
    });
    res.json({ profesionales });
};

export const getProfesional = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const profesional = await Profesional.findByPk(id, {
        include: [Persona]
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
    const { persona_id, habilitado, ruta_api } = body;
    try {
        const existeProfesional = await Profesional.findOne({
            where: {
                persona_id,
            },
        });

        if (existeProfesional) {
            return res.status(400).json({
                msg: "Ya existe una profesional con este persona id: " + persona_id,
            });
        }

        const profesional = await Profesional.create({persona_id, habilitado, ruta_api});

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
    await profesional.update({ estado_id: false });
    // await estado_usuario.destroy();
    res.json(profesional);
};
