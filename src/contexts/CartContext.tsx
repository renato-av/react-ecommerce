import { createContext, useReducer } from 'react'
import { type Cart, type Product } from '../types'
import { ACTION_TYPE, cartInitialState, cartReducer } from '../reducers/cart'

interface CartContextInterface {
  cart: Cart
  addToCart: (product: Product) => void
  reduceQuantity: (productId: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  addToCart: () => { },
  reduceQuantity: () => { },
  removeFromCart: () => { },
  clearCart: () => { }
})

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: Product) => {
    dispatch({ type: ACTION_TYPE.ADD_TO_CART, payload: product })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: ACTION_TYPE.REMOVE_FROM_CART, payload: productId })
  }

  const reduceQuantity = (productId: number) => {
    dispatch({ type: ACTION_TYPE.REDUCE_QUANTITY, payload: productId })
  }

  const clearCart = () => {
    dispatch({ type: ACTION_TYPE.CLEAR_CART, payload: null })
  }

  return {
    cart: state,
    addToCart,
    reduceQuantity,
    removeFromCart,
    clearCart
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { cart, addToCart, reduceQuantity, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      reduceQuantity,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
