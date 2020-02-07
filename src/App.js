import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
import Details from "./Components/Details";
import Product from "./Components/Product";
import ProductList from "./Components/ProductList";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import MyGallery from './Components/ImageGallery'; 
 
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
   render() { 
    return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="/ImageGallery" component={MyGallery} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route  component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
    );
  }
}

export default App;
