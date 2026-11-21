
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { useOrders } from '../context/OrderContext.jsx'

function VendorDetails() {
  const { id } = useParams()
  const { fetchOrders } = useOrders()

  const [vendor, setVendor] = useState(null)
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [customerName, setCustomerName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:3000/vendors/${id}`)
      .then(response => response.json())
      .then(data => setVendor(data))

    fetch(`http://localhost:3000/products?vendorId=${id}`)
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [id])

  async function handleSubmit(event) {
    event.preventDefault()

    const newOrder = {
      vendorId: Number(id),
      vendorName: vendor.name,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      size: selectedProduct.size,
      unitPrice: selectedProduct.price,
      customerName,
      phone,
      address,
      quantity,
      total: selectedProduct.price * quantity,
      status: 'Pending'
    }

    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)
      })

      if (!response.ok) {
        throw new Error('Failed to place order')
      }

      const savedOrder = await response.json()

      await fetchOrders()

      alert(`Order #${savedOrder.id} placed successfully!`)

      setCustomerName('')
      setPhone('')
      setAddress('')
      setQuantity(1)
      setSelectedProduct(null)

    } catch (error) {
      console.error('Order submission error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  if (!vendor) {
    return <p>Loading vendor details...</p>
  }

  return (
    <div>
      <h1>{vendor.name}</h1>

      <p>Location: {vendor.location}</p>

      <p>Delivery time: {vendor.deliveryTime}</p>

      <h2>Available Gas Products</h2>

      <div className="products-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onOrder={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="order-form-container">
          <h2>Place Your Order</h2>

          <p>Product: {selectedProduct.name}</p>
          <p>Price: KES {selectedProduct.price}</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Enter your full name"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter your phone number"
              required
            />

            <label>Delivery Address</label>
            <textarea
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Enter your delivery address"
              required
            />

            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              required
            />

            <p>
              Total: KES {selectedProduct.price * quantity}
            </p>

            <button type="submit">Place Order</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default VendorDetails
