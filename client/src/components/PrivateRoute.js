import React from 'react'
import { BrowserRouter as Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...props }) {
    return (
        <Route
          {...props}
          render={innerProps =>
            this.state.loggedIn ? 
                <Component {...innerProps} />
                :
                <Redirect to="/home" />
          }
        />
      );
}