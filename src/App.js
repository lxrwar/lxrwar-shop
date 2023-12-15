import { Route, Routes } from 'react-router-dom';
import MainPage from '../src/components/MainPage/MainPage';
import Login from '../src/components/Auth/Log/Login';
import Registration from './components/Auth/Reg/Registration';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
    </Routes>
  );
}

export default App;
