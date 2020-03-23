import React, { Component } from 'react'
import withAuth from '../context/withAuth'

class Home extends Component {
    state = {
        username: '',
        password: '',
        usernameS: '',
        passwordS: '',
        emailS: '',
        isInLogin: true,
    }
    handleFormSubmitLogin = (event) => {
        event.preventDefault();
       const { username, password } = this.state
   
       this.props.login({ username, password })
       .then((user) => {
   
       })
       .catch( error => console.log(error) )
     }
   
     handleFormSubmitSignup = (event) => {
       event.preventDefault();
       const username = this.state.usernameS;
       const password = this.state.passwordS;
       const email = this.state.emailS;
   
       this.props.signup({ username, password, email })
         .then( (user) => {
           this.setState({
               username: '',
               password: '',
               usernameS: '',
               passwordS: '', 
               emailS: '',
           });
         })
         .catch( error => console.log(error) )
     }
   
     handleChange = (event) => {  
       const {name, value} = event.target;
       this.setState({[name]: value});
     }
   
     chengeClass = () => {
         if(this.state.isInLogin){
             this.setState({
                 isInLogin: false,
                 username: '',
                 password: '',
                 usernameS: '',
                 passwordS: '',
                 emailS: '',
             });
         }else{
           this.setState({
               isInLogin: true,
               username: '',
               password: '',
               usernameS: '',
               passwordS: '',
               emailS: '',
           });
         }
     }
    render() {
        const { username, password, usernameS, passwordS, emailS } = this.state;
        return (
            <div>
            <section className={this.state.isInLogin ? 'login-section' : 'login-section position-two'}>
                <div className='logo'>
                    <h1>QUIZ</h1>
                </div>
                <div className='login-form'>
                    <form onSubmit={this.handleFormSubmitLogin}>
                    <h2>Login to your account</h2>
                    <label htmlFor='username' >Username:</label>
                    <input id='username' type='text' name='username' value={username} onChange={this.handleChange} autoComplete='true'/>
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type='password' name='password' value={password} onChange={this.handleChange}  autoComplete='true'/>
                    <input className='submit' type='submit' value='Login' />
                    </form>
                </div>
                <div className='login-link'>
                    <p>You don't have account? 
                        <a href='#0' onClick={this.chengeClass}>  Signup</a>
                    </p>
                </div>
            </section>
            <section className={this.state.isInLogin ? 'signup-section' : 'signup-section position-two'}>
                <div className='signup-form'>
                    <form onSubmit={this.handleFormSubmitSignup}>
                    <h2>Create a new account</h2>
                    <label htmlFor='usernames'>Username:</label>
                    <input id='usernameS' type='text' name='usernameS' value={usernameS} onChange={this.handleChange} autoComplete='true'/>
                    <label htmlFor='emailS'>Email:</label>
                    <input id='emailS' type='email' name='emailS' value={emailS} onChange={this.handleChange} autoComplete='true'/>
                    <label htmlFor='passwordS'>Password:</label>
                    <input id='passwords' type='password' name='passwordS' value={passwordS} onChange={this.handleChange}  autoComplete='true'/>
                    <input className='submit' type='submit' value='Signup' />
                    </form>
                </div> 
                <div className='login-link'>
                    <p>You allready have account? 
                        <a href='#0' onClick={this.chengeClass}>  Login</a>
                    </p> 
                </div>
            </section>
          </div>
        )
    }
}

export default withAuth(Home)