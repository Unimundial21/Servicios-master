# SERVICIOS EN NODEJS CON ORM 
Web service comprobación de gastos 

##### Versión: 1.0.0.1
##### Anterior autor: Antonio Urdiales Mena
##### Último autor: Flavio Urdiales Mena
##### Fecha: 19 de Octubre del 2023
##### Descripción: 

El Proyecto es un servicio con la estructura MVC el cual usa un ORM sequelize para la persistencia de datos en una base de datos SQL Server, y MYSQL Server,
 el servicio se conecta a un servidor Eureka para el registro de microservicios y el balanceo de carga.

Aunque para fines de pruebas se quito la autenticación de los servicios, se puede agregar un token para la autenticación de los servicios. es decir se desactivo euereka.

- Node: v14.18.0

-------------
**Dependencias:**

| Dependencia | Versión  |
| ------------ | ------------ |
| @types/axios  | ^0.14.0  |
| @types/express  | ^4.17.13  |
| @types/morgan | ^1.9.3  |
|  axios | ^0.27.2  |
| eureka-js-client  | ^4.5.0  |
| express  | ^4.18.1  |
| morgan  | ^1.10.0  |
| mssql  | ^8.1.4  |
| nodemon  | ^2.0.19  |
| ts-node  | ^10.8.2  |
| typescript  | ^4.7.4  |


-------------
**Para ejecutar:**
se inicia consola de node js con el comando npm run dev

**Configuración Base de Datos:**
Dentro de la carpeta del proyecto se ubica los archivos para las persistencias de la base de datos.
source/db/..
- **dbDevSqlServer.json** Se tiene que agregar la configuración para la base de datos de desarrollo pruebas.
- **dbProdSqlServer.json** Se tiene que agregar la Configuración para la base de datos de Productivo.
- **dbProdSqlServer.json** para cambiar de persistencia hay que poner dev en el atributo  **persistence** para la base de pruebas desarrollo y para productivo prod.


**Enrutamientos:**
para en rutar los controllers hay que ir a source/routes/posts.ts
donde hay crear la rutas donde se va hace la llamadas para su consumo ejemplo:


/** source/routes/posts.ts */
import express from 'express';
import controllerHub from '../controllers/hub';

const router = express.Router();

router.get('/version', controllerHub.getVersion);

router.get('/getAll', controllerHub.getAlldata);

export = router;

**Nota:** es importante que en tu controller al final de crear la peticion se agrege ese metodo ejemplo: `

/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { services_hub } from '../services/services_hub';

import version = require('../version.json');


let services_hub_ = new services_hub();

   const getVersion = async (req: Request, res: Response, next: NextFunction) => {
         return res.status(200).json({

                message: version
            });
    };

    const getAlldata = async (req: Request, res: Response, next: NextFunction) => {
        services_hub_.getAlldata(req, res, next);
    }

    export default { getVersion, getAlldata};
