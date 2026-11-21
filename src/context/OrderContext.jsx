
import { createContext, useContext, useState, useEffect } from 'react'

const OrderContext = createContext()

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchOrders() {
    try {
      const response = await fetch('http://localhost:3000/orders')

      if (!response.ok) {
        throw new Error('Failed to fetch orders')
      }

      const data = await response.json()
      setOrders(data)

    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  async function updateOrderStatus(orderId, newStatus) {
    const response = await fetch(
      `http://localhost:3000/orders/${orderId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      }
    )

    if (!response.ok) {
      throw new Error('Failed to update order status')
    }

    const updatedOrder = await response.json()

    setOrders(currentOrders =>
      currentOrders.map(order =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    )
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        fetchOrders,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  return useContext(OrderContext)
}
