import Especialidad from "../models/especialidad";
import { Request, Response } from "express";

export const getEspecialidades = async (req: Request, res: Response) => {
  const especialidades = await Especialidad.findAll();
  res.json({ especialidades });
};

export const getEspecialidad = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const especialidad = await Especialidad.findByPk(id);

  if (especialidad) {
  res.json(especialidad);
  } else {
  res.status(404).json({
      msg: `No existe una especialidad con la id ${id}`,
  });
  }
};


export const postEspecialidad = async (req: Request, res: Response) => {
  const { body } = req;
  const {nombre, id_especialista, abreviatura } = body;
  try {
    const existeEspecialidad = await Especialidad.findOne({
      where: {
        nombre,
      },
    });

    if (existeEspecialidad) {
      return res.status(400).json({
        msg: "Ya existe una Especialidad con este nombre " + existeEspecialidad,
      });
    }
//cambie el nombre de la columna especialidad a nombre en la tabla especialidades
    const especialidad = await Especialidad.create({nombre, id_especialista, abreviatura});

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
      msg: "No existe una archivo con el id " + id,
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
      msg: "No existe una archivo con el id " + id,
  });
  }
  await especialidad.update({ estado: false });
// await estado_usuario.destroy();
  res.json(especialidad);
};
