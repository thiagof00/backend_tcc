import { INTEGER, Model, Optional, STRING} from 'sequelize'
import sequelize from './db'

interface lojasAttributes{
    id?: number;
    nome: string;
    cnpj: number;
    endereco: string;
    horario: string;
    email: string;
    senha: string;
}

interface lojasProps extends Optional<lojasAttributes, 'id'>{}

interface lojasInstance extends Model<lojasAttributes, lojasProps>, lojasAttributes{}

const lojas = sequelize.define<lojasInstance>('lojas',{

    nome:{
        type: STRING
    },
    cnpj: {
        type: INTEGER
    },
    endereco:{
        type: STRING
    }, 
    horario: {
        type: STRING
    },
    email: {
        type:STRING
    },
    senha: {
        type: STRING
    }
})

//lojas.sync({force: true})

export default lojas