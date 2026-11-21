

import StatusBadge from './StatusBadge.jsx'

function OrderCard({ order }) {
  return (
    <div className="order-card">
      <div className="order-card-header">
        <h3>Order #{order.id}</h3>
        <StatusBadge status={order.status} />
      </div>

      <p>Customer: {order.customerName}</p>

      <p>Phone: {order.phone}</p>

      <p>Delivery Address: {order.address}</p>

      <p>Vendor: {order.vendorName}</p>

      <p>Product: {order.productName}</p>

      <p>Quantity: {order.quantity}</p>

      <p>Total: KES {order.total}</p>
    </div>
  )
}

export default OrderCard
