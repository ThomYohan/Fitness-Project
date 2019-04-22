import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import { postNutritionAchievements, addNutritionAchievements } from '../../ducks/nutritionReducer'
import './CheckIn.css'


class CheckIn extends Component {
    constructor() {
        super()

        this.state = {
            inputs: [
                'saturatedFat',
                'polyunsaturatedFat',
                'monounsaturatedFat',
                'transFat',
                'cholesterol',
                'sodium',
                'potassium',
                'fiber',
                'sugar',
                'vitaminA',
                'vitaminC',
                'calcium',
                'iron',
                'fat',
                'protein',
                'carbohydrates',
                'workouts',
                'calBurned',
                'minutes',
                'weight',
                'neck',
                'chest',
                'waist'
            ]
        }
    }


    render() {
        let inputs = this.state.inputs.map(input => {
            return (
                <div key={input}>
                    <h3>{input}</h3>
                    <input type="text" name={input}
                        value={this.props.nutritionReducer.nutritionA[input]}
                        onChange={e => this.props.addNutritionAchievements(e)}></input>
                </div>
            )
        })
        return (
            <div>
                <p>CheckIn</p>
                <hr />
                <hr />
                <Nav />
                <div className="CheckInInputs">
                    {inputs}
                </div>
                <div className="CheckInButton">
                    <button
                        onClick={() => this.props.postNutritionAchievements
                            (this.props.nutritionReducer.nutritionA)}>
                    </button>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { postNutritionAchievements, addNutritionAchievements })(CheckIn)