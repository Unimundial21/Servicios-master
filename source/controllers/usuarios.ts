import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { services_users } from '../services/services_usuarios';

import version = require('../version.json');

let services_hub_ = new services_users();

   const getVersion = async (req: Request, res: Response, next: NextFunction) => {
         return res.status(200).json({

                message: version
            });
    };

    const getAlldata = async (req: Request, res: Response, next: NextFunction) => {
        services_hub_.getAlldata(req, res, next);
    }


    const insert = async (req: Request, res: Response, next: NextFunction) => {
        services_hub_.insert(req,res,next);

    }
    
    const update = async(req: Request, res:Response, next: NextFunction) =>{
        services_hub_.update(req,res,next);
    }

    const erase = async(req: Request, res: Response, next: NextFunction) =>{
        services_hub_.delete(req,res,next);
    }

    export default { getVersion, getAlldata,insert,update,erase};