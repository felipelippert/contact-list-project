import { Provider } from 'react-redux'
import SideBar from './container/SideBar'
import GlobalStyle, { Container } from './styles'
import store from './store'
import { MainSection } from './container/MainSection'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <MainSection />
      </Container>
    </Provider>
  )
}

export default App
