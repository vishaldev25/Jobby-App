import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {MdHome, MdWork} from 'react-icons/md'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-links">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="navbar-logout-desktop"
          onClick={onClickLogout}
        >
          Logout
        </button>

        <div className="nav-mobile-menu">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/">
                <MdHome className="home-icon" />
              </Link>
            </li>
            <li className="nav-menu-item-mobile">
              <Link to="/jobs">
                <MdWork className="work-icon" />
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="navbar-mobile-button"
            onClick={onClickLogout}
          >
            <FiLogOut className="logout-icon" aria-label="logout" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
