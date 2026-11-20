import VendorCard from '../components/VendorCard.jsx'

const vendors = [
  {
    id: 1,
    name: "Thindgua Gas Centre",
    location: "Thindigua",
    deliveryTime: "5-10 minutes"
  },
  {
    id: 2,
    name: "Quick Gas Supplies",
    location: "Ruaka",
    deliveryTime: "5-10 minutes"
  },
  {
    id: 3,
    name: "City LPG Distributors",
    location: "Kiambu Road",
    deliveryTime: "5-10 minutes"
  }
]

function Vendors() {
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