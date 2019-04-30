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
        if (res.data.loggedIn) this.props.history.push('/goals')
        else alert('registration failed')
            .catch(err => {
                console.log('error in Login.js register', err)
            })
    }

    async login() {
        const { email, password } = this.state
        const res = await axios
            .post('/api/auth/login', { email, password })
        if (res.data.loggedIn) this.props.history.push('/goals')
        else alert('login failed')
            .catch(err => {
                console.log('error in Login.js login', err)
            })
    }

    render() {
        return (
            <div className='login-container'>
                <div className="inner-container">
                    <div className="logBox">
                        <div className="email">
                            <p>
                                <input className="emailInput" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type='text' />
                                <span class="underline1"></span>
                            </p>
                        </div>
                        <div className="pass">
                            <p>
                                <input className="passInput" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type='text' />
                                <span class="underline2"></span>
                            </p>
                        </div>
                    </div>
                    <div className="regButtonBox">
                        <button className='regButton' onClick={() => this.register()}><span id="logText">Register</span></button>
                    </div>
                    <div className="logButtonBox">
                        <button className='logButton' onClick={() => this.login()}><span id="logText">Log in</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
