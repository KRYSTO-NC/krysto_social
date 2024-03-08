import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import {
  FaArtstation,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../../../slices/userApiSlice'
import { logout } from '../../../slices/authSlice.js'
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <nav className="navbar bg-dark">
      <h1 className="logo">
        <Link>
          <h1>
            {' '}
            <FaArtstation /> ArtiConnect NC
          </h1>
        </Link>
      </h1>
      <ul className="links">
        <li>
          <Link to="/developper">Artisans</Link>
        </li>

        <li>
          <Link to="/posts">posts</Link>
        </li>

        {userInfo ? (
          <>
            {/* if user is logged in, show these links */}

            <li>
              <Link to="/dashboard">
                <FaUser /> <span className="hide-sm">Dashboard</span>{' '}
              </Link>
            </li>
            <li>
              <Link to={'/'} onClick={logoutHandler}>
                <FaSignOutAlt /> <span className="hide-sm">Deconnection</span>{' '}
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* If user is logged out, show these links */}
            <li>
              <Link to="/register">S'inscire</Link>
            </li>
            <li>
              <Link to="/login">Connection</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
