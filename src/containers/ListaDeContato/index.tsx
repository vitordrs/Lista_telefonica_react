import Contatos from '../../componentes/Contatos'
import { MainContainer, Titulo } from '../../styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarContatos = () => {
    let contatosFiltrados = [...itens]

    // 🔎 Filtro por texto — trata undefined e espaços em branco
    const termoValido = termo && termo.toString().trim().length > 0
    if (termoValido) {
      const termoLower = termo!.toString().toLowerCase()
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().includes(termoLower) ||
          item.numero.toString().includes(termoLower) ||
          item.email.toLowerCase().includes(termoLower)
      )
    }

    // 🏷 Filtro por categoria — checagem segura para undefined/null
    if (criterio === 'categoria' && valor != null) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.categoria === valor
      )
    }

    return contatosFiltrados
  }

  const contatos = filtrarContatos()
  const quantidade = contatos.length

  // 📌 Plural automático
  const plural = quantidade === 1 ? 'contato' : 'contatos'

  const resultadoFiltro = () => {
    const termoValido = termo && termo.toString().trim().length > 0
    const semFiltroCategoria = criterio === 'todos' // criterio 'todos' indica sem filtro de categoria
    const semFiltroTexto = !termoValido

    // ➤ nenhum filtro aplicado (nem categoria nem termo)
    if (semFiltroTexto && semFiltroCategoria) {
      return `📚 ${quantidade} ${plural} — mostrando todos`
    }

    // ➤ filtro por categoria ativo
    if (criterio === 'categoria' && valor != null) {
      return `🏷️ ${quantidade} ${plural} na categoria "${valor}"`
    }

    // ➤ filtro por texto ativo
    if (termoValido) {
      return `🔍 ${quantidade} ${plural} contendo "${termo!.toString().trim()}"`
    }

    // fallback
    return `📁 ${quantidade} ${plural} encontrado(s)`
  }

  const mensagem = resultadoFiltro()

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>

      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contatos
              id={c.id}
              email={c.email}
              numero={c.numero}
              categoria={c.categoria}
              nome={c.nome}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
