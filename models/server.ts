import express, { Application } from "express";
// Conexiones BD
import db from "../BD/connection";
import authRoutes from "../rutas/auth";
// Routes BD paciente
import userRoutes from "../rutas/usuario";
import personaRoutes from "../rutas/persona";
import nacionalidadRoutes from "../rutas/nacionalidades";
import estadoRoutes from "../rutas/estado";
import profesionalRoutes from "../rutas/profesional";
import dotenv from 'dotenv';


import { syncModels } from "./index";

import cors from "cors";

dotenv.config();

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    login: "/api/auth",

    //BD paciente
    users: "/api/users",
    persona: "/api/persona",
    nacionalidad: "/api/nacionalidad",
    estado: "/api/estado",
    profesional: "/api/profesional",
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
      await syncModels();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json()); // Lectura y parceo del body
    this.app.use(express.static("public")); //Directorio Publico
  }

  // BD paciente
  routes() { 
    this.app.use(this.apiPath.login, authRoutes);
    this.app.use(this.apiPath.users, userRoutes);
    this.app.use(this.apiPath.persona, personaRoutes);
    this.app.use(this.apiPath.nacionalidad, nacionalidadRoutes);
    this.app.use(this.apiPath.estado, estadoRoutes);
    this.app.use(this.apiPath.profesional,profesionalRoutes);

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Conectado al puerto = " + this.port);
    });
  }
}

export default Server;
