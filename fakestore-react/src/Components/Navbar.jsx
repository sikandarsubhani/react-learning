// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import './../styles/Navbar.css'

// const Navbar = ({ user }) => {
//   const navigate = useNavigate()
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('loggedInUser');
//     navigate('/')
//   };

//   const isLoggedIn = localStorage.getItem('loggedInUser');

//   const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Close sidebar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-menu')) {
//         setIsSidebarOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     // Prevent body scroll when sidebar is open
//     if (isSidebarOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isSidebarOpen]);

//   return (
//     <nav>
//       <div className="logo">
//         <Link to="/"><img src="src\assets\fakestore.png" alt="Fakestore" /></Link>
//       </div>

//       {/* {user && userType !== 'seller' && ()} */}
//       <div className="center-links">

//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart</Link>
//         <li className="dropdown">
//           <a href="javascript:void(0)" className="dropbtn">Category</a>
//           <div className="dropdown-content">
//             <a href="#">Mens</a>
//             <a href="#">Women</a>
//             <a href="#">Child</a>
//             <a href="#">jewelery</a>
//           </div>
//         </li>
//       </div>
//       <div className="right-links">
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </>
//         )}
//       </div>

//       <div className="mobile-menu">
//         <span className="material-symbols-outlined menu-icon" onClick={handleToggleSidebar}>
//           menu
//         </span>
//       </div>

//       {/* Overlay */}
//       <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={handleToggleSidebar} />

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <span
//             className="material-symbols-outlined close-icon"
//             onClick={handleToggleSidebar}
//           >
//             close
//           </span>
//         </div>
//         <ul>
//           <li>
//             <span className="material-symbols-outlined">home</span>
//             <Link to="/" onClick={handleToggleSidebar}>Home</Link>
//           </li>
//           <li>
//             <span className="material-symbols-outlined">shopping_cart</span>
//             <Link to="/cart" onClick={handleToggleSidebar}>Cart</Link>
//           </li>
//           <li className="dropdown">
//             <span className="material-symbols-outlined">category</span>
//             <a href="javascript:void(0)" className="dropbtn">Category</a>
//             <div className="dropdown-content">
//               <a href="#" onClick={handleToggleSidebar}>Mens</a>
//               <a href="#" onClick={handleToggleSidebar}>Women</a>
//               <a href="#" onClick={handleToggleSidebar}>Child</a>
//               <a href="#" onClick={handleToggleSidebar}>jewelery</a>
//             </div>
//           </li>
//           <li>
//             {isLoggedIn ? (
//               <div className="sidebar-logout">
//                 <span className="material-symbols-outlined">logout</span>
//                 <button onClick={() => {
//                   handleLogout();
//                   handleToggleSidebar();
//                 }}>Logout</button>
//               </div>
//             ) : (
//               <div className="sidebar-auth">
//                 <li>
//                   <span className="material-symbols-outlined">login</span>
//                   <Link to="/login" onClick={handleToggleSidebar}>Login</Link>
//                 </li>
//                 <li>
//                   <span className="material-symbols-outlined">person</span>
//                   <Link to="/signup" onClick={handleToggleSidebar}>Sign Up</Link>
//                 </li>
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './../styles/Navbar.css';

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out..."); // Debugging line
    localStorage.removeItem('loggedInUser');
    navigate('/');
    window.location.reload();
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-menu')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Prevent body scroll when sidebar is open
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <nav>

      <div className="logo">
        {(!user || user.userType !== 'seller') ? (
          <Link to="/"><img src="src/assets/fakestore.png" alt="Fakestore" /></Link>

        ) : (
          <Link to="/sellerdashboard"><img src="src/assets/fakestore.png" alt="Fakestore" /></Link>

        )}
      </div>

      <div className="center-links">
        {/* Only show Home and Cart links if user is not a seller */}
        {(!user || user.userType !== 'seller') && (
          <>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">Category</a>
              <div className="dropdown-content">
                <a href="#">Mens</a>
                <a href="#">Women</a>
                <a href="#">Child</a>
                <a href="#">Jewelry</a>
              </div>
            </li>
          </>
        )}
      </div>

      <div className="right-links">
        {user ? (
          <>
            <span>Welcome, {user.name}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>

      <div className="mobile-menu">
        <span className="material-symbols-outlined menu-icon" onClick={handleToggleSidebar}>
          menu
        </span>
      </div>

      {/* Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={handleToggleSidebar} />

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="material-symbols-outlined close-icon" onClick={handleToggleSidebar}>
            close
          </span>
        </div>
        <ul>
          {(!user || user.userType !== 'seller') && (
            <>
              <li>
                <span className="material-symbols-outlined">home</span>
                <Link to="/" onClick={handleToggleSidebar}>Home</Link>
              </li>
              <li>
                <span className="material-symbols-outlined">shopping_cart</span>
                <Link to="/cart" onClick={handleToggleSidebar}>Cart</Link>
              </li>
            </>
          )}
          <li className="dropdown">
            <span className="material-symbols-outlined">category</span>
            <a href="javascript:void(0)" className="dropbtn">Category</a>
            <div className="dropdown-content">
              <a href="#" onClick={handleToggleSidebar}>Mens</a>
              <a href="#" onClick={handleToggleSidebar}>Women</a>
              <a href="#" onClick={handleToggleSidebar}>Child</a>
              <a href="#" onClick={handleToggleSidebar}>Jewelry</a>
            </div>
          </li>
          <li>
            {user ? (
              <div className="sidebar-logout">
                <span className="material-symbols-outlined">logout</span>
                <button onClick={() => {

                  handleLogout();
                  handleToggleSidebar();
                }}>Logout</button>
              </div>
            ) : (
              <div className="sidebar-auth">
                <li>
                  <span className="material-symbols-outlined">login</span>
                  <Link to="/login" onClick={handleToggleSidebar}>Login</Link>
                </li>
                <li>
                  <span className="material-symbols-outlined">person</span>
                  <Link to="/signup" onClick={handleToggleSidebar}>Sign Up</Link>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;