import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import PageProfile from './pages/profile'
import DashboardProfile from './pages/DashboardProfile'


const UserProtectedRoute = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route exact path={match.url} component={PageProfile} />
            <Route exact path={`${match.url}/dashboard`} component={DashboardProfile} />

        </Switch>
    )
}

export default UserProtectedRoute