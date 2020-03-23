import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import withAuth from '../context/withAuth'

function EditorRute(props) {
    const {isLoggedIn, component: Component, ...rest} = props

    return (
       <>
        {isLoggedIn && props.user.isEditor ? <Route render={(props) => {
        return <Component {...props}/>}} {...rest}/> : <Redirect to='/spawn' /> }
       </>
    )
}

export default withAuth(EditorRute);