import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../action/auth";

const Navbar = ({
  auth: { isAuthenticated, isAdmin, isEmployee, isClient, loading },
  logout,
}) => {
  const showNavigation = () => (
    <nav className='navbar bg-dark'>
      <h4>
        <Link to='/' className='eimsky text-decoration-none'>
          {" "}
          Eimsky
        </Link>
      </h4>
      {!loading && !isAuthenticated && (
        <Fragment>
          <ul>
            <li>
              <Link to='/register' className='nav-it text-decoration-none'>
                Register
              </Link>
            </li>
            <li>
              <Link to='/login' className='nav-it text-decoration-none'>
                Login
              </Link>
            </li>
          </ul>
        </Fragment>
      )}

      {!loading && isAdmin && (
        <Fragment>
          <ul>
            <li>
              <Link
                to='/admin-dashboard'
                className='nav-it text-decoration-none'
              >
                <i className='fas fa-user' />{" "}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{" "}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </ul>
        </Fragment>
      )}

      {!loading && isEmployee && (
        <Fragment>
          <ul>
            <li>
              <Link
                to='/employee-dashboard'
                className='nav-it text-decoration-none'
              >
                <i className='fas fa-user' />{" "}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{" "}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </ul>
        </Fragment>
      )}

      {!loading && isClient && (
        <Fragment>
          <ul>
            <li>
              <Link
                to='/client-dashboard'
                className='nav-it text-decoration-none'
              >
                <i className='fas fa-user' />{" "}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{" "}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </ul>
        </Fragment>
      )}
    </nav>
  );
  return <header id='header'>{showNavigation()}</header>;
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
