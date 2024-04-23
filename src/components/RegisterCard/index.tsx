import { useDispatch } from 'react-redux'
import { SaveButton } from '../../styles'
import { BoxTitle } from '../SearchCard/styles'
import { Form, Input } from './styles'
import { FormEvent, useState } from 'react'
import Contact from '../../models/Contact'
import { register } from '../../store/reducers/contacts'

const RegisterCard = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const insertContact = (event: FormEvent) => {
    event.preventDefault()
    const contactToAdd = new Contact(100, name, email, phone)
    dispatch(register(contactToAdd))
  }

  return (
    <>
      <Form onSubmit={insertContact}>
        <BoxTitle>Add contact</BoxTitle>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </>
  )
}

export default RegisterCard
