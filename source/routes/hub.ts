/** source/routes/posts.ts */
//import controller_usuarios from '../controllers/controllers_usuarios';
import express from 'express';
import controllerHub from '../controllers/hub';
import controllerUsuarios from '../controllers/usuarios';

const router = express.Router();

router.get('/version', controllerHub.getVersion);

router.get('/getAll', controllerHub.getAlldata);

router.post('/insert', controllerHub.insert);

router.put('/update/:id', controllerHub.update);

router.put('/delete/:id', controllerHub.delete_);

router.get('/searchbyid/:id', controllerHub.searchbyid);

router.post('/searchbyname', controllerHub.searchbyname);

//router.get('/usuarios' , controllers_usuarios.getAlldata);


export = router;


