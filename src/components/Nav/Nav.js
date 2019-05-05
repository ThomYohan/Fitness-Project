import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NutrNav from './NutrNav/NutrNav'
import ArticleNav from './ArticleNav/ArticleNav'
import StoreNav from './StoreNav/StoreNav'
import CommNav from './CommNav/CommNav'
import HomeNav from './HomeNav/HomeNav'
import './Nav.css'


export default class Nav extends Component {
    constructor() {
        super()

        this.state = {
            showNav: false
        }
    }

    handleDrop = () => {
        this.setState({ showNav: true })
    }

    handleDropNot = () => {
        this.setState({ showNav: false })
    }

    render() {
        return (
            <div
            // onMouseOver={this.handleDrop}
            >

                <div className='nav'
                    onMouseOver={this.handleDrop}
                    onMouseLeave={this.handleDropNot}
                >
                    {/* {this.handleDrop} */}
                    <div className='home'
                    // onMouseOver={this.handleDrop}
                    // onMouseLeave={this.handleDropNot}
                    >
                        {/* <button>
                            <Link to='/'></Link>
                        </button> */}
                        <Link to='/private'>
                            <h2>Home</h2>
                        </Link>
                    </div>

                    <div
                        onMouseOver={this.handleDrop}
                        onMouseLeave={this.handleDropNot}
                    ><h1>Stats</h1>
                        {this.state.showNav && <NutrNav />}
                    </div>
                    <div
                        onMouseOver={this.handleDrop}
                        onMouseLeave={this.handleDropNot}
                    ><h1>Articles</h1>
                        {this.state.showNav && <ArticleNav />}
                    </div>
                    <div
                        onMouseOver={this.handleDrop}
                        onMouseLeave={this.handleDropNot}
                    ><h1>About us</h1>
                        {this.state.showNav && <CommNav />}
                    </div>
                    <div
                        onMouseOver={this.handleDrop}
                        onMouseLeave={this.handleDropNot}
                    ><Link to='/store'>
                            <h1>Store</h1>
                        </Link>
                        {this.state.showNav && <StoreNav />}
                    </div>
                </div>
            </div>
        )
    }
}