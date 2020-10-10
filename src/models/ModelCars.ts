class ModelCars {
idUser: number

placa: string

modelo: string

cor: string

ano: string

tipo:string

constructor({
    idUser,
    placa,
    modelo,
    cor,
    ano,
    tipo
}: ModelCars){
    this.idUser = idUser
    this.placa = placa
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
    this.tipo = tipo
}
}
export default ModelCars