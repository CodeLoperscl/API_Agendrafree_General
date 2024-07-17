import Paciente from "../models/paciente";
import { Request, Response } from "express";

export const getPacientes = async (req: Request, res: Response) => {
  const pacientes = await Paciente.findAll();
  res.json({ pacientes });
};

export const getPaciente = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const paciente = await Paciente.findByPk(id);

  if (paciente) {
  res.json(paciente);
  } else {
  res.status(404).json({
      msg: `No existe el paciente con la id ${id}`,
  });
  }
};

export const postPaciente = async (req: Request, res: Response) => {
  const { body } = req;
  const { uid, id_persona, id_prevision } = body;
  try {
    const existePaciente = await Paciente.findOne({
      where: {
        uid,
      },
    });

    if (existePaciente) {
      return res.status(400).json({
        msg: "Ya existe un usuario con este rut " + uid,
      });
    }
    const paciente = await Paciente.create({uid, id_persona, id_prevision});

    // res.json(psswd);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putPaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const paciente = await Paciente.findByPk(id);
  if (!paciente) {
      return res.status(404).json({
      msg: "No existe un paciente con el id " + id,
      });
  }

  await paciente.update(body);

  res.json(paciente);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const paciente = await Paciente.findByPk(id);
  if (!paciente) {
  return res.status(404).json({
      msg: "No existe un paciente con el id " + id,
  });
  }
  await paciente.update({ estado: false });
// await estado_usuario.destroy();
  res.json(paciente);
};
