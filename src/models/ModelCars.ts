class ModelCars {
idUser: number

placa: string

modelo: string

cor: string

ano: string

constructor({
    idUser,
    placa,
    modelo,
    cor,
    ano
}: ModelCars){
    this.idUser = idUser
    this.placa = placa
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
}
}
export default ModelCars