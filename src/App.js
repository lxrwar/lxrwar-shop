import './App.css';
import styled from 'styled-components';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const MainContainer = styled.div`
  display: flex;
`

function App() {
  return (
    <MainContainer>
      <Header/>
      <Main/>
    </MainContainer>
  );
}

export default App;
