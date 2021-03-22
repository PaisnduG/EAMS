import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';

const Navbar = ({
  auth: { isAuthenticated, isAdmin, isEmployee, isClient, loading },
  logout,
}) => {
  const showNavigation = () => (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-warehouse'></i> EAMS
        </Link>
      </h1>
      {!loading && !isAuthenticated && (
        <Fragment>
          <ul>
            <li>
              <a href='#!'>Employees</a>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </Fragment>
      )}

      {!loading && isAdmin && (
        <Fragment>
          <ul>
            <li>
              <Link to='/admin-dashboard'>
                <i className='fas fa-user' />{' '}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
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
              <Link to='/employee-dashboard'>
                <i className='fas fa-user' />{' '}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
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
              <Link to='/client-dashboard'>
                <i className='fas fa-user' />{' '}
                <span className='hide-sm'>Dashboard</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Logout</span>
              </a>
            </li>
          </ul>
        </Fragment>
      )}
    </nav>
  );
  const authLink = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <a href='#!'>Employees</a>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const empty = <ul></ul>;

  return <header id='header'>{showNavigation()}</header>;
  //   (
  //     <nav className='navbar bg-dark'>
  //       <h1>
  //         <Link to='/'>
  //           <i className='fas fa-warehouse'></i> EAMS
  //         </Link>
  //       </h1>
  //       {!loading && <Fragment>{isAdmin ? authLink : empty}</Fragment>}
  //       {!loading && <Fragment>{isEmployee ? authLink : empty}</Fragment>}
  //       {!loading && <Fragment>{isClient ? authLink : empty}</Fragment>}
  //     </nav>
  //   );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
