import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
    font-weight: 400;
    font-style: normal;
    list-style: none;
    color: rgb(102, 102, 102);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`

export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 4px 15px;
  cursor: pointer;
  width: 100px;
`

export const SaveButton = styled(Button)`
  background-color: #126929;
`

export const LeaveButton = styled(Button)`
  background-color: #cc5050;
`
export const DeleteButton = styled(Button)`
  background-color: #cc5050;
`
export const EditButton = styled(Button)`
  background-color: #10c4cc;
  margin-right: 8px;
`

export default GlobalStyle
