import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ accounts, component: Component, ...rest }) => {
  const authenticated = false;
  return (
    <Route
      { ...rest }
      render={ props =>
        authenticated === true ? <Component { ...props } /> : <Redirect to="/setup" />
      }
    />
  );
};

export default PrivateRoute;
