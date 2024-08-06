
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import { useContext, useEffect, useState } from 'react'
import CountriesList from './components/CountriesList'
import City from "./components/City"
import Form from "./components/Form"
import ProtectedRoute from './pages/ProtectedRoute'

const BASE_URL = "http://localhost:9000"

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true)
      const data = await fetch(`${BASE_URL}/cities`)
      const res = await data.json()
      setCities(res)
      setIsLoading(false)
    }
    fetchCities()
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>}>
            <Route index element={<CityList />} />
            <Route path='cities' element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading} />} />
            <Route path='form' element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App