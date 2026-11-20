import { Link } from 'react-router-dom'

function VendorCard({ vendor }) {
  return (
    <div className="vendor-card">
      <h2>{vendor.name}</h2>

      <p>Location: {vendor.location}</p>

      <p>Delivery: {vendor.deliveryTime}</p>

      <Link to={`/vendors/${vendor.id}`}>
        View Vendor
      </Link>
    </div>
  )
}

export default VendorCard