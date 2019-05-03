import React, { Component } from 'react'
// import {line as Chart} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { requestWeekAch, requestWeekGoals } from '../../ducks/chartReducer'
import './Charts.css'




class Charts extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedValue: 'ach_saturated_fat',
      
    }
  }


  componentDidMount() {
    this.props.requestWeekAch()
    this.props.requestWeekGoals()
  }

  //   dateMap = this.props.chartReducer.week.map(date => {
  //       return (

  //       )
  //   })

  handleChange = (event) => {
    this.setState({
      selectedValue: event.target.value,
      // selectedNameValue: event.target.name
    })
  }
  // handleNameChange = (e) => {
  //   this.setState({
  //     selectedNameValue: e.target.name
  //   })
  // }
  render() {
    let dates = []
    if (this.props.chartReducer.week) {
      dates = this.props.chartReducer.week.map(dates => {
        const trim = dates.date_recorded.slice(0, 10)
        return trim
      })
    }
    console.log(dates)
    let stats = []
    if (this.props.chartReducer.week) {
      stats = this.props.chartReducer.week.map(stats => {
        return stats[this.state.selectedValue]
      })
    }
    let goalDates = []
    if (this.props.chartReducer.goal) {
      goalDates = this.props.chartReducer.goal.map(goalDates => {
        return goalDates.date_recorded
      })
    }
    let goals = []
    if (this.props.chartReducer.goal) {
      goals = this.props.chartReducer.goal.map(goals => {
        return goals[this.state.selectedValue]
      })
    }
    const data = {
      labels: dates,
      datasets: [
        {
          label: "Achievements", 
          data: stats,
          fill: false,          // Don't fill area under the line
          borderColor: '#bc80ee'  // Line color
        },
        {
          label: "Goals",
          data: goals,
          fill: false,
          borderColor: 'red'
        }
      ]
    }


    return (
      <div className="chartContainer">
        <div className="chartBox">
          <div className="chart">
          <div className="words"><p>Choose A Report:</p></div>
            <select
              className="case"
              onChange={(event) => this.handleChange(event)}>
              <option name="Saturated Fat" value="ach_trans_fat">Saturated Fat</option>
              <option name="Polyunsaturated Fat" value="ach_polyunsaturated_fat">Polyunsaturated Fat</option>
              <option name="Monounsaturated Fat" value="ach_monounsaturated_fat">Monounsaturated Fat</option>
              <option value="ach_trans_fat">Trans Fat</option>
              <option value="ach_cholesterol">Cholesterol</option>
              <option value="ach_sodium">Sodium</option>
              <option value="ach_potassium">Potassium</option>
              <option value="ach_fiber">Fiber</option>
              <option value="ach_sugar">Sugar</option>
              <option value="ach_vitamin_a">Vitamin A</option>
              <option value="ach_vitamin_c">Vitamin C</option>
              <option value="ach_calcium">Calcium</option>
              <option value="ach_iron">Iron</option>
              <option value="ach_fat">Fat</option>
              <option value="ach_protein">Protein</option>
              <option value="ach_carbohydrates">Carbohydrates</option>
              <option value="ach_workouts">Workouts</option>
              <option value="ach_calories_burned">Calories Burned</option>
              <option value="ach_minutes">Minutes</option>
              <option value="ach_weight">Weight</option>
              <option value="ach_neck">Neck</option>
              <option value="ach_chest">Chest</option>
              <option value="ach_waist">Waist</option>
            </select>
          </div>
            <div class="canvas">
            <article className="canvas-container">
              <Line data={data} />
            </article>
            </div>
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { requestWeekAch, requestWeekGoals })(Charts)