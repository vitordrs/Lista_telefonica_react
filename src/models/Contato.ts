import * as enums from '../utils/enums/Contato'

class Contato {
  id: number
  nome: string
  numero: number
  email: string
  categoria: enums.Categoria

  constructor(
    id: number,
    nome: string,
    numero: number,
    email: string,
    categoria: enums.Categoria
  ) {
    this.id = id
    this.nome = nome
    this.numero = numero
    this.email = email
    this.categoria = categoria
  }
}

export default Contato
