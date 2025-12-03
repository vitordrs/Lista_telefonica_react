import styled from 'styled-components'
import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  catetoria?: enums.Categoria
  parametro: 'categoria' | 'todos'
}

function corDeFundo(props: TagProps): string {
  if (props.parametro === 'categoria') {
    if (props.catetoria === enums.Categoria.FAMILIA) return '#db99f5ff'
    if (props.catetoria === enums.Categoria.AMIGOS) return '#99e3f5ff'
    if (props.catetoria === enums.Categoria.TRABALHO) return '#f5d599ff'
    if (props.catetoria === enums.Categoria.OUTROS) return '#292020ff'
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0cap;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => corDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding-top: 16px;
`

export const BotaoN = styled(Botao)`
  background-color: red;
`
export const LinhaInfo = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #333;

  strong {
    color: #000;
    margin-right: 4px;
  }
`
export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; /* Espaço entre inputs no modo edição */
  margin-bottom: 12px;
`
