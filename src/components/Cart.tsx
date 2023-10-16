import { useId, useRef } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { toast } from 'sonner'

const Cart: React.FC = () => {
  const { cart, addToCart, clearCart, reduceQuantity } = useCart()
  const cartId = useId()
  const ref = useRef<HTMLInputElement>(null)

  const onChange = () => {
    document.querySelector('body')?.classList.toggle('cart--open')
  }

  return (
    <>
      <input ref={ref} className='cart__input' id={cartId} type="checkbox" hidden onChange={onChange} />
      <label className='cart__button' htmlFor={cartId}>
        <CartIcon />
      </label>

      <aside className='cart'>
        <h2>Shopping Cart 🛒</h2>
        <ul>
          {
            cart.map(({ product, quantity }) => {
              return (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className='cart__product__description'>
                    <div>
                      <strong>{product.title}</strong>
                      <span>{product.price}</span>
                      <small>Qty: {quantity}</small>
                    </div>
                    <footer>
                      <button onClick={() => { reduceQuantity(product.id) }}>-</button>
                      <button onClick={() => { addToCart(product) }}>+</button>
                    </footer>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <button onClick={() => {
          clearCart()
          ref.current?.click()
          toast.success('Cart cleared')
        }}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
