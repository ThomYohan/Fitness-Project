import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'


export default class Logout extends Component {



    render() {
        return (
            <div className='Logout'>
                <Link to='/'>
                    <button className="logoutButton">Logout</button>
                </Link>
            </div>
        )
    }
}