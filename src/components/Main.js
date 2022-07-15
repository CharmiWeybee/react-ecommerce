import React, { useState } from 'react';
import '../App.css';
import { Header } from '../components/Header';
import { Products } from '../components/Products';
import Basket from '../components/Basket';
import { connect } from 'react-redux';

export const Main = () => {
    const { items } = Products;
    const [cartItems, setCartItems] = useState([]);
     const [inputText, setInputText] = useState("");


    const onAdd = (items) => {
        const exist = cartItems.find((x) => x.id === items.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        }
        else {
            setCartItems([...cartItems, { ...items, qty: 1 }]);
        }
    };



    const onRemove = (items) => {
        const exist = cartItems.find((x) => x.id === items.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== items.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === items.id ? { ...exist, qty: exist.qty - 1 } : x

                )
            );
        }
    };
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
  return (
    <>
        <div className="App ">
              <Header countCartItems={cartItems.length} input={inputText} inputHandler={inputHandler}></Header>
                <Products onAdd={onAdd} product={items}></Products>
                <div className='container mt-5'>
                    <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
                </div>
        </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.Basket
    }
}
export default connect(mapStateToProps)(Basket)
