// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { UIProvider } from './context/UIContext';
import Navbar from './Components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import SellerDashboard from './pages/SellerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <UIProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProtectedRoute component={ProductDetail} />} />
                <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
                <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
                <Route path="/user" element={<ProtectedRoute component={User} />} />
                <Route path="/seller-dashboard" element={<ProtectedRoute component={SellerDashboard} />} />
              </Routes>
              <ToastContainer />
            </div>
          </Router>
        </UIProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;