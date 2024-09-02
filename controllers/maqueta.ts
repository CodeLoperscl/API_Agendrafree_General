import Maqueta from "../models/maqueta";
import { Request, Response } from "express";
import Nacionalidades from "../models/nacionalidad";

export const getMaquetas = async (req: Request, res: Response) => {
    const maquetas = await Maqueta.findAll({
    include: Nacionalidades, 

  });
  res.json({ maquetas });

};

export const getMaqueta = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const maqueta = await Maqueta.findByPk(id, {
    include: Nacionalidades
  
  });

  if (maqueta) {
    res.json(maqueta);
  } else {
  res.status(404).json({
      msg: `No existe una maqueta con la id ${id}`,
  });
  }
};

// export const getMaqueta_rut = async (req: Request, res: Response) => {
//   const { rut }: any = req.params;
//   const maqueta = await Maqueta.findOne({ 
//     where: {rut},
//     include: Nacionalidades
//     });


//   if (maqueta) {
//     res.json(maqueta);
//   } else {
//   res.status(404).json({
//       msg: `No existe una maqueta con el rut: ${rut}`,
//   });
//   }
// };


export const postMaqueta = async (req: Request, res: Response) => {
  const { body } = req;
  const { usuario,contraseña} = body;
  try {
    const existeMaqueta = await Maqueta.findOne({
      where: {
        usuario,
      },
    });

    if (existeMaqueta) {
      return res.status(400).json({
        msg: "Ya existe una maqueta con este usuario " + usuario,
      });
    }


    const maqueta = await Maqueta.create({ usuario});
    res.json(maqueta);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putMaqueta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
  const maqueta = await Maqueta.findByPk(id);
  if (!maqueta) {
      return res.status(404).json({
      msg: "No existe una maqueta con el id " + id,
      });
  }

  await maqueta.update(body);

  res.json(maqueta);
  } catch (error) {
  console.log(error);
  res.status(500).json({
      msg: "Hable con el administrador",
  });
  }
};

export const deleteMaqueta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const maqueta = await Maqueta.findByPk(id);
  if (!maqueta) {
  return res.status(404).json({
      msg: "No existe una maqueta con el id " + id,
  });
  }
  await maqueta.update({ estado: false });
// await estado_usuario.destroy();
  res.json(maqueta);
};
