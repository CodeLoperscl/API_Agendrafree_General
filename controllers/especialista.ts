import Especialista from "../models/especialista";
import { Request, Response } from "express";

export const getEspecialistas = async (req: Request, res: Response) => {
  const especialistas = await Especialista.findAll();
  res.json({ especialistas });
};

export const getEspecialista = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const especialista = await Especialista.findByPk(id);

  if (especialista) {
  res.json(especialista);
  } else {
  res.status(404).json({
      msg: `No existe una especialista con la id ${id}`,
  });
  }
};


export const postEspecialista = async (req: Request, res: Response) => {
  const { body } = req;
  const { uid, hora_minima_bono, id_persona, bd_name, bd_user, bd_pass,bd_url } = body;
  try {
    const existeEspecialista = await Especialista.findOne({
      where: {
        uid,
      },
    });

    if (existeEspecialista) {
      return res.status(400).json({
        msg: "Ya existe una especialista con el uid " + uid,
      });
    }

    const especialista = await Especialista.create({ uid, hora_minima_bono, id_persona, bd_name, bd_user, bd_pass,bd_url});

    // res.json(psswd);
    res.json(especialista);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putEspecialista = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const especialista = await Especialista.findByPk(id);
  if (!especialista) {
      return res.status(404).json({
      msg: "No existe una especialista con el id " + id,
      });
  }

  await especialista.update(body);

  res.json(especialista);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteEspecialista = async (req: Request, res: Response) => {
  const { id } = req.params;
  const especialista = await Especialista.findByPk(id);
  if (!especialista) {
  return res.status(404).json({
      msg: "No existe una especialista con el id " + id,
  });
  }
  await especialista.update({ estado: false });
// await estado_usuario.destroy();
  res.json(especialista);
};
