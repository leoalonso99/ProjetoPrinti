import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Details from './pages/Details'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />

                <Route path='/home' component={Home} />

                <Route path='/details/:id' component={Details} />
            </Switch>
        </Router>
    )
 }