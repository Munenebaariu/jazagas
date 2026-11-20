
import { useState, useEffect } from 'react'
import VendorCard from '../components/VendorCard.jsx'

function Vendors() {
  const [vendors, setVendors] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/vendors')
      .then(response => response.json())
      .then(data => setVendors(data))
  }, [])

  return (
    <div>
      <h1>Find Gas Vendors</h1>

      <div className="vendors-container">
        {vendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  )
}

export default Vendors
