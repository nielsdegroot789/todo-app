import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../components/Register'
import Map from '../components/Map'
import Login from '../components/Login'
import StuffOverviewPage from '../components/StuffOverviewPage'

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
        <StuffOverviewPage />
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
