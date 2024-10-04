import jwt from "jsonwebtoken";

export const generarjwt = (uid: any) => {
  let expira = "1d"; 
  if(uid.name == "visita"){
    expira = "2h";
  }
  const privateKey: any = process.env.SECRETORPRIVATEKEY;
  return new Promise((resolve, reject) => {
    jwt.sign(uid, privateKey, { expiresIn: expira }, (error, token) => {
      if (error) {
        console.log(error);
        reject("No se pudo generar el token");
      } else {
        resolve(token);
      }
    });
  });
};
