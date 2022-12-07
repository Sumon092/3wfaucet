import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table'
import Table2 from './components/Table2'
import Login from './pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/table1' element={<Table />}></Route>
        <Route path='/table2' element={<Table2 />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
