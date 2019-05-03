import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ArticleNav.css'


export default class ArticleNav extends Component {



    render() {
        return (
            <div className='ArticleNav'>
                <p>Daily Articles</p>
                <p>Article of the month</p>
            </div>
        )
    }


}