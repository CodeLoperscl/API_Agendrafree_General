import Persona from "../models/persona";
import e, { Request, Response } from "express";

export const getPersonas = async (req: Request, res: Response) => {
  const Personas = await Persona.findAll();
  res.json({ Personas });
};

export const getPersona = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const persona = await Persona.findByPk(id);

  if (persona) {
  res.json(persona);
  } else {
  res.status(404).json({
      msg: `No existe el nacionalidad con la id ${id}`,
  });
  }
};


export const postPersona = async (req: Request, res: Response) => {
  const { body } = req;
  const { nombre, apellido, rut, email, fono } = body;
  try {
    const existePersona = await Persona.findOne({
      where: {
        rut,
      },
    });

    if (existePersona) {
      return res.status(400).json({
        msg: "Ya existe un usuario con este rut " + rut,
      });
    }

    const usuario = await Persona.create({ nombre, apellido, rut, email, fono});

    // res.json(psswd);
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putPersona = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const persona = await Persona.findByPk(id);
  if (!persona) {
      return res.status(404).json({
      msg: "No existe un nacionalidad con el id " + id,
      });
  }

  await persona.update(body);

  res.json(persona);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deletePersona = async (req: Request, res: Response) => {
  const { id } = req.params;
  const persona = await Persona.findByPk(id);
  if (!persona) {
  return res.status(404).json({
      msg: "No existe una persona con el id " + id,
  });
  }
  await persona.update({ estado: false });
// await estado_usuario.destroy();
  res.json(persona);
};
