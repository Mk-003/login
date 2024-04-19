import React from 'react';
import { Redirect, Route } from "react-router-dom";
import {API_BASE_URL, ACCESS_TOKEN_NAME} from './ApiConstants';
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem(ACCESS_TOKEN_NAME) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;