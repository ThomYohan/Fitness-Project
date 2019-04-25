import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {



    render() {
        return (
            <div className='nav'>
                <div className='home'>
                    <Link to='/private'>
                        <button>Home</button>
                    </Link>
                </div>
                <div className='goals'>
                    <Link to='/goals'>
                        <button>Goals</button>
                    </Link>
                </div>
                <div className='check-in'>
                    <Link to='/check-in'>
                        <button>Check-in</button>
                    </Link>
                </div>
                <div className='reports'>
                    <Link to='/reports'>
                        <button>Reports</button>
                    </Link>
                </div>
                <div className='profile'>
                    <Link to='/profile'>
                        <button>Profile</button>
                    </Link>
                </div>
                <div>
                    <Link to='/'>
                        <button>Logout</button>
                    </Link>
                </div>
                {/* <div>
                    <Link to='/reports/food'>

                    </Link>
                </div>
                <div>
                    <Link to='/reports/exercise'>
                    
                    </Link>
                </div> */}
            </div>
        )
    }
}