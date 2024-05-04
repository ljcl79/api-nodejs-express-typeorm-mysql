import express from 'express';
import cursosController from '../controllers/cursosController';
const router = express.Router();


router.get('/', cursosController.consultar);

router.post('/', cursosController.ingresar);
router.post('/registraEstudiante', cursosController.asociarEstudiante);

router.route("/:id")
    .get(cursosController.consultarDetalle)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar);



export default router;
