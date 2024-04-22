import { SaveButton } from '../../styles'
import { BoxTitle } from '../SearchCard/styles'
import { Form, Input } from './styles'

const RegisterCard = () => {
  return (
    <>
      <Form>
        <BoxTitle>Add contact</BoxTitle>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="E-mail" />
        <Input type="number" placeholder="Phone number" />
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </>
  )
}

export default RegisterCard
