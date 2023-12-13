import { Route, Routes } from 'react-router-dom';
import MainPage from '../src/components/MainPage/MainPage';
import Login from '../src/components/Auth/Log/Login';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
