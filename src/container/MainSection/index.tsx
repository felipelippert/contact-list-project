import { useSelector } from 'react-redux'
import { MainSectionStyle } from './styles'
import { RootReducer } from '../../store'
import { Contact } from '../../components/Contact'

export const MainSection = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { termSearch } = useSelector((state: RootReducer) => state.filter)

  const contactsFilter = () => {
    return items.filter(
      (item) => item.name.toLowerCase().search(termSearch.toLowerCase()) >= 0
    )
  }

  return (
    <MainSectionStyle>
      <ul>
        {contactsFilter().map((c) => (
          <li key={c.id}>
            <Contact id={c.id} name={c.name} email={c.email} phone={c.phone} />
          </li>
        ))}
      </ul>
    </MainSectionStyle>
  )
}
