import longArrow from '../assets/icons/long-arrow-left.png'
import { Link } from 'react-router-dom'
import '../components/styles/NotFound.css'

const PermissionDenied = () => {
  return (
    <div className="permission-denied-root">
      <div className="permission-denied-container">
        <div className="permission-denied-title">
        Permission Denied
        </div>
        <div className="permission-denied-desc">
        We're sorry, but you do not have permission to access this resource. If you believe this is an error, please contact the administrator for assistance.</div>
        <Link to='/' className="back-to-home">
          <img src={longArrow} alt="<-- " className="permission-denied-arrow" />
          <div>Back to Home</div>
        </Link>
      </div>
    </div>
  )
}

export default PermissionDenied
