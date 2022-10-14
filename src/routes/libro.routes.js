import { Router } from 'express'
const router=Router();
import * as  libroController from '../controllers/libro.controllers';

router.get('/listar',libroController.readAllLibro); 
router.get('/listar/listadonombreedit',libroController.listarlibroconnombrecat); 
router.delete('/eliminar/:id' , libroController.deleteLibro);
router.put('/actualizar/:id' , libroController.editarLibro);
router.get('/listar/buscarlibro/:id',libroController.getlibroid); 
router.get('/editorial',libroController.readAllEditorial); 
router.post('/create',libroController.agregarLibro); 

export default router;