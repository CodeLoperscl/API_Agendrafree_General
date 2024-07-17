import Prevision from "../models/prevision";
import { Request, Response } from "express";

export const getPrevisiones = async (req: Request, res: Response) => {
  const previsiones = await Prevision.findAll();
  res.json({ previsiones });
};

export const getPrevision = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const prevision = await Prevision.findByPk(id);

  if (prevision) {
  res.json(prevision);
  } else {
  res.status(404).json({
      msg: `No existe una prevision con la id ${id}`,
  });
  }
};


export const postPrevision = async (req: Request, res: Response) => {
  const { body } = req;
  const { nombre } = body;
  try {
    const existePrevision = await Prevision.findOne({
      where: {
        nombre,
      },
    });

    if (existePrevision) {
      return res.status(400).json({
        msg: "Ya existe una prevision con este nombre " + nombre,
      });
    }

    const prevision = await Prevision.create({ nombre});

    // res.json(psswd);
    res.json(prevision);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putPrevision = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const prevision = await Prevision.findByPk(id);
  if (!prevision) {
      return res.status(404).json({
      msg: "No existe una prevision con el id " + id,
      });
  }

  await prevision.update(body);

  res.json(prevision);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deletePrevision = async (req: Request, res: Response) => {
  const { id } = req.params;
  const prevision = await Prevision.findByPk(id);
  if (!prevision) {
  return res.status(404).json({
      msg: "No existe una prevision con el id " + id,
  });
  }
  await prevision.update({ estado: false });
// await estado_usuario.destroy();
  res.json(prevision);
};
