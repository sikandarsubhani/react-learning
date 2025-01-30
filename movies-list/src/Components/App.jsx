import "./../css/App.css";
import Favorites from "./../Pages/Favorites";
import Home from "./../Pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./../context/MovieContext";
import NavBar from "./../Components/NavBar";
import Trending from "./../Pages/Trending";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;