import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from '../context/withAuth'

function AnonimRoute(props) {
    const {isLoggedIn, component: Component, ...rest} = props
    return (
       <>
        {!isLoggedIn ? <Route render={(props) => {
        return <Component {...props}/>}} {...rest}/> : <Redirect to='/spawn' /> }
       </>
    )
}

export default withAuth(AnonimRoute)