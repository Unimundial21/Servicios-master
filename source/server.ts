/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routesHub from './routes/hub';

const router: Express = express();

const expres = require('express');
const app = expres();
//const POR = process.env.PORT || 3000;
/*
app.listen(POR, () => {
  console.log("user-service on 3000");
})*/

app.get('/user', (req: any, res: { json: (arg0: string) => void; }) => {
 res.json("I am user-service")
})




/** Logging */
router.use(morgan('dev'));
/** Parse the request */    
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

router.use('/hub', routesHub);


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});



/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? process.env.CONFIG_SERVICE_PORT;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));