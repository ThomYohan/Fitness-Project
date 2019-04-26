import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    async register() {
        const { email, password } = this.state
        const res = await axios
            .post('/api/auth/register', { email, password })
        if (res.data.loggedIn) this.props.history.push('/private')
        else alert('registration failed')
            .catch(err => {
                console.log('error in Login.js register', err)
            })
    }

    async login() {
        const { email, password } = this.state
        const res = await axios
            .post('/api/auth/login', { email, password })
        if (res.data.loggedIn) this.props.history.push('/private')
        else alert('login failed')
            .catch(err => {
                console.log('error in Login.js login', err)
            })
    }

    render() {
        return (
            <div className='login-container'>
                <div classNam="inner-container">
                    <p>
                        <span>Email:</span>
                        <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type='text' />
                    </p>
                    <p>
                        <span>Password:</span>
                        <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type='text' />
                    </p>
                    <button className='regButton' onClick={() => this.register()} >Register</button>
                    <button className='logButton' onClick={() => this.login()} >Log in</button>
                </div>
            </div>
        )
    }
}
