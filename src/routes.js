import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Auth from './containers/Auth'
import Private from './containers/Private'

export default function routes() {
    return (
        <Router>
            <Switch>
                <Route path="/private" component={Private} />
                <Route path="/auth" component={Auth} />
                <Redirect from="/" to="/auth" />
            </Switch>

        </Router>
    )
}
