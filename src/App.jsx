import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Coin from "./Pages/Coin/Coin"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App
