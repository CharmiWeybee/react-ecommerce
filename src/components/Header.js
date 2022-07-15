import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <div>
      <div className='header'>
        <span><input id="search-input" type="search" placeholder='Search for your fav product' ></input></span>
        <Link to="/cart"> <span className='cart-option'>Cart{' '}{props.countCartItems ? (<button type='button' className="btn btn-success" id="count-badge"><small>{props.countCartItems}</small></button>) : ('')}</span> {' '}</Link>
      </div>
    </div>
  )
}
