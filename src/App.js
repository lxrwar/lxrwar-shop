import './App.css';
import styled from 'styled-components';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import CartStructure from './components/Cart/CartStructure';
import BuyTogether from './components/BuyTogether/BuyTogether';
import ListStructure from './components/ListProduct/ListStructure';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
`

function App() {
  return (
    <MainContainer>
      <Header/>
      <Main/>
      <CartStructure/>
      <BuyTogether/>
      <ListStructure/>
    </MainContainer>
  );
}

export default App;
