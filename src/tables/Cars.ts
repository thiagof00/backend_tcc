import { INTEGER, STRING, Optional, Model } from 'sequelize'
import sequelize from './db'
interface CarsAttributes {
    id?: number;
    idUser: number

    placa: string
    
    modelo: string
    
    cor: string
    
    ano: string
    
  }
  
  interface CarsCreateationProps extends Optional<CarsAttributes, "id"> {}
  
  interface CarsInstance
    extends Model<CarsAttributes, CarsCreateationProps>,
      CarsAttributes {}
 
const Cars = sequelize.define<CarsInstance>('cars', {
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

    }
})

//Cars.sync({force: true})

export default Cars

