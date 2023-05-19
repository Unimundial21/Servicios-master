import { percistenciaORM } from '../db/ORM';
import {
    Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
    HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
    Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
} from 'sequelize';
export class model_hub {
    percistencia = new percistenciaORM();
    sequelize = this.percistencia.sequelize;
    public hub = this.sequelize.define('hubs', {
        //id_proyectos, chrnombre, chrdescripcion, dtfecha, chrestado, chrimagen, chrurl
        id_proyectos: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        chrnombre: {
            type: DataTypes.STRING
        },
        chrdescripcion: {
            type: DataTypes.STRING
        },
        dtfecha: {
            type: DataTypes.DATE
        },
        chrestado: {
            type: DataTypes.STRING
        },
        chrimagen: {
            type: DataTypes.TEXT
        },
        chrurl: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    constructor() {

        this.hub.sync();
    }
    async listar() {

        return await this.hub.findAll();

    }
    async buscar(id: number) {

        return await this.hub.findByPk(id);

    }
    async crear(data: any) {

        return await this.hub.create(data);

    }
    async actualizar(data: any, id: number) {

        return await this.hub.update(data, { where: { id_proyectos: id } });

    }
    async eliminar(id: number) {

        // return await this.hub.destroy({ where: { id_proyectos: id } });
        return await this.hub.update({ chrestado: "inactivo" }, { where: { id_proyectos: id } });

    }

    async buscarPorNombre(nombre: string) {
            
            return await this.hub.findAll({ where: { chrnombre : { [this.sequelize.Op.like]: '%' + nombre + '%' } } });
         //   return await this.hub.findAll({ where: { chrnombre: { [this.sequelize.Op.like]: '%' + nombre + '%' } } });
    
        }

}


