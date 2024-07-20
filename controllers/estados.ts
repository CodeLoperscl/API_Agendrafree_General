import Estado from "../models/estados";
import { Request, Response } from "express";
import Cita from "../models/cita";

export const getEstados = async (req: Request, res: Response) => {
  const estado= await Estado.findAll();
  res.json({ estado });
};

export const getEstado = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const estado = await Estado.findByPk(id);
  if (estado) {
  res.json(estado);
  } else {
  res.status(404).json({
      msg: `No existe una Estado con la id ${id}`,
  });
  }
};

export const postEstado = async (req: Request, res: Response) => {
  const { body } = req;
  const { estado } = body;
  try {
    const existeEstado = await Estado.findOne({
      where: {
        estado,
      },
    });

    if (existeEstado) {
      return res.status(400).json({
        msg: "Ya existe un estado cita con el id " + estado,
      });
    }

    const Estadito = await Estado.create({ estado });

    // res.json(psswd);
    res.json(Estadito);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putEstado = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const estado = await Estado.findByPk(id);
  if (!estado) {
      return res.status(404).json({
      msg: "No existe un estado con el id " + id,
      });
  }

  await estado.update(body);

  res.json(estado);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteEstado = async (req: Request, res: Response) => {
  const { id } = req.params;
  const estado = await Estado.findByPk(id);
  if (!estado) {
  return res.status(404).json({
      msg: "No existe una estado con el id " + id,
  });
  }
  await estado.update({ estado: false });
// await estado_usuario.destroy();
  res.json(estado);
};
