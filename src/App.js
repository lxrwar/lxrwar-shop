import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import CartStructure from './components/Cart/CartStructure';
import BuyTogether from './components/BuyTogether/BuyTogether';
import ListStructure from './components/ListProduct/ListStructure';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
`

function App() {
  return (
    <Router>
      <MainContainer>
        <Header/>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <CartStructure/>
        <BuyTogether/>
        <ListStructure/>
        <Footer/>
      </MainContainer>
    </Router>
  );
}

export default App;
