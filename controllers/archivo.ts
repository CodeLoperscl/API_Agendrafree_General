import Archivo from "../models/archivo";
import { Request, Response } from "express";

export const getArchivos = async (req: Request, res: Response) => {
  const archivos = await Archivo.findAll();
  res.json({ archivos });
};

export const getArchivo = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const archivo = await Archivo.findByPk(id);

  if (archivo) {
  res.json(archivo);
  } else {
  res.status(404).json({
      msg: `No existe una archivo con la id ${id}`,
  });
  }
};


export const postArchivo = async (req: Request, res: Response) => {
  const { body } = req;
  const {id_cita, id_tipoArchivo, ruta_archivo, id_estado_abono } = body;
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

    const archivo = await Archivo.create({id_cita, id_tipoArchivo, ruta_archivo, id_estado_abono});

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
