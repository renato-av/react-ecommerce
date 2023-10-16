import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FilterProvider } from './contexts/FilterContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
