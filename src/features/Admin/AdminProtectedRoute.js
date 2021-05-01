import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AdminHome from './pages/index'
import AdminProduct from './pages/AdminProduct'

const AdminProtectedRoute = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.url}/product/:productID`} component={AdminProduct}/>
            <Route exact path={match.url} component={AdminHome} />
        </Switch>
    )
}

export default AdminProtectedRoute