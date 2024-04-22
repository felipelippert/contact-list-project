import styled from 'styled-components'

export const Card = styled.div`
  background: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: flex;
  width: 90%;
  margin: 10px auto;
  border-radius: 8px;
`

export const ContactDataContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  margin: 5px;
  color: #000;

  outline: none;
  border: none;
  padding: 8px 0;
  text-align: center;

  input {
    border: none;
    background-color: transparent;
  }
`
export const ActionBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  padding: 3px;
`

export const ContactData = styled.textarea`
  padding: 8px;
  border: none;
  background-color: transparent;
  resize: none;
  width: 240px;
`
