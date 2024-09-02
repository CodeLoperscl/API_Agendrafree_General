import Archivo from "../models/archivo";
import { Request, Response } from "express";
import Cita from "../models/cita";
import Tipos_archivos from "../models/tipo_archivo";
import Estado from "../models/estados";


export const getArchivos = async (req: Request, res: Response) => {
    const archivos = await Archivo.findAll({
        include: [Cita,Tipos_archivos]
        // Estado

    });
    res.json({ archivos });

};

export const getArchivo = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    const archivo = await Archivo.findByPk(id, {
        include: [Cita,Tipos_archivos,Estado]

    });

    if (archivo) {
        res.json(archivo);
    } else {
        res.status(404).json({
            msg: `No existe una archivo con la id ${id}`,
        });
    }
};

// export const getArchivo_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const archivo = await Archivo.findOne({ 
//     where: {rut},
//     include: Nacionalidades
//     });


//   if (archivo) {
//     res.json(archivo);
//   } else {
//   res.status(404).json({
//       msg: `No existe una archivo con el rut: ${rut}`,
//   });
//   }
// };


export const postArchivo = async (req: Request, res: Response) => {
    const { body } = req;
    const { ruta_archivo, cita_id, tipo_archivo_id, estado_id } = body;
    try {
        const existeArchivo = await Archivo.findOne({
            where: {
                ruta_archivo,
            },
        });

        if (existeArchivo) {
            return res.status(400).json({
                msg: "Ya existe una archivo con esta ruta " + ruta_archivo,
            });
        }

        const archivo = await Archivo.create({ ruta_archivo, cita_id, tipo_archivo_id, estado_id });

        // res.json(psswd);
        res.json(archivo);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const putArchivo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const archivo = await Archivo.findByPk(id);
        if (!archivo) {
            return res.status(404).json({
                msg: "No existe una archivo con el id " + id,
            });
        }

        await archivo.update(body);

        res.json(archivo);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador",
        });
    }
};

export const deleteArchivo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const archivo = await Archivo.findByPk(id);
    if (!archivo) {
        return res.status(404).json({
            msg: "No existe una archivo con el id " + id,
        });
    }
    await archivo.update({ estado: false });
    // await estado_usuario.destroy();
    res.json(archivo);
};
