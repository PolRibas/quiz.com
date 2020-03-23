import React, { Component } from 'react'
import auth from '../services/auth-service'


export const AuthContext = React.createContext();

class AuthProvaider extends Component {
    state = {
        isLoggedIn: false,
        user: {},
        isLoading: true
    }

    userSignUp = (user) => {
        return auth.signup(user)
            .then((user) => {
            this.setState({
                user,
                isLoggedIn: true,
            });
        })
    }

    userLogin = (user) => {
        return auth.login(user)
        .then( (user) => {
            this.setState({
                user,
                isLoggedIn: true,
            });
        })
    }

    userLogout = () => {
        return auth.logout()
        .then(() => {
            this.setState({
                user: {},
                isLoggedIn: false,
            });
        })
    }

    getMe = () => {
        auth.me()
        .then(user => {
            this.setState({
                user,
                isLoggedIn:true,
                isLoading: false
            })
        })
        .catch(() => {
            this.setState({
                user: {},
                isLoggedIn: false,
                isLoading: false
            });
        })
    }

    componentDidMount() {
        this.getMe()
    }

    render() {
        const {user, isLoggedIn, isLoading} = this.state;
        return (
            <>
            {isLoading ? <p>loading...</p> : 
            <AuthContext.Provider value={
                {user, 
                isLoggedIn,
                login: this.userLogin,
                signup: this.userSignUp,
                logout: this.userLogout,
                getMe: this.getMe,
                }
            }>
                {this.props.children}
            </AuthContext.Provider>
            }
            </>
        )
    }
}

export default AuthProvaider
