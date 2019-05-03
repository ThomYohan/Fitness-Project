import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CommNav.css'


export default class CommNav extends Component {



    render() {
        return (
            <div className='CommNav'>
                <div className='AboutUs' >
                    <p>Forum</p>
                    <Link to='/aboutus'>
                        <p>About Us</p>
                    </Link>
                    <p>Contact Us</p>
                </div>
                {/* <div className='Social'>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Pinterest</p>
                </div> */}
            </div>
        )
    }
}