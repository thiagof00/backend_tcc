import { STRING, DATE, INTEGER, DataTypes} from 'sequelize'
import sequelize from './db'

const Supervisors = sequelize.define("supervisors", {
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sobrenome:{
        type:STRING,
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
    local:{
        type:STRING,
        allowNull:false
    }
})

//Supervisors.sync({force:true})

export default Supervisors
