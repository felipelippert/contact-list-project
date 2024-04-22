import RegisterCard from '../../components/RegisterCard'
import SearchCard from '../../components/SearchCard'
import { Aside, ContainerCards } from './styles'

const SideBar = () => (
  <Aside>
    <ContainerCards>
      <SearchCard />
    </ContainerCards>
    <ContainerCards>
      <RegisterCard />
    </ContainerCards>
  </Aside>
)

export default SideBar
