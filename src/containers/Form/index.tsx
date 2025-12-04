import { FormEvent, useState } from 'react'
import { BotaoOk, MainContainer, Titulo, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'
import { Form, Opcao, Opcoes } from './style'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Contato'
import { adicionar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const formatarTelefone = (valor: string) => {
    const digits = valor.replace(/\D/g, '')

    if (digits.length <= 2) {
      return `(${digits}`
    }
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(
        6,
        10
      )}`
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
      7,
      11
    )}`
  }

  const addContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        email,
        numero: Number(numero.replace(/\D/g, '')),
        categoria
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>

      <Form onSubmit={addContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome completo"
        />

        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="nome@email.com"
        />

        <Campo
          value={numero}
          onChange={(e) => setNumero(formatarTelefone(e.target.value))}
          placeholder="Telefone"
          type="text"
        />

        <Opcoes>
          <p>Categoria</p>

          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.OUTROS}
              />
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Opcoes>

        <BotaoOk type="submit">Adicionar</BotaoOk>
      </Form>
    </MainContainer>
  )
}

export default Formulario
