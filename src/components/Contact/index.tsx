import { useEffect, useState } from 'react'
import ContactClass from '../../models/Contact'
import { DeleteButton, EditButton, LeaveButton, SaveButton } from '../../styles'
import { ActionBar, Card, ContactData, ContactDataContainer } from './styles'
import { useDispatch } from 'react-redux'
import { deleteContact, edit } from '../../store/reducers/contacts'

type Props = ContactClass

export const Contact = ({
  id,
  name: originalName,
  email: originalEmail,
  phone: originalPhone
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }
    if (originalPhone.length > 0) {
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEdition() {
    setIsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
  }

  function saveEdition() {
    dispatch(
      edit({
        id,
        name,
        email,
        phone
      })
    )
    setIsEditing(false)
  }

  return (
    <>
      <Card>
        <ContactDataContainer>
          <ContactData
            required
            disabled={!isEditing}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ContactData
            required
            disabled={!isEditing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ContactData
            required
            disabled={!isEditing}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ContactDataContainer>
        <ActionBar>
          {isEditing ? (
            <>
              <SaveButton onClick={saveEdition}>Save</SaveButton>
              <LeaveButton onClick={cancelEdition}>Exit</LeaveButton>
            </>
          ) : (
            <>
              <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
              <DeleteButton onClick={() => dispatch(deleteContact(id))}>
                Delete
              </DeleteButton>
            </>
          )}
        </ActionBar>
      </Card>
    </>
  )
}
