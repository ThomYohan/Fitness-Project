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
                    {/* <h3>{input}</h3> */}
                    <input type="text" placeholder={input} name={input}
                        value={this.props.nutritionReducer.nutritionA[input]}
                        onChange={e => this.props.addNutritionAchievements(e)}></input>
                </div>
            )
        })
        return (
            <div>
                <p>CheckIn</p>
                {/* <Nav /> */}
                <div className="checkContainer">
                    <div className="checkBox">
                        <div className="check">
                            {inputs}
                        </div>
                    </div>
                    <div className="checkButtonContainer">
                        <div className="checkButtonBox">
                            <button className="checkButton"
                                onClick={() => this.props.postNutritionAchievements
                                    (this.props.nutritionReducer.nutritionA)}><span>Add Achievements</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { postNutritionAchievements, addNutritionAchievements })(CheckIn)