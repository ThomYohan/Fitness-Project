import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Private.css'
import { requestWeekGoals } from '../../ducks/chartReducer'


class Private extends Component {
    componentDidMount() {
        this.props.requestWeekGoals()
    }

    render() {
        return (
            <div className='Home'>
                <h1>Home</h1>
                
                {/* < Nav /> */}
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { requestWeekGoals })(Private)