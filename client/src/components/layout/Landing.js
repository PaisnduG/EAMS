import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Landing = (props) => {
  // Redirect logged in user to dashboard
  // @to-do Redirect user to Product page

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Enterprise Asset Management System</h1>
          <p className='lead'>
            Create a profile/portfolio & get your Assets allocated.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {};

export default Landing;
