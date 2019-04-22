import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

class Private extends Component {
    componentDidMount() {
        this.props.getData()
    }

    render() {
        // const {id, email} = this.props.userReducer.user
        return (
            <div>
                <h1>Home</h1>
                
                <hr />
                <hr />
                < Nav />
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Private)