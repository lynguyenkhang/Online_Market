import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import AdminProtectedRoute from './AdminProtectedRoute'

const AdminRoute = ({...rest}) => {
    const {uid, phoneNumber, email } = useSelector(state => state.auth.user)
    const condition1 = uid.length
    const condition2 = phoneNumber.length
    const condition3 = email === process.env.REACT_APP_ADMIN
    const condition = condition1 && condition2 && condition3

    return (
        <Route {...rest} 
        render={ props => {
            if(condition){
                return <AdminProtectedRoute />
            } 
            else return <Redirect to={{
                    pathname: "/",
                    state: { from: props.location }
            }}/>
        }}
    /> 
    )
}

export default AdminRoute
