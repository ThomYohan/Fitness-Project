import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Charts from './Charts'
// import { connect } from 'http2';
import { connect } from 'react-redux'
import { requestWeekAch, requestWeekGoals } from '../../ducks/chartReducer'
import './Reports.css'
import Logout from '../Nav/Logout'


class Reports extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };
    componentDidMount() {
        this.props.requestWeekAch()
        this.props.requestWeekGoals()
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }





    render() {
        return (
            <div className="reportsContainer">
                <div className="topFunc">
                    <div className="empty" />
                    <div className="font"><p>Stats</p></div>
                    {/* <Logout /> */}
                </div>
                {/* <Nav /> */}
                <div className="wee"><p>Charts and Reports</p>
                </div>

                <Charts />
            </div>
        )
    }
}




const mapState = (reduxState) => reduxState

export default connect(mapState, { requestWeekAch, requestWeekGoals })(Reports)