import { STRING } from 'sequelize'
import {Optional, Model, INTEGER} from 'sequelize'
import sequelize from './db'

interface FinesAttributes{
    id: number;
    idUser: number;
    motivo: string;
    nomeSupervisor: string;
}
interface FinesCreateProps extends Optional<FinesAttributes, 'id'>{}
interface FinesInstance extends Model<FinesCreateProps, FinesAttributes>{}


const Fines = sequelize.define<FinesInstance>('fines', {

    idUser:{
        type: INTEGER,
        allowNull: false
    },
    motivo:{
        type: STRING,
        allowNull: false
    },
    nomeSupervisor:{
        type:STRING,
        allowNull: false
    }
})


//Fines.sync({force: true})

export default Fines