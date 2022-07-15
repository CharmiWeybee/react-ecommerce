import React from 'react'
import products from '../products'
import 'bootstrap/dist/css/bootstrap.min.css';

console.log(products.PRODUCTS.items)
export const Products = (props) => {
  const { onAdd } = props;
    return (
        <div> <div className='main-card d-flex mt-5'>
          {
              products.PRODUCTS.items.map(items =>
                  <div className="card d-flex" key={items.id}>
                      <img className="card-img-top" src={items.image} alt="Card cap"></img>
                      <div className="card-body">
                          <div className='card-details' id="details">
                            <p className='card-name'>{items.name}</p>  
                            <p className='card-description'>{items.description}</p>  
                            <p className="card-price">₹{items.price}</p>
                          </div>
                        </div>
                      <div className= "card-footer">
                        <button className='add-to-card-btn btn btn-dark' id="add-to-cart" onClick={() => onAdd(items)}>+ Add To Cart</button>
                    </div>
                  </div>
              )
          }
      </div></div>
  )
}


