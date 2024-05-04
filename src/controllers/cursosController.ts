import { Request, Response } from "express";
import { Curso } from "../models/cursoModel";
import { Profesor } from "../models/profesoresModel";
import { Estudiante } from "../models/estudianteModel";


class CursosController {
    constructor() {

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Curso.find({ relations: { profesor: true, estudiantes: true } });
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Curso.findOne({ where: { id: Number(id) }, relations: { profesor: true, estudiantes: true } });
            if (!registro) {
                throw new Error('Curso no encontrado');
            }

            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const { profesor } = req.body;

            const profesorRegistro = await Profesor.findOneBy({ id: Number(profesor) });
            if (!profesorRegistro) {
                throw new Error('Profesor no encontrado');
            }

            const registro = await Curso.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const { profesor } = req.body;

            const profesorRegistro = await Profesor.findOneBy({ id: Number(profesor) });
            if (!profesorRegistro) {
                throw new Error('Profesor no encontrado');
            }

            const registro = await Curso.findOneBy({ id: Number(id) });
            if (!registro) {
                throw new Error('Curso no encontrado');
            }
            await Curso.update({ id: Number(id) }, req.body);
            const registroActualizado = await Curso.findOne({ where: { id: Number(id) }, relations: { profesor: true, estudiantes: true } });
            res.status(200).json(registroActualizado);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Curso.findOneBy({ id: Number(id) });
            if (!registro) {
                throw new Error('Curso no encontrado');
            }
            await Curso.delete({ id: Number(id) });
            res.status(204);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async asociarEstudiante(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const { estudiante_id, curso_id } = req.body;
            const estudiante = await Estudiante.findOneBy({ id: Number(estudiante_id) });
            const curso = await Curso.findOneBy({ id: Number(curso_id) });

            if (!estudiante) {
                throw new Error('Estudiante no encontrado');
            }
            if (!curso) {
                throw new Error('Curso no encontrado');
            }

            curso.estudiantes = curso.estudiantes || [];
            curso.estudiantes.push(estudiante);

            const registro = await Curso.save(curso);
            res.status(200).json(registro);

        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new CursosController();