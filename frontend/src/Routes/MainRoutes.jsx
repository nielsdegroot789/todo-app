import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../components/Register'
import Map from '../components/Map'
import Login from '../components/Login'
import StuffOverview from '../components/StuffOverview'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/stuff" />;
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/stuff">
        <StuffOverview />
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
