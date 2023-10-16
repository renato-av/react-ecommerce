import { useContext } from 'react'
import { FilterContext } from '../contexts/FilterContext'
import { type Product } from '../types'

export const useFilters = () => {
  const { filters, setFilter } = useContext(FilterContext)

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (
        filters.category === 'all' || product.category === filters.category
      )
    })
  }

  return {
    filters,
    setFilter,
    filterProducts
  }
}
