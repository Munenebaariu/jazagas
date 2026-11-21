function ProductCard({ product, onOrder }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p>Size: {product.size}</p>

      <p>Price: KES {product.price}</p>

      <button onClick={() => onOrder(product)}>
        Order Now
      </button>
    </div>
  )
}

export default ProductCard
