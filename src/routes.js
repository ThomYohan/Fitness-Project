import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import Private from './components/Private/Private'
import CheckIn from './components/CheckIn/CheckIn'
import Goals from './components/Goals/Goals'
import Profile from './components/Profile/Profile'
import Reports from './components/Reports/Reports'
import AboutUs from './components/AboutUs/AboutUs'
import Store from './components/Store/Store'
import Nav from './components/Nav/Nav'
import Logout from './components/Nav/Logout'

export default (
    <HashRouter>
        <Logout />
        <Nav />
        <Switch>
            <Route path='/' component={Login} exact />
            <Route path='/private' component={Private} />
            <Route path='/profile' component={Profile} />
            <Route path='/goals' component={Goals} />
            <Route path='/check-in' component={CheckIn} />
            <Route path='/reports' component={Reports} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/store' component={Store} />
            {/* <Route path='/reports/food' component={Food} /> */}
            {/* <Route path='/reports/exercise' component={Exercise} /> */}
        </Switch>
    </HashRouter>
)