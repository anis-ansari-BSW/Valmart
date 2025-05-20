import React from 'react'
import TopNavbar from './components/TopNavbar'
import FrontContent from './components/FrontContent'
import SavingsForTheNewYear from './components/SavingsForTheNewYear'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import FreshFree from './components/FreshFree'
import StockGame from './components/StockGame'
import ApiDjango from './components/ApiDjango'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';


function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product_details/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/front_content" element={<FrontContent />} />
            <Route path="/savings_for_the_new_year" element={<SavingsForTheNewYear />} />
            <Route path="/product_list" element={<ProductList />} />
            <Route path="/fresh_free" element={<FreshFree />} />
            <Route path="/stock_game" element={<StockGame />} />
            <Route path="/api_django" element={<ApiDjango />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  )

}

export default App
