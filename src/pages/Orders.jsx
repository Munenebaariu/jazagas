import OrderCard from '../components/OrderCard.jsx'
import { useOrders } from '../context/OrderContext.jsx'

function Orders() {
  const { orders, loading } = useOrders()

  if (loading) {
    return <p>Loading orders...</p>
  }

  return (
    <div>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
