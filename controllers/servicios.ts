import Servicio from "../models/servicios";
import { Request, Response } from "express";

export const getServicios = async (req: Request, res: Response) => {
  const servicios = await Servicio.findAll();
  res.json({ servicios });
};

export const getServicio = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const servicio = await Servicio.findByPk(id);

  if (servicio) {
  res.json(servicio);
  } else {
  res.status(404).json({
      msg: `No existe una servicio con la id ${id}`,
  });
  }
};


export const postServicio = async (req: Request, res: Response) => {
  const { body } = req;
  const {nombre,id_especialista,estado } = body;
  try {
    const existeServicio = await Servicio.findOne({
      where: {
        nombre,
      },
    });

    if (existeServicio) {
      return res.status(400).json({
        msg: "Ya existe una servicio con este rut " + nombre,
      });
    }

    const servicio = await Servicio.create({nombre,id_especialista,estado});

    // res.json(psswd);
    res.json(servicio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putServicio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const servicio = await Servicio.findByPk(id);
  if (!servicio) {
      return res.status(404).json({
      msg: "No existe una servicio con el id " + id,
      });
  }

  await servicio.update(body);

  res.json(servicio);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteServicio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const servicio = await Servicio.findByPk(id);
  if (!servicio) {
  return res.status(404).json({
      msg: "No existe una servicio con el id " + id,
  });
  }
  await servicio.update({ estado: false });
// await estado_usuario.destroy();
  res.json(servicio);
};
