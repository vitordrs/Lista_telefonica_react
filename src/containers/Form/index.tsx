import { FormEvent, useState, ChangeEvent } from 'react'
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
  const [numero, setNumero] = useState(0)
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const addContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        email,
        numero,
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNumero(Number(e.target.value))
          }
          type="number"
          placeholder="(00)9999-9999"
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
