import Persona from "../models/persona";
import { Request, Response } from "express";
import Nacionalidades from "../models/nacionalidad";
import Users from "../models/usuario";
// import Estados from "../models/estado";

export const getPersonas = async (req: Request, res: Response) => {
  const personas = await Persona.findAll({
    include: [Nacionalidades, Users] 

  });
  res.json({ personas });

};

export const getPersona = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const persona = await Persona.findByPk(id, {
    include: [Users, Nacionalidades]
  
  });

  if (persona) {
    res.json(persona);
  } else {
  res.status(404).json({
      msg: `No existe una persona con la id ${id}`,
  });
  }
};

export const getPersona_rut = async (req: Request, res: Response) => {
  const { rut }: any = req.params;
  const persona = await Persona.findOne({ 
    where: {rut},
    include: Nacionalidades
    });


  if (persona) {
    res.json(persona);
  } else {
  res.status(404).json({
      msg: `No existe una persona con el rut: ${rut}`,
  });
  }
};


export const postPersona = async (req: Request, res: Response) => {
  const { body } = req;
  const { nombre, apellido, rut, email, fono, nacionalidad_id,usuario_id  } = body;
  try {
    const existePersona = await Persona.findOne({
      where: {
        rut,
      },
    });

    if (existePersona) {
      return res.status(400).json({
        msg: "Ya existe una persona con este rut " + rut,
      });
    }

    const persona = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id,usuario_id});

    // res.json(psswd);
    res.json(persona);
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
      msg: "No existe una persona con el id " + id,
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

// export const deletePersona = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const persona = await Persona.findByPk(id);
//   if (!persona) {
//   return res.status(404).json({
//       msg: "No existe una persona con el id " + id,
//   });
//   }
//   await persona.update({ estado_id: 2 });
// // await estado_usuario.destroy();
//   res.json(persona);
// };
