import MainSection from './container/MainSection'
import SideBar from './container/SideBar'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <MainSection />
      </Container>
    </>
  )
}

export default App
