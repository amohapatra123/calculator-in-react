import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './component/main';
import {Navbar,NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Navbar color="primary">
    <NavbarBrand href="#" id="head"><h4>Calculator</h4></NavbarBrand>
    </Navbar>
    <div className="container mt-5" id="app">
    
    <div className="row">
    <div className="col-md-8 offset-md-2">
<Main></Main>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
