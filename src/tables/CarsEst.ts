import { INTEGER, STRING, Model, Optional } from 'sequelize'
import sequelize from './db'
interface CarsAttributes {
    id?: number;
    placa: string
    modelo: string
    cor: string
    ano: string
    notf?: number
    multa?: number;
    tempo: string;
    latitude:string;
    longitude: string;
  }
  
  interface CarsCreateationProps extends Optional<CarsAttributes, "id"> {}
  
  interface CarsInstance
    extends Model<CarsAttributes, CarsCreateationProps>,
      CarsAttributes {}
 
const carsEst = sequelize.define<CarsInstance>('carsEst', {
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
    latitude:{
        type:STRING,
        allowNull:false
    },
    longitude:{
        type:STRING,
        allowNull:false
    },
    tempo: {
        type: STRING,
        defaultValue: '30'
    },
    notf:{
        type:INTEGER,
        defaultValue: 0
    },
    multa:{
        type:INTEGER,

    }
})

//carsEst.sync({force: true})

export default carsEst

