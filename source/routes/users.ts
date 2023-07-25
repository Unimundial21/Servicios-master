import express from 'express';
import controllerHub from '../controllers/usuarios';

const router = express.Router();

router.get('/version', controllerHub.getVersion);

router.get('/getAll', controllerHub.getAlldata);


router.post('/insert',controllerHub.insert);

router.post('/update/:id',controllerHub.update);

router.post('/erase/:id',controllerHub.erase);


export = router;




