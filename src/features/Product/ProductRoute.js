import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import ProductProtectedRoute from './ProductProtectedRoute'


const ProductRoute = ({...rest}) => {
    const {uid, phoneNumber } = useSelector(state => state.auth.user)
    return (
        <Route {...rest} 
        render={ props => {
            if(uid.length && phoneNumber.length) return <ProductProtectedRoute />
            else return <Redirect to={{
                    pathname: "/",
                    state: { from: props.location}
            }}/>
        }}
    /> 
    )
}

export default ProductRoute