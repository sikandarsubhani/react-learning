import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import './styles/App.css'
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Cart from './Pages/Cart';
import SellerDashboard from './Components/SellerDashboard';

const App = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));


  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        {(!user || user) || user.userType !== 'seller' ? (
          <>
            <Route path='/cart' element={<Cart />} />
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/sellerdashboard" />} />
            <Route path="/cart" element={<Navigate to="/sellerdashboard" />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path='/sellerdashboard' element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
