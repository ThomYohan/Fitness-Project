import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {



    render() {
        return (
            <div className="footer">
                <div className="footerBox">
                    <div className="row1">
                        <p>Form Factor</p>
                    </div>
                    <div className="row2">
                        <p>Calorie Counter</p>
                        <p>Blog</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Contact Us</p>
                        <p>API</p>
                        <p>Jobs</p>
                        <p>Feedback</p>
                        <p>Community Guidelines</p>
                    </div>
                    <div className="row3">
                        <p>© 2019 Form Factor, Inc</p>
                    </div>
                </div>
            </div>
        )
    }
}