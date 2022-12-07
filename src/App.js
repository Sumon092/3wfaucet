import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table'
import Table2 from './components/Table2'
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path='table1' element={<Table />}></Route>
        <Route path='table2' element={<Table2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
