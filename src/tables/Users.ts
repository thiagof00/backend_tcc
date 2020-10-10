import { STRING, DATE, INTEGER, DataTypes} from 'sequelize'
import sequelize from './db'

const Users = sequelize.define("users", {
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sobrenome:{
        type:STRING,
        allowNull:false
    },
    dataNasc:{
        type: DATE,
        allowNull:false
    },
    cpf:{
    type: STRING,
    allowNull:false
    },
    email:{
    type: STRING,
    allowNull:false
    },
    senha:{
    type: STRING,
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

    },
    idsupervisor:{
        type:INTEGER,
        defaultValue:0,
    }
    

})

//Users.sync({force:true})

export default Users
