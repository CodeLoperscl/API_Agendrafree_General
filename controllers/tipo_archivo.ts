import Tipos_archivos from "../models/tipo_archivo";
import { Request, Response } from "express";

export const getTipos_Archivos = async (req: Request, res: Response) => {
  const tipos_archivos = await Tipos_archivos.findAll();
  res.json({ tipos_archivos });
};

export const getTipo_Archivo = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const tipo_archivo = await Tipos_archivos.findByPk(id);

  if (tipo_archivo) {
  res.json(tipo_archivo);
  } else {
  res.status(404).json({
      msg: `No existe una archivo con la id ${id}`,
  });
  }
};


export const postTipo_Archivo = async (req: Request, res: Response) => {
  const { body } = req;
  const {nombre_tipo } = body;
  try {
    const existeTipo_Archivo = await Tipos_archivos.findOne({
      where: {
        nombre_tipo,
      },
    });

    if (existeTipo_Archivo) {
      return res.status(400).json({
        msg: "Ya existe tipo de archivo con este nombre " + nombre_tipo,
      });
    }

    const tipo_archivo = await Tipos_archivos.create({nombre_tipo});

    // res.json(psswd);
    res.json(tipo_archivo);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putTipo_Archivo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const tipo_archivo = await Tipos_archivos.findByPk(id);
  if (!tipo_archivo) {
      return res.status(404).json({
      msg: "No existe una archivo con el id " + id,
      });
  }

  await tipo_archivo.update(body);

  res.json(tipo_archivo);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteTipo_Archivo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tipo_archivo = await Tipos_archivos.findByPk(id);
  if (!tipo_archivo) {
  return res.status(404).json({
      msg: "No existe una archivo con el id " + id,
  });
  }
  await tipo_archivo.update({ estado: false });
// await estado_usuario.destroy();
  res.json(tipo_archivo);
};
