import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudianteModel";
import { Profesor } from "../models/profesoresModel";
import { Curso } from "../models/cursoModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "ip-server",
    port: 3306,
    username: "nombre-usuario",
    password: "clave",
    database: "nombre-bd",
    logging: true,
    entities: [Estudiante, Profesor, Curso],
    synchronize: false

});