    // async profile(req, res) {
    //     if(req.session.user) res.status(200).send(req.session.user)
    //     else res.status(401).send('Please log in')
    // },
    // async checkIn(req, res) {
    //     const { date_id, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol,
    //      sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates 
    //     } = req.body
    //     const db = req.app.get('db')
    //     const thisArr = await db.create_a_nutrition([date_id, saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol,
    //     sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates])
    //     if(thisArr.length === 0) {
    //         return res.status(200).send({message: 'you need goals in life'})
    //     }
    // }
        // getProfile: async (req, res) => {
    //     const profile = req.body
    //     const db = req.app.get('db')
    //     let changes = db.create_profile()

    // }




//     import React, { Component } from 'react'
// import {Line as LineChart} from 'react-chartjs-2'
// import { Line } from 'react-chartjs-2'
// import { connect } from 'react-redux'
// import { requestWeekAch } from '../../ducks/chartReducer'



// function chartData() {
//     return {
//       labels: ['Jan', 'Feb', 'Mar', 'April'],
//       datasets: [
//         {
//           label: 'My First dataset',
//         //   fillColor: 'rgba(220,220,220,0.2)',
//           strokeColor: 'rgba(220,220,220,1)',
//           pointColor: 'rgba(220,220,220,1)',
//           pointStrokeColor: '#fff',
//           pointHighlightFill: '#fff',
//           pointHighlightStroke: 'rgba(220,220,220,1)',
//           data: [65, 59, 80, 81, 56, 55, 40],
//         },
//         {
//           label: 'My Second dataset',
//         //   fillColor: 'rgba(151,187,205,0.2)',
//           strokeColor: 'rgba(151,187,205,1)',
//           pointColor: 'rgba(151,187,205,1)',
//           pointStrokeColor: '#fff',
//           pointHighlightFill: '#fff',
//           pointHighlightStroke: 'rgba(151,187,205,1)',
//           data: [28, 48, 40, 19, 86, 27, 90],
//         },
//       ]
//     }
//   }
  
//   const options = {
//     scaleShowGridLines: true,
//     scaleGridLineColor: 'rgba(0,0,0,.05)',
//     scaleGridLineWidth: 1,
//     scaleShowHorizontalLines: true,
//     scaleShowVerticalLines: true,
//     bezierCurve: true,
//     bezierCurveTension: 0.4,
//     pointDot: true,
//     pointDotRadius: 4,
//     pointDotStrokeWidth: 1,
//     pointHitDetectionRadius: 20,
//     datasetStroke: true,
//     datasetStrokeWidth: 2,
//     datasetFill: true,
//     legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
//   }
  
//   const styles = {
//     graphContainer: {
//       border: '1px solid black',
//       padding: '15px'
//     }
//   }
//   class Charts extends React.Component {
  
//     constructor(props) {
//       super(props)
//       this.state = {
//         data: chartData()
//       }
//     }

    
  
//     render() {
//       return (
//         <div style={styles.graphContainer}>
//           <LineChart data={this.state.data}
//             options={options}
//             width="600" height="250"/>
//         </div>
//       )
//     }
//   }

//   const mapState = (reduxState) => reduxState
  
//   export default connect(mapState, { requestWeekAch })(Charts)






// Line(document.getElementById("line-chart"), {
//     type: 'line',
//     data: {
//         labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//         datasets: [{ 
//             data: [86,114,106,106,107,111,133,221,783,2478],
//             label: "Africa",
//             borderColor: "#3e95cd",
//             fill: false
//         }, { 
//             data: [282,350,411,502,635,809,947,1402,3700,5267],
//             label: "Asia",
//             borderColor: "#8e5ea2",
//             fill: false
//         }, { 
//             data: [168,170,178,190,203,276,408,547,675,734],
//             label: "Europe",
//             borderColor: "#3cba9f",
//             fill: false
//         }, { 
//             data: [40,20,10,16,24,38,74,167,508,784],
//             label: "Latin America",
//             borderColor: "#e8c3b9",
//             fill: false
//         }, { 
//             data: [6,3,2,2,7,26,82,172,312,433],
//             label: "North America",
//             borderColor: "#c45850",
//             fill: false
//         }
//     ]
// },
// options: {
//     title: {
//         display: true,
//         text: 'World population per region (in millions)'
//     }
// }
// })