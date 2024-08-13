import Cita from "../models/cita";
import { Request, Response } from "express";
import { Op } from "sequelize";
import Estado_Cita from "../models/estados";
import Paciente from "../models/paciente";
import Especialista from "../models/especialista";
import Prevision from "../models/prevision";
import Hora_disponible from "../models/hora_disponible";
import Archivo from "../models/archivo";


export const getCitas = async (req: Request, res: Response) => {
  const citas = await Cita.findAll({
    include: [Estado_Cita,Paciente,Especialista,Prevision,Hora_disponible]
  });
  res.json({ citas });
};

export const getCita = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const cita = await Cita.findByPk(id);
  if (cita) {
  res.json(cita);
  } else {
  res.status(404).json({
      msg: `No existe una citas con la id ${id}`,
  });
  }
};

export const postCita = async (req: Request, res: Response) => {
  const { body } = req;
  const { fecha } = body;
  try {
    const existeCita = await Cita.findOne({
      where: {
        fecha,
      },
    });

    if (existeCita) {
      return res.status(400).json({
        msg: "Ya existe una cita con este rut " + fecha,
      });
    }

    const cita = await Cita.create({ });

    // res.json(psswd);
    res.json(cita);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const cita = await Cita.findByPk(id);
  if (!cita) {
      return res.status(404).json({
      msg: "No existe una cita con el id " + id,
      });
  }

  await cita.update(body);

  res.json(cita);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteCita = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cita = await Cita.findByPk(id);
  if (!cita) {
  return res.status(404).json({
      msg: "No existe una cita con el id " + id,
  });
  }
  await cita.update({ estado: false });
// await estado_usuario.destroy();
  res.json(cita);
};
