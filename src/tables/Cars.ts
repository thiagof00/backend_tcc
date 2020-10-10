import { INTEGER, STRING } from 'sequelize'
import sequelize from './db'

const Cars = sequelize.define('cars', {
    idUser:{
        type:INTEGER,
        allowNull:false
    },
    placa:{
        type: STRING,
        allowNull:false
        },
        modelo:{
        type: STRING,
        allowNull:false
    
        },
        cor:{
        type: STRING,
        allowNull:false
    
        },
        ano:{
        type:STRING,
        allowNull:false
    
        },
        tipo:{
        type:STRING,
        allowNull:false
    
        }
})

//Cars.sync({force: true})

export default Cars

