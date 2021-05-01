import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import PageHome from './pages/Home/'
import PageBuyProduct from './pages/BuyProduct/'

const UserProtectedRoute = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.url}/post`} component={PageBuyProduct}/>
            <Route exact path={match.url} component={PageHome} />
        </Switch>
    )
}

export default UserProtectedRoute