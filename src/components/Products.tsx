import { toast } from 'sonner'
import { useCart } from '../hooks/useCart'
import { type Product } from '../types'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product: Product) => {
    return cart.some(({ product: cartProduct }) => cartProduct.id === product.id)
  }

  const handleClick = (product: Product, isProductInCart: boolean) => {
    isProductInCart ? removeFromCart(product.id) : addToCart(product)

    const message = isProductInCart ? 'Product removed from cart' : 'Product added to cart'
    toast.success(message)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id} className='product'>
                <header>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </header>
                <div className='product__description'>
                  <strong>{product.title}</strong>
                  <p>{product.description}</p>
                </div>

                <footer>
                  <p>$ {product.price}</p>
                  <button
                    style={{ backgroundColor: isProductInCart ? 'red' : 'green' }}
                    onClick={() => {
                      handleClick(product, isProductInCart)
                    }}
                  >
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </footer>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default Products
