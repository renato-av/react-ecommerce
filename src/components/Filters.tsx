import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

const Filters: React.FC = () => {
  const { filters, setFilter } = useFilters()

  const inputFilterId = useId()
  const categoryFilterId = useId()

  const handleOnFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setFilter({
      ...filters,
      minPrice: parseInt(value)
    })
  }

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    setFilter({
      ...filters,
      category: value
    })
  }

  return (
    <section className='filters'>
      <label htmlFor={inputFilterId} className='min_price_input'>
        Precio a partir de:
        <span className='min_price' style={{ left: `calc(${(filters.minPrice / 1000) * 100}%)` }}>
          ${filters.minPrice}</span>
        <input
          id={inputFilterId}
          type="range"
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleOnFilterChange}
        />
      </label>

      <label htmlFor={categoryFilterId}>Categoría
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </label>
    </section>
  )
}

export default Filters
