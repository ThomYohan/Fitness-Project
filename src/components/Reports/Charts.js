import React, { Component } from 'react'
// import {line as Chart} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { requestWeekAch } from '../../ducks/chartReducer'
import './Charts.css'




class Charts extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedValue: 'ach_saturated_fat',
      selectedNameValue: 'Saturated Fat'
    }
  }


  componentDidMount() {
    this.props.requestWeekAch()
  }

  //   dateMap = this.props.chartReducer.week.map(date => {
  //       return (

  //       )
  //   })

  handleChange = (event) => {
    this.setState({
      selectedValue: event.target.value
    })
  }
  handleNameChange = (e) => {
    this.setState({
      selectedNameValue: e.target.name
    })
  }
  render() {
    let dates = []
    if (this.props.chartReducer.week) {
      dates = this.props.chartReducer.week.map(dates => {
        return dates.date_recorded
      })
    }
    let stats = []
    if (this.props.chartReducer.week) {
      stats = this.props.chartReducer.week.map(stats => {
        return stats[this.state.selectedValue]
      })
    }
    const data = {
      labels: dates,
      datasets: [
        {
          label: [this.state.selectedNameValue],
          data: stats,
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }


    return (
      <div className="Chart">
        <select
          onChange={(event) => this.handleChange(event)}
          onClick={(e) => this.handleNameChange(e)}>
          <option name="Saturated Fat" value="ach_trans_fat">Saturated Fat</option>
          <option name="Polyunsaturated Fat"value="ach_polyunsaturated_fat">Polyunsaturated Fat</option>
          <option name="Monounsaturated Fat"value="ach_monounsaturated_fat">Monounsaturated Fat</option>
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
        <article className="canvas-container">
          <Line data={data} />
        </article>
      </div>
    );
  }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { requestWeekAch })(Charts)