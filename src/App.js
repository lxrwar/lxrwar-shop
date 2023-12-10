import './App.css';
import styled from 'styled-components';
import Main from './components/Main/Main';

const MainContainer = styled.div`
  display: flex;
`

function App() {
  return (
    <MainContainer>
      <Main/>
    </MainContainer>
  );
}

export default App;
