import React, { useState } from "react";
import './../styles/AuthForm.css'
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // Navigate based on userType
      if (user.userType === 'seller') {
        navigate("/sellerdashboard");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
      }
    } else {
      alert("Invalid email or password!");
    }
};

  return (
    <div class="auth-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label >Email</label>
        <div class="user-box">
          <input required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label htmlFor="">Password</label>
        <div class="user-box">
          <input required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="user-box">
          <button type="submit" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './../styles/AuthForm.css';

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Retrieve users from localStorage
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

//     // Find user
//     const user = existingUsers.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (user) {
//       alert("Login successful!");
//       localStorage.setItem("loggedInUser", JSON.stringify(user));
//       navigate("/home"); // Redirect to home page after login
//     } else {
//       alert("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="auth-box">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email</label>
//         <div className="user-box">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <label>Password</label>
//         <div className="user-box">
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <div className="user-box">
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
