import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import PageLogIn from './pages/LogIn'
import WelcomeNewUser from './pages/WelcomeNewUser'


export default function AuthRoute({...rest}) {
    const {uid, phoneNumber} = useSelector(state => state.auth.user)
    return (
        <Route {...rest}
        render={ props => {
            if(!uid.length) return <PageLogIn />
            else {
                if(phoneNumber.length === 0){
                    return <WelcomeNewUser />
                } else{
                    return <Redirect to={{
                        pathname: "/market",
                        state: { from: props.location}
                    }}/>
                }

            }
        }}/>
    )
}
