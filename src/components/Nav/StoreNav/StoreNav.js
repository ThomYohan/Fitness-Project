import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './StoreNav.css'


export default class StoreNav extends Component {



    render() {
        return (
            <div className='StoreNav'>
                <p>Protein</p>
                <p>Energy and Endurance</p>
                <p>Vitamins and General Health</p>
            </div>


        )
    }
}