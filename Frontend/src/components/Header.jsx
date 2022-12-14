import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import './styles/header.scss';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <header>
        <div className='logo'>
          <Link to="/">GoalSetter</Link>
        </div>
        <ul>
          {user ? (
            <li>
              <button to="/login" onClick={onLogout}>
                {FaSignOutAlt} Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">{FaSignInAlt} Login</Link>
              </li>
              <li>
                <Link to="/register">{FaUser} Register</Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;