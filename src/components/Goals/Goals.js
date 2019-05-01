import React, { Component } from 'react'
// import axios from 'axios'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import { postNutritionGoals, addNutritionGoals } from '../../ducks/nutritionReducer'
import { requestWeekGoals } from '../../ducks/chartReducer'
// import { workoutReducer } from '../../ducks/workoutReducer'
import './Goals.css'
import Logout from '../Nav/Logout'

class Goals extends Component {
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
    componentDidMount() {
        this.props.requestWeekGoals()
        // this.props.addNutritionAchievements()
        // this.props.workoutReducer()
    }

    // handleClick = (change) => {
    //     let change = this.props
    //     this.props.handleClick(change)
    // }

    render() {
        let inputs = this.state.inputs.map(input => {
            return (
                <div key={input}>
                    {/* <h3>{input}</h3> */}
                    <input type="text" placeholder={input} name={input}
                        value={this.props.nutritionReducer.nutritionG[input]}
                        onChange={(e) => this.props.addNutritionGoals(e)} />
                    <span className="underline1"></span>
                </div>
            )
        })
        return (
            <div className="stuff">
                <div className="font">Goals</div>
                <Nav />
                <Logout />
                <div className="goalContainer">
                    <div className="goalBox">
                        <div className="goal">
                            {inputs}
                        </div>
                    </div>
                    <div className="goalButtonContainer">
                        <div className="goalButtonBox">
                            <button className="goalButton" onClick={() => this.props.postNutritionGoals
                                (this.props.nutritionReducer.nutritionG)}><span>Add Goals</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <input type="text" name="saturatedFat" 
                    </div>
                value={this.props.nutritionReducer.nutritionG.saturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="polyunsaturatedFat"
                value={this.props.nutritionReducer.nutritionG.polyunsaturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="monounsaturatedFat"
                value={this.props.nutritionReducer.nutritionG.monounsaturatedFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="transFat"
                value={this.props.nutritionReducer.nutritionG.transFat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="cholesterol"
                value={this.props.nutritionReducer.nutritionG.cholesterol}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="sodium"
                value={this.props.nutritionReducer.nutritionG.sodium}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="potassium"
                value={this.props.nutritionReducer.nutritionG.potassium}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="fiber"
                value={this.props.nutritionReducer.nutritionG.fiber}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="sugar"
                value={this.props.nutritionReducer.nutritionG.sugar}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="vitaminA"
                value={this.props.nutritionReducer.nutritionG.vitaminA}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="vitaminC"
                value={this.props.nutritionReducer.nutritionG.vitaminC}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="calcium"
                value={this.props.nutritionReducer.nutritionG.calcium}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="iron"
                value={this.props.nutritionReducer.nutritionG.iron}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="fat"
                value={this.props.nutritionReducer.nutritionG.fat}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="protein"
                value={this.props.nutritionReducer.nutritionG.protein}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="carbohydrates"
                value={this.props.nutritionReducer.nutritionG.carbohydrates}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="workouts"
                value={this.props.nutritionReducer.nutritionG.workouts}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="calBurned"
                value={this.props.nutritionReducer.nutritionG.calBurned}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="minutes"
                value={this.props.nutritionReducer.nutritionG.minutes}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="weight"
                value={this.props.nutritionReducer.nutritionG.weight}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="neck"
                value={this.props.nutritionReducer.nutritionG.neck}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="chest"
                value={this.props.nutritionReducer.nutritionG.chest}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <input type="text" name="waist"
                value={this.props.nutritionReducer.nutritionG.waist}
                onChange={e => this.props.addNutritionGoals(e)}></input>
                <button name="postNutritionGoals"
                onClick={() => this.props.postNutritionGoals(this.props.nutritionReducer.nutritionG)}></button> */}
            </div>

        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { postNutritionGoals, addNutritionGoals, requestWeekGoals })(Goals)