import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../components/Register'
import Map from '../components/Map'
import Login from '../components/Login'
import StuffPage from '../components/StuffPage'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />;
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/stuff">
        <StuffPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
    </Switch>
  )
}

export default MainRoutes
