import { Link } from 'react-router-dom'
import '../components/styles/NotFound.css'
import longArrow from '../assets/icons/long-arrow-left.png'

const NotFound = () => {
  return (
    <div className="not-found-root">
      <div className="not-found-container">
        <div className="not-found-title">
        404 Error: Page Not Found
        </div>
        <div className="not-found-desc">
        We're sorry, but the page you're looking for might have been removed, had its name changed, or is temporarily unavailable. Please use the navigation menu or search bar to find what you're looking for.
        </div>
        <Link to='/' className="back-to-home">
          <img src={longArrow} alt="<-- " className="not-found-arrow" />
          <div>Back to Home</div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound