import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria' | 'todos'
  valor?: enums.Categoria
  className?: string
}

const FiltroCard = ({ legenda, criterio, valor, className }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaAtivo = () => {
    const msmCriterio = filtro.criterio === criterio
    const msmValor = filtro.valor === valor

    return msmCriterio && msmValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'categoria') {
      return contatos.itens.filter((item) => item.categoria === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaAtivo()
  return (
    <S.Card className={className} ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
