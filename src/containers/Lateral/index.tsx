import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'
import FiltroCard from '../../componentes/FiltroCard'

type Props = {
  mostrarFiltros: boolean
}

const Lateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return(
    <S.Aside>
      <div>
        {mostrarFiltros ? (
        <>
          <Campo
          type='text'
          placeholder='Buscar'
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Categoria.AMIGOS}
              criterio='categoria'
              legenda='Amigos'
            />
            <FiltroCard
              valor={enums.Categoria.FAMILIA}
              criterio='categoria'
              legenda='Familia'
            />
            <FiltroCard
              valor={enums.Categoria.TRABALHO}
              criterio='categoria'
              legenda='Trabalho'
            />
            <FiltroCard
              valor={enums.Categoria.OUTROS}
              criterio='categoria'
              legenda='Outros'
            />
            <FiltroCard criterio="todos" legenda="todos"
          </S.Filtros>
        </>
      ) : (
        <Botao type='button' onClick={() => navigate('/')}></Botao>
      )}
      </div>
    </S.Aside>
  )
}

export default Lateral
