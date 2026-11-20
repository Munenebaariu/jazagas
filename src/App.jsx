import './App.css'
import Home from './pages/Home.jsx'
import Vendors from './pages/Vendors.jsx'
import VendorDetails from './pages/VendorDetails.jsx'
import Orders from './pages/Orders.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendors/:id" element={<VendorDetails />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App