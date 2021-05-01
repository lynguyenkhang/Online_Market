import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import MainPage from './pages/index'
import UncheckedProductPage from './pages/UncheckedProduct'


const UserProtectedRoute = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.url}/unchecked/:productID`} component={UncheckedProductPage} />
            <Route path={`${match.url}/:productID`} component={MainPage} />
        </Switch>
    )
}

export default UserProtectedRoute