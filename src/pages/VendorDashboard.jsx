import OrderCard from '../components/OrderCard.jsx'
import { useOrders } from '../context/OrderContext.jsx'

function VendorDashboard() {
  const { orders, loading, updateOrderStatus } = useOrders()

  async function handleStatusChange(orderId, newStatus) {
    try {
      await updateOrderStatus(orderId, newStatus)
    } catch (error) {
      console.error('Error updating order:', error)
      alert('Could not update order status. Please try again.')
    }
  }

  if (loading) {
    return <p>Loading orders...</p>
  }

  return (
    <div>
      <h1>Vendor Dashboard</h1>

      <h2>Customer Orders</h2>

      {orders.length === 0 ? (
        <p>No customer orders yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map(order => (
            <div key={order.id}>
              <OrderCard order={order} />

              <label>Update Order Status</label>

              <select
                value={order.status}
                onChange={(event) =>
                  handleStatusChange(order.id, event.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default VendorDashboard
