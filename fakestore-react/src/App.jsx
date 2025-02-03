// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import './styles/App.css'
// import LoginForm from './Components/LoginForm';
// import SignupForm from './Components/SignupForm';
// import Cart from './Pages/Cart';
// import SellerDashboard from './Components/SellerDashboard';

// const App = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));




//   return (
//     <Router>
//       <Navbar user={user} />
//       <Routes>
//         {(!user || user) || user.userType !== 'seller' ? (
//           <>
//             <Route path='/cart' element={<Cart />} />
//             <Route path="/" element={<Home />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Navigate to="/sellerdashboard" />} />
//             <Route path="/cart" element={<Navigate to="/sellerdashboard" />} />
//           </>
//         )}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path='/sellerdashboard' element={<SellerDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Cart from './Pages/Cart';
import SellerDashboard from './Components/SellerDashboard';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedInUser')) || null;
  });

  useEffect(() => {
    // Redirect sellers to /sellerdashboard if they try accessing other routes manually
    if (user?.userType === 'seller' && window.location.pathname !== '/sellerdashboard') {
      window.location.replace('/sellerdashboard');
    }
  }, [user]);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        {/* Redirect sellers to /sellerdashboard if they access "/" or "/cart" */}
        <Route path="/" element={user?.userType === 'seller' ? <Navigate to="/sellerdashboard" /> : <Home />} />
        <Route path="/cart" element={user?.userType === 'seller' ? <Navigate to="/sellerdashboard" /> : <Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
