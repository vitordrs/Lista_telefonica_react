// import styled from 'styled-components'

// export const Container = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-top: 32px;
// `

// export const Box = styled.div`
//   background: #fff;
//   padding: 32px;
//   border-radius: 12px;
//   width: 100%;
//   max-width: 480px;
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `

// export const Titulo = styled.h2`
//   margin: 0;
//   font-size: 20px;
//   text-align: center;
//   font-weight: bold;
// `

// export const CampoEdicao = styled.input`
//   padding: 14px;
//   border-radius: 8px;
//   font-size: 16px;
//   border: 1px solid #dcdcdc;
//   outline: none;
//   transition: 0.2s;

//   &:focus {
//     border-color: #8a2be2;
//   }
// `

// export const Select = styled.select`
//   padding: 14px;
//   border-radius: 8px;
//   font-size: 16px;
//   border: 1px solid #dcdcdc;
//   outline: none;

//   &:focus {
//     border-color: #8a2be2;
//   }
// `

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
