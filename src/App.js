import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login'
// import Private from './components/Private/Private'
// import CheckIn from './components/CheckIn/CheckIn'
// import Exercise from './components/Exercise/Exercise'
// import Food from './components/Food/Food'
// import Goals from './components/Goals/Goals'
// import Profile from './components/Profile/Profile'
// import Reports from './components/Reports/Reports'
// import routes from './routes'
import Nav from './components/Nav/Nav'
import routes from './routes'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         <header>
          {/* <Login /> */}

         </header>
         {routes}
         {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
