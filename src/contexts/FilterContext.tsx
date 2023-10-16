import { createContext, useState } from 'react'
import { type Filter } from '../types'

interface FilterContextInterface {
  filters: Filter
  setFilter: (filter: Filter) => void
}

export const FilterContext = createContext<FilterContextInterface>({
  filters: {
    minPrice: 0,
    category: 'all'
  },
  setFilter: () => { }
})

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filter>({
    minPrice: 0,
    category: 'all'
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilter: setFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}
