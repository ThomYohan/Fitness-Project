import React, { Component } from 'react'
// import axios from 'axios'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import { requestNutritionGoals } from '../../ducks/nutritionReducer'
// import { workoutReducer } from '../../ducks/workoutReducer'

class Goals extends Component {
    componentDidMount() {
        this.props.requestNutritionGoals()
        // this.props.workoutReducer()
    }

    render() {
        return(
            <div>
                <p>Goals</p>
                <hr />
                <hr />
                <Nav />
            </div>
            
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { requestNutritionGoals })(Goals)