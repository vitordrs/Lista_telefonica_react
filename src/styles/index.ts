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
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40;
  font-size: 18px;
  text-transform: capitalize;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  color: #000;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  cursor: pointer;
  background-color: #666;
  margin-right: 8px;
`

export const BotaoOk = styled(Botao)`
  background-color: #172ad611;
`

export default estiloGlobal
