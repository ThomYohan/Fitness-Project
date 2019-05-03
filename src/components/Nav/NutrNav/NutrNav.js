import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NutrNav.css'


export default class NutrNav extends Component {



    render() {
        return (
            <div className='NutrNav'>
                <div className='goals'>
                    <Link to='/goals'>
                        {/* <button className='goalsButton'>Goals</button> */}
                        <h3>Goals</h3>
                    </Link>
                </div>
                <div className='check-in'>
                    <Link to='/check-in'>
                        {/* <button className='checkinButton'>Check-in</button> */}
                        <h3>Check-in</h3>
                    </Link>
                </div>
                <div className='reports'>
                    <Link to='/reports'>
                        {/* <button className='reportsButton'>Reports</button> */}
                        <h3>Reports</h3>
                    </Link>
                </div>
            </div>
        )
    }
}