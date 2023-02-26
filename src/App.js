import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import News from './pages/News';
import Salle from './pages/Salle';
import Emploi_du_temps from './pages/Emploi_du_temps';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<News />} />
            <Route path='Salle' element={<Salle />} />
            <Route path='Emploi_du_temps' element={<Emploi_du_temps />} />
            <Route path='Login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
