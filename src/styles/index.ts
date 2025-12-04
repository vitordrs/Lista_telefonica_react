import styled, { createGlobalStyle } from 'styled-components'

const estiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: #f7eed6;
`

export const MainContainer = styled.main`
  padding-left: 90px;
  padding-right: 180px;
  height: 100vh;
  overflow-y: scroll;
  text-transform: capitalize;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  text-transform: capitalize;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  color: #1b1b1b;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #005a8d;
  margin-right: 8px;
  border-radius: 10px;
`

export const BotaoOk = styled(Botao)`
  background-color: #003a58;
`

export default estiloGlobal
