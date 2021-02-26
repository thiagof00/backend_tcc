import { STRING, DATE, INTEGER, DataTypes, Model, Optional} from 'sequelize'
import sequelize from './db'

interface SupAttributes {
    id?:number
    nome?:string
    sobrenome?: string
    email?:string
    senha?:string
    cpf?:string
    local?: string
    
  }
  interface SupCreationAttributes extends Optional<SupAttributes, "id"> {}
  
  interface SupInstance
    extends Model<SupAttributes, SupCreationAttributes>,
      SupAttributes {}


const Supervisors = sequelize.define<SupInstance>("supervisors", {
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
