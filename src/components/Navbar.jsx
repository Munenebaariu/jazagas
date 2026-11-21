
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/" className="navbar-logo">JazaGas</Link>
      </h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/orders">My Orders</Link>
        </li>

        <li>
          <Link to="/vendor-dashboard">Vendor Dashboard</Link>
        </li>
      </ul>

      <Link to="/vendors" className="navbar-button">
        Order Gas
      </Link>
    </nav>
  )
}

export default Navbar
