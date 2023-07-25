import { percistenciaORM } from '../db/ORM';
import {
    Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
    HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
    Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
}from 'sequelize';
export class model_users {
    
    percistencia = new percistenciaORM();
    sequelize = this.percistencia.sequelize;
    public user = this.sequelize.define('users', {
        //id_users,name_user,pname_user,mname_user,direction_user,photo_user
        id_users: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name_user: {
            type: DataTypes.STRING
        },
        pname_user: {
            type: DataTypes.STRING
        },
        mname_user: {
            type: DataTypes.STRING
        },
        direction_user: {
            type: DataTypes.STRING
        },
        photo_user: {
            type: DataTypes.TEXT
        },
        tel_user: {
            type: DataTypes.STRING
        },
        estate: {
            type:DataTypes.BOOLEAN
        }
    }, {
        timestamps: true
    });constructor() {

        this.user.sync();
    }
    async listar() {

        return await this.user.findAll();

    }
    async buscar(id: number) {

        return await this.user.findByPk(id);

    }
    async crear(data: any) {

        return await this.user.create(data);

    }
    async actualizar(data: any, id: number) {

        return await this.user.update(data, { where: { id_users: id } });

    }
    async eliminar(id: number) {

        // return await this.hub.destroy({ where: { id_proyectos: id } });
        return await this.user.update({ estate: false }, { where: { id_users: id } });

    }

    async buscarPorNombre(nombre: string) {
            
            return await this.user.findAll({ where: { name_user : { [this.sequelize.Op.like]: "'" + nombre + "'" } } });
         //   return await this.hub.findAll({ where: { chrnombre: { [this.sequelize.Op.like]: '%' + nombre + '%' } } });
    
        }

}



