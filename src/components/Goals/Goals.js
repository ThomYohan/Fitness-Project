import React, { Component } from 'react'
// import axios from 'axios'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import { requestNutritionGoals, addNutritionGoals } from '../../ducks/nutritionReducer'
// import { workoutReducer } from '../../ducks/workoutReducer'

class Goals extends Component {
    componentDidMount() {
        // this.props.addNutritionAchievements()
        // this.props.workoutReducer()
    }

    // handleClick = (change) => {
    //     let change = this.props
    //     this.props.handleClick(change)
    // }

    render() {
        return(
            <div>
                <p>Goals</p>
                <hr />
                <hr />
                <input type="text" name="saturatedFat" 
                value={this.props.nutritionG.saturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="polyunsaturatedFat"
                value={this.props.nutritionG.polyunsaturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="monounsaturatedFat"
                value={this.props.nutritionG.monounsaturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="transFat"
                value={this.props.transFat}></input>
                <Nav />
            </div>
            
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { requestNutritionGoals, addNutritionGoals })(Goals)