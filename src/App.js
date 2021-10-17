import './App.css';
// import Home from "./components/Home";
// import Body from "./components/FormularioSite";
import React from 'react';
// import Navbar from 'react-bootstrap';
// import Navbar from "./components/Navbar"
// import 'bootstrap' from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import GetPosts from './components/GetPosts';
import CreatePosts from './components/CreatePosts';
import UpdatePosts from './components/UpdatePosts';
import Delete from './components/Delete';
// import FormularioSite from './components/FormularioSite'

//Route é o que vai reinderizar o componente na rota estipulada (sempre recepe dois atributos principais PATH e COMPONENT)
//Component reinderiza os componentes, dentro do component passamos o componente que estamos importando.

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <div className="container mt-5" >
        <Route exact path="/" component={GetPosts} />
        <Route path="/create-posts" component={CreatePosts} />
        <Route path="/update-posts/:dinossauro" component={UpdatePosts} />
        <Route path="/delete-posts/:dinossauro" component={Delete} />        
      </div>
    </BrowserRouter>
  );
}



export default App;
