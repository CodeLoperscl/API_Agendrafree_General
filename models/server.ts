import express, { Application } from "express";
// Conexiones BD
import db from "../BD/connection";
import db_especialista from "../BD/connection_agenda_especialista";
import authRoutes from "../rutas/auth";
// Routes BD paciente
import userRoutes from "../rutas/usuario";
import personaRoutes from "../rutas/persona";
import nacionalidadRoutes from "../rutas/nacionalidades";
import estado_usuarioRoutes from "../rutas/estado_usuario";
import profesionalRoutes from "../rutas/profesional";

// Routes BD especialista
// import pacienteRoutes from "../rutas/paciente";
// import citaRoutes from "../rutas/cita";
// import estado_citaRoutes from "../rutas/estado_cita";
// import estadosRoutes from "../rutas/estados";
import especialistaRoutes from "../rutas/profesional";
import previsiontaRoutes from "../rutas/prevision";
import especialidadRoutes from "../rutas/especialidad";
// import hora_disponibleRoutes from "../rutas/hora_disponible";
import archivoRoutes from "../rutas/archivo";
// import tipo_archivoRoutes from "../rutas/tipo_archivo";
// import servicioRoutes from "../rutas/servicios";

import { syncModels } from "./index";

import cors from "cors";



class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    login: "/api/auth",

    //BD paciente
    users: "/api/users",
    persona: "/api/persona",
    nacionalidad: "/api/nacionalidad",
    estado_usuario: "/api/estado_usuario",
    profesional: "/api/profesional",
    // BD especialista 
    paciente: "/api/paciente",
    cita: "/api/cita",
    estado_cita: "/api/estado_cita",
    estado: "/api/estados",
    especialista: "/api/especialista",
    prevision: "/api/prevision",
    hora_disponible: "/api/hora_disponible",
    archivo: "/api/archivo",
    tipo_archivo: "/api/tipo_archivo",
    servicio: "/api/servicio",
    especialidad: "/api/especialidad",


  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.bdConnection();
    this.bdConnection_especialista();
    this.middlewares();
    this.routes();
    this.routes_bd_especialista();
    
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

  async bdConnection_especialista() {
    try {
      await db_especialista.authenticate();
      console.log("Base de dato especialista online");
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
    this.app.use(this.apiPath.estado_usuario, estado_usuarioRoutes);
    this.app.use(this.apiPath.profesional,profesionalRoutes);

  }
// BD especialista
  routes_bd_especialista(){
    // this.app.use(this.apiPath.paciente, pacienteRoutes);
    // this.app.use(this.apiPath.cita, citaRoutes);
    // this.app.use(this.apiPath.estado_cita, estado_citaRoutes);
    this.app.use(this.apiPath.especialista, especialistaRoutes);
    this.app.use(this.apiPath.especialidad, especialidadRoutes);
    this.app.use(this.apiPath.prevision, previsiontaRoutes);
    // this.app.use(this.apiPath.hora_disponible, hora_disponibleRoutes);
    // this.app.use(this.apiPath.estado, estadosRoutes);
    this.app.use(this.apiPath.archivo, archivoRoutes);
    // this.app.use(this.apiPath.tipo_archivo, tipo_archivoRoutes);
    // this.app.use(this.apiPath.servicio, servicioRoutes);

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor Conectado al puerto = " + this.port);
    });
  }
}

export default Server;
