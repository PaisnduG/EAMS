import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const EmployeeRoute = ({
  component: Component,
  auth: { isEmployee, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isEmployee && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

EmployeeRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(EmployeeRoute);
