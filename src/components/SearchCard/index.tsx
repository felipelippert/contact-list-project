import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '../RegisterCard/styles'
import { BoxTitle } from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SearchCard = () => {
  const dispatch = useDispatch()
  const { termSearch } = useSelector((state: RootReducer) => state.filter)

  return (
    <Form>
      <BoxTitle>Find here</BoxTitle>
      <Input
        type="text"
        placeholder="Looking for?"
        value={termSearch}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />
    </Form>
  )
}

export default SearchCard
