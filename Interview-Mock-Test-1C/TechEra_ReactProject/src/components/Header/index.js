import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Link to="/" className="link">
      <h1 className="own">Designed by Ashiq</h1>
    </Link>
  </div>
)

export default withRouter(Header)
