import { type Product, type Cart } from '../types'

export const cartInitialState: Cart = (() => {
  const cart = localStorage.getItem('cart')

  return cart ? JSON.parse(cart) : []
})()

export enum ACTION_TYPE {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  REDUCE_QUANTITY = 'REDUCE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART'
}

type CART_ACTION =
{ type: ACTION_TYPE.ADD_TO_CART, payload: Product } |
{ type: ACTION_TYPE.REMOVE_FROM_CART, payload: number } |
{ type: ACTION_TYPE.REDUCE_QUANTITY, payload: number } |
{ type: ACTION_TYPE.CLEAR_CART, payload: null }

export const updateLocalStorage = (state: Cart) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: Cart, action: CART_ACTION) => {
  const { type } = action

  if (type === ACTION_TYPE.ADD_TO_CART) {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(({ product }) => product.id === id)

    if (productInCartIndex >= 0) {
      const productInCart = state[productInCartIndex]

      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...productInCart, quantity: productInCart.quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)

      return newState
    }

    return [
      ...state,
      { product: action.payload, quantity: 1 }
    ]
  }

  if (type === ACTION_TYPE.REDUCE_QUANTITY) {
    const { payload } = action
    const productInCartIndex = state.findIndex(({ product }) => product.id === payload)

    if (productInCartIndex >= 0) {
      const productInCart = state[productInCartIndex]

      if (productInCart.quantity > 1) {
        const newState = [
          ...state.slice(0, productInCartIndex),
          { ...productInCart, quantity: productInCart.quantity - 1 },
          ...state.slice(productInCartIndex + 1)
        ]

        updateLocalStorage(newState)

        return newState
      }

      return state.filter(({ product }) => product.id !== payload)
    }

    return state
  }

  if (type === ACTION_TYPE.REMOVE_FROM_CART) {
    const newState = state.filter(({ product }) => product.id !== action.payload)

    updateLocalStorage(newState)

    return newState
  }

  if (type === ACTION_TYPE.CLEAR_CART) {
    updateLocalStorage([])

    return []
  }

  return []
}
