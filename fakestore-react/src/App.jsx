import './css/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
