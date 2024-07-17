import express, { Application } from "express";
import db from "../BD/connection";
import userRoutes from "../rutas/usuario";
import authRoutes from "../rutas/auth";
import personaRoutes from "../rutas/persona";
import nacionalidadRoutes from "../rutas/nacionalidades";
import estado_usuarioRoutes from "../rutas/estado_usuario";


import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    users: "/api/users",
    login: "/api/auth",
    persona: "/api/persona",
    nacionalidad: "/api/nacionalidad",
    estado_usuario: "/api/estado_usuario",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.bdConnection();
    this.middlewares();
    this.routes();
  }

  async bdConnection() {
    try {
      await db.authenticate();
      console.log("Database Online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json()); // Lectura y parceo del body
    this.app.use(express.static("public")); //Directorio Publico
  }

  routes() {
    this.app.use(this.apiPath.login, authRoutes);
    this.app.use(this.apiPath.users, userRoutes);
    this.app.use(this.apiPath.persona, personaRoutes);
    this.app.use(this.apiPath.nacionalidad, nacionalidadRoutes);
    this.app.use(this.apiPath.estado_usuario, estado_usuarioRoutes);



  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Conectado al puerto = " + this.port);
    });
  }
}

export default Server;
