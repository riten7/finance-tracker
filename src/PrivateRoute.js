import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavigationMenu from './components/NavigationMenu';

const PrivateRoute = ({ accounts, component: Component, ...rest }) => {
  const authenticated = accounts.length > 0;
  return (
    <Route
      { ...rest }
      render={ props =>
        authenticated ?
        <>
        <NavigationMenu />
        <Component { ...props } />
         </> : <Redirect to="/setup" />
      }
    />
  );
};

export default PrivateRoute;
