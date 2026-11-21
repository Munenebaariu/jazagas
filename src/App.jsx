import './App.css'

import Navbar from './components/Navbar.jsx'

import Home from './pages/Home.jsx'
import Vendors from './pages/Vendors.jsx'
import VendorDetails from './pages/VendorDetails.jsx'
import Orders from './pages/Orders.jsx'
import VendorDashboard from './pages/VendorDashboard.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OrderProvider } from './context/OrderContext.jsx'

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendors/:id" element={<VendorDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        </Routes>
      </OrderProvider>
    </BrowserRouter>
  )
}

export default App
