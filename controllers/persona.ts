import Persona from "../models/persona";
import { Request, Response } from "express";
import axios from "axios";
import Nacionalidades from "../models/nacionalidad";
import Users from "../models/usuario";


// import Estados from "../models/estado";

// Definición de la interfaz Persona
interface Paciente {
  id: number;
  paciente_id: number;
  prevision_id: number;
  estado_id: number;
}

// Función para obtener los datos de una paciente
async function data_paciente(url: string): Promise<Paciente> {
  try {
    const { data: paciente } = await axios.get(url);
    return paciente;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

// Controlador para obtener todos los especialistas
export const getPersona_rut_paciente = async (req: Request, res: Response) => {
  try {
    // Obtener todos los especialistas de la base de datos
    const paciente = await Persona.findAll({
      include: [Nacionalidades,Users],
    });

    // Crear un array de promesas para resolver todas las llamadas asíncronas
    const allPersonas = await Promise.all(
      paciente.map(async (pac: any) => {
        try {
          // Obtener los datos de la paciente para cada persona
          const pacienteData = await data_paciente(
            `${process.env.API_URL}paciente/${pac.paciente_id}`
          );

          // Crear un nuevo objeto combinando los datos de persona y paciente
          return {
            ...pac.toJSON(), // Convertir el objeto Sequelize a JSON
            paciente: pacienteData, // Asignar los datos de la paciente
          };
        } catch (error) {
          console.error(
            `Error fetching paciente for persona ${pac.id}:`,
            error
          );

          // Retornar el persona con null para paciente en caso de error
          return {
            ...pac.toJSON(), // Convertir el objeto Sequelize a JSON
            paciente: null,
          };
        }
      })
    );

    res.json({ allPersonas });
  } catch (error) {
    console.error("Error buscando especialistas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPersonas = async (req: Request, res: Response) => {
  const personas = await Persona.findAll({
    include: [Nacionalidades, Users] 

  });
  res.json({ personas });

};

export const getPersona = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const paciente = await Persona.findByPk(id, {
    include: [Users, Nacionalidades]
  
  });

  if (paciente) {
    res.json(paciente);
  } else {
  res.status(404).json({
      msg: `No existe una paciente con la id ${id}`,
  });
  }
};

export const getPersona_rut = async (req: Request, res: Response) => {
  const { rut }: any = req.params;
  const paciente = await Persona.findOne({ 
    where: {rut},
    include: [Nacionalidades,Users]
    });


  if (paciente) {
    res.json(paciente);
  } else {
  res.status(404).json({
      msg: `No existe una paciente con el rut: ${rut}`,
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
        msg: "Ya existe una paciente con este rut " + rut,
      });
    }

    const paciente = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id,usuario_id});

    // res.json(psswd);
    res.json(paciente);
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
  const paciente = await Persona.findByPk(id);
  if (!paciente) {
      return res.status(404).json({
      msg: "No existe una paciente con el id " + id,
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

// export const deletePersona = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const paciente = await Persona.findByPk(id);
//   if (!paciente) {
//   return res.status(404).json({
//       msg: "No existe una paciente con el id " + id,
//   });
//   }
//   await paciente.update({ estado_id: 2 });
// // await estado_usuario.destroy();
//   res.json(paciente);
// };
