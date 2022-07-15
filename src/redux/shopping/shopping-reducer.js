
import * as actionTypes from './shopping-types'
import products from '../../products'

const INITIAL_STATE = {
    products: products.PRODUCTS.items,
    cart: []
}

const shopReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            // const item =  state.products.find(prod=>prod.id === action.payload.id)
            // const inCart = state.cart.find(item=>item.id===action.payload.id?true:false)
            const items = products.PRODUCTS.items
            const exist = state.products.find((x) => x.id === action.payload.id);
            if (exist) {
              
                state.products.map((x) =>
                        x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
                    )
            }
    
        case actionTypes.REMOVE_FROM_CART:
            return{}

            default:
                return state;
    }
}

export default shopReducer