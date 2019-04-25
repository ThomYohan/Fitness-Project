import React, { Component } from 'react'
// import {line as Chart} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { requestWeekAch } from '../../ducks/chartReducer'
import './Charts.css'




  class Charts extends React.Component {
   


  componentDidMount() {
      this.props.requestWeekAch()
  }

//   dateMap = this.props.chartReducer.week.map(date => {
//       return (
          
//       )
//   })

  render() {
      let dates = []
      if(this.props.chartReducer.week) {
          dates = this.props.chartReducer.week.map(dates => {
              return dates.date_recorded
          })
      }
      let stats = []
      if(this.props.chartReducer.week) {
          stats = this.props.chartReducer.week.map(stats => {
              return stats.ach_trans_fat
          })
      }
    const data = {
      labels: dates,
      datasets: [
        {
          label: 'Trans Fat',
          data: stats,
          fill: false,          // Don't fill area under the line
          borderColor: 'green'  // Line color
        }
      ]
    }

    return (
      <div className="Chart">
       
        <article className="canvas-container">
          <Line data={data} />
        </article>
      </div>
    );
  }
}

  const mapState = (reduxState) => reduxState
  
  export default connect(mapState, { requestWeekAch })(Charts)