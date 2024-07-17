import Hora_disponible from "../models/hora_disponible";
import { Request, Response } from "express";

export const getHoras_disponibles = async (req: Request, res: Response) => {
  const horas_disponibles = await Hora_disponible.findAll();
  res.json({ horas_disponibles });
};

export const getHora_disponible = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const hora_disponible = await Hora_disponible.findByPk(id);

  if (hora_disponible) {
  res.json(hora_disponible);
  } else {
  res.status(404).json({
      msg: `No existe una hora_disponible con la id ${id}`,
  });
  }
};


export const postHora_disponible = async (req: Request, res: Response) => {
  const { body } = req;
  const { id_especialista, hora} = body;
  try {
    const existeHora_disponible = await Hora_disponible.findOne({
      where: {
        hora,
      },
    });

    if (existeHora_disponible) {
      return res.status(400).json({
        msg: "Ya esta ocupada esta hora " + hora,
      });
    }

    const hora_disponible = await Hora_disponible.create({ id_especialista, hora});

    // res.json(psswd);
    res.json(hora_disponible);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putHora_disponible = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const hora_disponible = await Hora_disponible.findByPk(id);
  if (!hora_disponible) {
      return res.status(404).json({
      msg: "No existe una hora disponible con el id " + id,
      });
  }

  await hora_disponible.update(body);

  res.json(hora_disponible);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteHora_disponible = async (req: Request, res: Response) => {
  const { id } = req.params;
  const hora_disponible = await Hora_disponible.findByPk(id);
  if (!hora_disponible) {
  return res.status(404).json({
      msg: "No existe una hora disponible con el id " + id,
  });
  }
  await hora_disponible.update({ estado: false });
// await estado_usuario.destroy();
  res.json(hora_disponible);
};
