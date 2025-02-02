import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer");
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { name, email, password, userType };
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Check if user already exists
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert("User with this email already exists!");
      return;
    }
    // Add new user and store back in localStorage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Signup successful!");
    navigate("/login");
    // Clear input fields
    setName("");
    setEmail("");
    setPassword("");
    setUserType("buyer");
  };



  return (
    <div class="auth-box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} >
        <label htmlFor="">Name</label>
        <div class="user-box">
          <input required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <label htmlFor="">Email</label>

        <div class="user-box">
          <input required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label htmlFor="">Password</label>

        <div class="user-box">
          <input required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <label htmlFor="">Select User Type</label>

        <div class="user-box">
          <select required onChange={(e) => setUserType(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="user-box">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );

};
export default SignupForm;
