import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <main className="hero">
        <p className="hero-intro">Welcome to JazaGas</p>

        <h1>Gas Delivery Made Easy</h1>

        <p className="hero-description">
          Order LPG from trusted local vendors
        </p>

        <Link to="/vendors" className="hero-button">
          Find Gas
        </Link>
      </main>

      <section className="how-it-works">
        <h2>How JazaGas Works</h2>

        <div className="steps-container">
          <div className="step-card">
            <h3>1. Find a Vendor</h3>
            <p>Browse local gas vendors and compare their prices</p>
          </div>

          <div className="step-card">
            <h3>2. Choose Your Cylinder</h3>
            <p>Select the 6kg or 13kg cylinder that suits your needs</p>
          </div>

          <div className="step-card">
            <h3>3. Place Your Order</h3>
            <p>
              Submit your delivery details and wait for vendor confirmation
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
