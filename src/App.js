import React from 'react';
import {Routes,Route,} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import { Main } from './components/Main';
import { CartList } from './components/CartList';



function App() {

  return (
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Main />}></Route> 
        <Route path="/cart" element={<CartList />} ></Route>         
      </Routes>
    </Provider>
  );
}

export default App;

