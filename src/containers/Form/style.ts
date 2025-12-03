import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* mais espaço entre os campos */
  margin-top: 24px;
  width: 100%;
  max-width: 480px;
`

export const Opcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
  }
`

export const Opcao = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* espaço entre bolinha e texto */

  input[type='radio'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    font-size: 15px;
  }
`

export const CampoEdicao = styled.input`
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid #dcdcdc;
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #8a2be2;
  }
`

export const Select = styled.select`
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid #dcdcdc;
  outline: none;

  &:focus {
    border-color: #8a2be2;
  }
`
