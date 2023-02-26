import "./App.css"
import { Link } from "react-router-dom"


function Nav() {
  return (
    <header className="header" data-header>
      <div className="container">
      
        <a href=" #" className="logo">
          <img src="https://cryptologos.cc/logos/karatgold-coin-kbc-logo.png"  width="32" height="32" alt="Cryptex logo" ></img>
          Kabeer Currency.
        </a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">

            <li className="navbar-item">
              <Link to="/" className="navbar-link " data-nav-link>Home</Link>
            </li>

            <li className="navbar-item">
              <Link to="/crypto" className="navbar-link" data-nav-link>Crypto</Link>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>Market</a>
            </li>
             
             
            <li className="navbaritem">
              <a href="#" className="navbarlink" data-nav-link>-------------------------------------------------------------------------------------</a>
            </li>

          </ul>
        </nav>

        <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <a href="#" className="btn btn-outline">Explore.</a>

      </div>
    </header>
  )
}

export default Nav