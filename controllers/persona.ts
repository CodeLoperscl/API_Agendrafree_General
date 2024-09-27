import Persona from "../models/persona";
import { Request, Response } from "express";
import axios from "axios";
import Nacionalidades from "../models/nacionalidad";
import Users from "../models/usuario";
import { transporter, mailOptions } from "../config/email";
import { Op } from "sequelize";
import { crearUsuario } from "./usuarios";




// import Estados from "../models/estado";

// Definición de la interfaz Paciente
interface Paciente {
  id: number;
  persona_id: number;
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
export const getPersonas = async (req: Request, res: Response) => {
  try {
    // Obtener todos los pacientes de la base de datos, excluyendo 'password' de Users
    const persona = await Persona.findAll({
      include: [
        Nacionalidades,
        {
          model: Users,
          attributes: { exclude: ['password'] }, // Excluir el campo 'password'
        }
      ],
    });

    res.json({ persona });
  } catch (error) {
    console.error("Error buscando especialistas:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getPersona = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Obtener una persona por su ID, excluyendo 'password' de Users
    const persona = await Persona.findByPk(id, {
      include: [
        Nacionalidades,
        {
          model: Users,
          attributes: { exclude: ['password'] }, // Excluir el campo 'password'
        }
      ],
    });

    if (!persona) {
      return res.status(404).json({
        msg: `No existe una Persona con la id ${id}`,
      });
    }

    return res.json({ persona });
  } catch (error: any) {
    console.error("Error buscando la Persona:", error);
    return res.status(500).json({
      msg: "Error al obtener la Persona",
      error: error.message,
    });
  }
};



export const getPersona_rut = async (req: Request, res: Response) => {
  try {
  const { rut }: any = req.params;
  const persona: any = await Persona.findOne({
    where: { rut },
    include: [Nacionalidades, Users]
  });

  if (!persona) {
    return res.status(404).json({
      msg: `No existe una persona con la rut ${rut}`,
    });
  }

  const paciente = await data_paciente(
    `${process.env.API_URL}paciente/persona/${persona.id}`  // AGREGAR RUTA Y METODO
  );

  return res.json({ persona, paciente});

  }catch (error: any) {
    console.error("Error fetching Persona:", error);
    return res.status(500).json({
      msg: "Error al obtener la Persona",
      error: error.message,
    });
  }
};

export const postPersona = async (req: Request, res: Response) => {
  const { body } = req;
  const { nombre, apellido, rut, email, fono, nacionalidad_id, prevision_id, estado_id } = body;

  try {
    // Verificar si ya existe una persona con el mismo RUT o correo
    const existePersona = await Persona.findOne({ where: { rut } });
    if (existePersona) {
      return res.status(400).json({ msg: "Ya existe un paciente con este rut " + rut });
    }

    const existePersona2 = await Persona.findOne({ where: { email } });
    if (existePersona2) {
      return res.status(400).json({ msg: "Ya existe un paciente con este email " + email });
    }

    // Crear un usuario asociado a la persona
    const { id: usuario_id }: any = await crearUsuario(rut);
    if (!usuario_id) {
      return res.status(400).json({ msg: "Error al crear el usuario con este rut " + rut });
    }

    console.log("idUsuario = ", usuario_id);

    // Crear persona en la base de datos "general"
    const persona = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });

    // Hacer la solicitud POST a la otra API para crear el paciente en el proyecto "especialista"
    const pacienteData = {
      persona_id: usuario_id, // ID de la persona recién creada
      prevision_id: 1,
      estado_id: 1,
    };

    // URL de la API del proyecto especialista
    const apiEspecialistaUrl = `${process.env.API_URL}paciente`;
    console.log('URL del API especialista:', apiEspecialistaUrl);


    try {
      // Realizar el POST request para crear al paciente en la otra base de datos
      const { data: paciente } = await axios.post(apiEspecialistaUrl, pacienteData);

      console.log("Paciente creado en la base de datos especialista:", paciente);

      // Responder con los datos del persona creada y el paciente asociado
      res.json({ persona, paciente });
      
    } catch (error) {
      console.error("Error creando paciente en el proyecto especialista:", error);
      return res.status(500).json({ msg: "Error al crear el paciente en la base de datos especialista" });
    }

    // Configurar el mensaje de bienvenida
    const emailContent = `
    <h1>Bienvenido a nuestra clínica, ${nombre} ${apellido}!</h1>
    <p>Gracias por registrarte. Aquí tienes un resumen de tus datos:</p>
    <ul>
      <li><strong>Nombre:</strong> ${nombre}</li>
      <li><strong>Apellido:</strong> ${apellido}</li>
      <li><strong>RUT:</strong> ${rut}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Teléfono:</strong> ${fono}</li>
    </ul>
  `;

  // Enviar el correo electrónico usando el transporter configurado
  await transporter.sendMail(mailOptions(email, 'Bienvenido a nuestra clínica', emailContent));

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hable con el administrador" });
  }
};



// export const postPersona = async (req: Request, res: Response) => {
//   const { body } = req;
//   const { nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id } = body;
//   try {
//     const existePersona = await Persona.findOne({
//       where: { rut },
//     });

//     if (existePersona) {
//       return res.status(400).json({
//         msg: "Ya existe un paciente con este rut " + rut,
//       });
//     }

//     const existePersona2 = await Persona.findOne({
//       where: { email },
//     });

//     if (existePersona2) {
//       return res.status(400).json({
//         msg: "Ya existe un paciente con este email " + email,
//       });
//     }


//     const{id}:any = await crearUsuario(rut);
//     if(!id){
//       return res.status(400).json({
//         msg: "Ya existe un usuario con este rut " + rut,
//       });
//     }

//     console.log("idUsuario = ", id);
//     // Crear paciente en la base de datos
//     const paciente = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id: id });

//     // Configurar el mensaje de bienvenida
//     const emailContent = `
//       <h1>Bienvenido a nuestra clínica, ${nombre} ${apellido}!</h1>
//       <p>Gracias por registrarte. Aquí tienes un resumen de tus datos:</p>
//       <ul>
//         <li><strong>Nombre:</strong> ${nombre}</li>
//         <li><strong>Apellido:</strong> ${apellido}</li>
//         <li><strong>RUT:</strong> ${rut}</li>
//         <li><strong>Email:</strong> ${email}</li>
//         <li><strong>Teléfono:</strong> ${fono}</li>
//       </ul>
//     `;

//     // Enviar el correo electrónico
//     await transporter.sendMail(
//       mailOptions(email, 'Bienvenido a nuestra clínica', emailContent)
//     );

//     // Responder con los datos del paciente creado
//     res.json({paciente, id});
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };




//SIN USO DE CORREO
// export const postPersona = async (req: Request, res: Response) => {
//   const { body } = req;
//   const { nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id } = body;
//   try {
//     const existePersona = await Persona.findOne({
//       where: {
//         rut,
//       },
//     });

//     if (existePersona) {
//       return res.status(400).json({
//         msg: "Ya existe una paciente con este rut " + rut,
//       });
//     }

//     const paciente = await Persona.create({ nombre, apellido, rut, email, fono, nacionalidad_id, usuario_id });

//     // res.json(psswd);
//     res.json(paciente);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };

// export const putPersona = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { body } = req;

//   try {
//     const paciente = await Persona.findByPk(id);
//     if (!paciente) {
//       return res.status(404).json({
//         msg: "No existe una paciente con el id " + id,
//       });
//     }

//     await paciente.update(body);

//     res.json(paciente);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       msg: "Hable con el administrador",
//     });
//   }
// };

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
