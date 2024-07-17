import Estado_Cita from "../models/estado_cita";
import { Request, Response } from "express";
import Cita from "../models/cita";

export const getEstados_citas = async (req: Request, res: Response) => {
  const estados_citas= await Estado_Cita.findAll();
  res.json({ estados_citas });
};

export const getEstado_cita = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const estado_cita = await Estado_Cita.findByPk(id);
  if (estado_cita) {
  res.json(estado_cita);
  } else {
  res.status(404).json({
      msg: `No existe una estado_cita con la id ${id}`,
  });
  }
};

export const postEstado_cita = async (req: Request, res: Response) => {
  const { body } = req;
  const { estado } = body;
  try {
    const existeCita = await Estado_Cita.findOne({
      where: {
        estado,
      },
    });

    if (existeCita) {
      return res.status(400).json({
        msg: "Ya existe un estado cita con el id " + estado,
      });
    }

    const estado_cita = await Estado_Cita.create({ estado });

    // res.json(psswd);
    res.json(estado_cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putEstado_cita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const estado_cita = await Estado_Cita.findByPk(id);
  if (!estado_cita) {
      return res.status(404).json({
      msg: "No existe un estado_cita con el id " + id,
      });
  }

  await estado_cita.update(body);

  res.json(estado_cita);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteEstado_cita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const estado_cita = await Estado_Cita.findByPk(id);
  if (!estado_cita) {
  return res.status(404).json({
      msg: "No existe una estado_cita con el id " + id,
  });
  }
  await estado_cita.update({ estado: false });
// await estado_usuario.destroy();
  res.json(estado_cita);
};
