class ModelLojas {
    nome: string
    
    cnpj: number
    
    horario: string
    
    endereco: string
    
    email: string

    senha: string
    
    constructor({
        nome,
        cnpj,
        horario,
        endereco,
        email,
        senha
    }: ModelLojas){
        this.nome = nome
        this.cnpj = cnpj
        this.horario = horario
        this.endereco = endereco
        this.email = email
        this.senha = senha
    }
    }
    export default ModelLojas