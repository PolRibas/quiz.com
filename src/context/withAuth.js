import React, { Component } from 'react'
import {AuthContext} from './auth-context'


const withAuth = (Comp) => {
    return class withAuth extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                  { ({user, isLoggedIn, login, signup, logout, getMe}) => { 
                  return <Comp 
                  user={user} 
                  isLoggedIn={isLoggedIn} 
                  login={login} 
                  signup={signup} 
                  logout={logout}
                  getMe={getMe}
                  {...this.props}
                  /> } }
                </AuthContext.Consumer>
            )
        }
    }
    
}

export default withAuth