/*
// import logo from './logo.svg';
import './App.css';
import ListaEventos from './componentes/ListaEventos';
import AgregarEvento from './componentes/AgregarEvento';
import EditarEvento from './componentes/EditarEvento';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
function App() {
  return (
    // Aplicacion Crud de Compra-Venta
      <div className="App">
        <BrowserRouter>
          <div className="imagenPortada" src="./assets/images/fondoReact.jpg"></div>
          <nav className="position-fixed w-100 navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
             
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link btn btn-success" aria-current="page" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-success" to="agregarevento">Agregar Evento</Link>
                  </li>
                
                </ul>
              </div>
            </div>
          </nav>
      
        
          <Routes>
              <Route path='/' element={<ListaEventos/>} exact></Route>
              <Route path='/agregarevento' element={<AgregarEvento/>} exact></Route>
              <Route path='/editarevento/:idevento' element={<EditarEvento/>} exact></Route>
          </Routes>
        </BrowserRouter>
  
      </div>
  );
}

export default App;

*/

import './App.css';
import ListaEventos from './componentes/ListaEventos';
import AgregarEvento from './componentes/AgregarEvento';
import EditarEvento from './componentes/EditarEvento';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App imagenPortada">
      <BrowserRouter>
        <nav className="position-fixed w-100 navbar navbar-expand-lg  navbar-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-column" id="navbarNav">
            <h2 className="text-center text-white">Salon de Eventos Oasis</h2>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-info" to="agregarevento">Agregar Evento</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="content pt-5">
          <Routes>
            <Route path='/' element={<ListaEventos />} exact />
            <Route path='/agregarevento' element={<AgregarEvento />} exact />
            <Route path='/editarevento/:idevento' element={<EditarEvento />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

