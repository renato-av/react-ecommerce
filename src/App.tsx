import Header from './components/Header'
import Products from './components/Products'
import jsonProducts from './mocks/products.json'
import { type Product } from './types'
import { useFilters } from './hooks/useFilters'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import Cart from './components/Cart'
import { Toaster } from 'sonner'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts: Product[] = filterProducts(jsonProducts.products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      <Footer />

      <Toaster richColors position='top-right' closeButton duration={1000}/>
    </CartProvider>
  )
}

export default App
