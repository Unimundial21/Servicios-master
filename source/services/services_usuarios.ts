import { model_users } from '../Models/model_usuarios';
import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';
import { version } from '../version.json';

export class services_users {

    user = new model_users();
    model = this.user.user;
    sequelize = this.user.sequelize;

 constructor() {

    }

    async getVersion(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({ version });
    }

    async getAlldata(req: Request, res: Response, next: NextFunction) {
        try {
            
                //llenar al modelo con los datos de la tabla de la base de datos
             //   let data = await this.sequelize.query("SELECT * FROM hub", { type: this.sequelize.QueryTypes.SELECT, model_hub: this.model, mapToModel: true });


                //ir al modelo y ejecutar el metodo listar
                let data = await this.user.listar();
                
                //retornar el resultado

                res.status(200).json(data);

                

        } catch (error) {
            res.status(500).json(error);
        }
    }


    async insert(req: Request, res: Response, next: NextFunction) {

        try {
            //ir al modelo y ejecutar el metodo insertar
            let data = await this.user.crear(req.body);
            //retornar el resultado
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {

        try {
            //ir al modelo y ejecutar el metodo actualizar
            let data = await this.user.actualizar(req.body, parseInt(req.params.id));
            //retornar el resultado
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {

        try {
            //ir al modelo y ejecutar el metodo eliminar
            let data = await this.user.eliminar(parseInt(req.params.id));
            //retornar el resultado
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async searchbyname(req: Request, res: Response, next: NextFunction) {

        try {
            //ir al modelo y ejecutar el metodo buscar
           console.log(req.body.chrnombre);
            let data = await this.user.buscarPorNombre(req.body.chrnombre);
            //retornar el resultado
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }


    async searchbyid(req: Request, res: Response, next: NextFunction) {

        try {
            //ir al modelo y ejecutar el metodo buscar
            let data = await this.user.buscar(parseInt(req.params.id));
            //retornar el resultado
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }


}