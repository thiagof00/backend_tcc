import { INTEGER, STRING, Optional, Model, BOOLEAN } from 'sequelize'
import sequelize from './db'
interface CarsAttributes {
    id?: number;
    idUser?: number

    placa?: string
    
    modelo?: string
    
    cor?: string
    
    ano?: string

    estacionado?: boolean;

    latitude?: string;

    longitude?: string;

    tempo?: string;

    notf?: number;

    
  }
  
  interface CarsCreateationProps extends Optional<CarsAttributes, "id"> {}
  interface CarsInstance
    extends Model<CarsAttributes, CarsCreateationProps>,
      CarsAttributes {}
 
const Cars = sequelize.define<CarsInstance>('cars', {
    idUser:{
        type:INTEGER
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
    estacionado:{
      type: BOOLEAN,
      defaultValue: false
    },
    latitude:{
      type:STRING,
  },
  longitude:{
      type:STRING,
  },
  tempo: {
      type: STRING
      },
  notf:{
      type:INTEGER,
      defaultValue: 0
  }
})

//Cars.sync({force: true})

export default Cars

