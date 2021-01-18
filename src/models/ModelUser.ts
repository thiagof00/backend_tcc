class modelUser{

id:number
nome:string
sobrenome: string
email:string
passwordEncripted:string
cpf:string
dataNasc: Date

placa:string
cor:string
modelo:string
ano:string

constructor({
    id,
    nome,
    sobrenome,
    email,
    passwordEncripted,
    cpf,
    dataNasc,

    placa,
    cor,
    modelo,
    ano
    
}:modelUser) {
  this.id = id
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
  this.passwordEncripted = passwordEncripted;
  this.cpf = cpf;
  this.dataNasc = dataNasc;
  this.placa = placa;
  this.cor = placa;
  this.modelo = modelo;
  this.ano = ano;
  this.cor = cor
}
  }
  export default modelUser;