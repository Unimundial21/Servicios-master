import {
    Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
    HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
    Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
} from 'sequelize';

import propertiesDateBaseMain = require('../db/mainConnection.json');
import parametrosSqlServer = require('../db/dbDevSqlServer.json');
import parametrosMySql = require('../db/dbDevMysql.json');
import parametrosSqlServerProd = require('../db/dbProdSqlServer.json');
import parametrosMySqlProd = require('../db/dbProdMysql.json');
require('dotenv').config();
export class percistenciaORM {

    paramSqlServer = parametrosSqlServer;

    public sequelize: any;

    constructor() {
        this.conectar();
    }


    conectar() {

        if(process.env.PERSISTENCE === "prod"){
            //this.paramSqlServer = parametrosSqlServerProd;
            this.sequelize = new Sequelize(
                '' + process.env.PROD_DB_DATABASE + '',
                '' + process.env.PROD_DB_USER + '',
                '' + process.env.PROD_DB_PASSWORD + '',
                {
                    host: '' + process.env.PROD_DB_HOST + '',
                    dialect: 'mysql'
                }
            );
            console.log("======================================Productive-Mode======================================");
        }else{
            this.sequelize = new Sequelize(
                '' + process.env.DEV_DB_DATABASE + '',
                '' + process.env.DEV_DB_USER + '',
                '' + process.env.DEV_DB_PASSWORD + '',
                {
                    host: '' + process.env.DEV_DB_HOST + '',
                    dialect: 'mysql'
                }
            );
            console.log(process.env.DEV_DB_DATABASE + "--" + process.env.DEV_DB_HOST+ "======================================Developer-Mode======================================");
        }
        
        this.sequelize.authenticate()

            .then(() => {

                console.log('Conectado sequelize')

            })

            .catch((err: any) => {

                console.log('No se conecto sequelize: ' + err)

            })
    }

}
