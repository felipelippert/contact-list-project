import { DeleteButton, EditButton } from '../../styles'
import { ActionBar, Card, ContactData, ContactDataContainer } from './styles'

const Contact = () => {
  return (
    <>
      <Card>
        <ContactDataContainer>
          <ContactData>Michael Scott</ContactData>
          <ContactData>scotmichael@dundermiflin.com</ContactData>
          <ContactData>0449 146 392</ContactData>
        </ContactDataContainer>
        <ActionBar>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </ActionBar>
      </Card>
      <Card>
        <ContactDataContainer>
          <ContactData>Pamela Halpert</ContactData>
          <ContactData>halpertpam@dundermiflin.com</ContactData>
          <ContactData>0449 146 339</ContactData>
        </ContactDataContainer>
        <ActionBar>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </ActionBar>
      </Card>
      <Card>
        <ContactDataContainer>
          <ContactData>James Duncan Halpert</ContactData>
          <ContactData>halpertthimothy@dundermiflin.com</ContactData>
          <ContactData>0449 146 392</ContactData>
        </ContactDataContainer>
        <ActionBar>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </ActionBar>
      </Card>
    </>
  )
}

export default Contact
