import React from 'react'
import { Route, Redirect } from 'react-router'
import { isLogin } from '../../utils/token'

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routerProps => {
        if (isLogin()) {
          return <Component {...routerProps} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { to: routerProps.location.pathname }
              }}
            />
          )
        }
      }}
    />
  )
}

export default AuthRoute
