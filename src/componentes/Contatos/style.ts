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
  background-color: #faf6ecff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  border-bottom: 3px dotted #c7c7be;
  border-top: 6px double #c7c7be;

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
  text-transform: capitalize;
`

export const BarraAcao = styled.div`
  padding-top: 16px;
`

export const BotaoN = styled(Botao)`
  background-color: #8b1e1e;
  border-radius: 10px;
`
export const LinhaInfo = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #1b1b1b;
  border-bottom: 1px solid #c7c7be;

  strong {
    color: #000;
    margin-right: 4px;
  }
`
export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
`
