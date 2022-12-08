import './App.css';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table'
import Table2 from './components/Table2'
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/table1' element={<Table />}></Route>
        <Route path='/table2' element={<Table2 />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
      </Routes>

    </>
  );
}

export default App;
