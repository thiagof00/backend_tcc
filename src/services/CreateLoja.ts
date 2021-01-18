import lojas from '../tables/lojas'
import ModelLojas from '../models/ModelLojas'

export default class CreateLoja{
 
    public execute(nome: string, cnpj: number, endereco:string, horario:string, email:string, senha:string){
        const newLoja = lojas.create({
            nome: nome,
            cnpj: cnpj,
            endereco: endereco,
            horario: horario,
            email: email,
            senha: senha
        })
        .then((lojaCriada)=>{
            return lojaCriada
        })
        .catch((err)=>{
            return err
        })

        return newLoja
    }
}