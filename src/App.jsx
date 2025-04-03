import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage/MainPage'
import ProductsPage from './pages/productsPage/ProductsPage'
import Header from './components/header/Header'
import './App.css'
import AboutUsPage from './pages/aboutUsPage/AboutUsPage'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
