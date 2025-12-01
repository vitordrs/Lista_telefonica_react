import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      email: 'thayazd2110@gmail.com',
      categoria: enums.Categoria.FAMILIA,
      numero: 999999999,
      nome: 'Thais de Azevedo Soares'
    },
    {
      id: 2,
      email: 'educamilo@gmail.com',
      categoria: enums.Categoria.AMIGOS,
      numero: 888888888,
      nome: 'Eduardo Camilo'
    },
    {
      id: 3,
      email: 'robsondesenho@gamil.com',
      categoria: enums.Categoria.TRABALHO,
      numero: 77777777,
      nome: 'Robson desenho'
    },
    {
      id: 4,
      email: 'lojinhaficcticia@gmail.com',
      categoria: enums.Categoria.OUTROS,
      numero: 5555555,
      nome: 'lojinha ficticia'
    },
    {
      id: 5,
      email: 'danillohenrique@gmail.com',
      categoria: enums.Categoria.FAMILIA,
      numero: 4545645646,
      nome: 'Dannilo henrique de azevedo'
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contatos',
  initialState,

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((Contato) => Contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const numeroExistente = state.itens.find(
        (Contato) => Contato.numero === action.payload.numero
      )
      if (numeroExistente) {
        alert('Numero ja existente na lista de contatos')
      } else {
        const ultimoNumero = state.itens[state.itens.length - 1]

        const ContatoNovo = {
          ...action.payload,
          id: ultimoNumero ? ultimoNumero.id + 1 : 1
        }
        state.itens.push(ContatoNovo)
      }
    },
    editaContato: (
      state,
      action: PayloadAction<Omit<Contato, 'id'> & { id: number }>
    ) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        const current = state.itens[indexContato]
        const rest = {
          nome: action.payload.nome ?? current.nome,
          email: action.payload.email ?? current.email,
          numero: action.payload.numero ?? current.numero,
          categoria: action.payload.categoria ?? current.categoria
        }
        state.itens[indexContato] = {
          ...current,
          ...rest
        }
      }
    }
  }
})

export const { remover, editar, adicionar, editaContato } = contatoSlice.actions

export default contatoSlice.reducer
