import { Router } from 'express'
const router=Router();
import * as  editorialCtrl from '../controllers/editorial.controller';

    router.get('/listar',editorialCtrl.readAllEditorial); 

    export default router;