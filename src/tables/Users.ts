import { STRING, DATE, INTEGER, DataTypes, Model, Optional} from 'sequelize'
import sequelize from './db'
interface UserAttributes {
    id?:number
    nome?:string
    sobrenome?: string
    email?:string
    senha?:string
    cpf?:string
    dataNasc?: Date,
    saldo?: number
    
  }
  
  interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
  
  interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
      UserAttributes {}
  
const Users = sequelize.define<UserInstance>("users", {
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    sobrenome:{
        type:STRING,
        allowNull:false
    },
    dataNasc:{
        type: STRING,
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
    saldo:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
})
//Users.sync({force:true})

export default Users
