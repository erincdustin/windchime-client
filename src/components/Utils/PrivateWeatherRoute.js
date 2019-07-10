import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateWeatherRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
        ? TokenService.hasWeatherToken()
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/getWeather',
                state: { from: componentProps.location }
              }}
            />
        : <Redirect
        to={{
          pathname: '/',
          state: { from: componentProps.location }
        }}
      />
      )}
    />
  )
}