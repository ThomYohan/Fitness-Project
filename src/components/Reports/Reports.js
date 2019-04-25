import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Charts from './Charts'
// import { connect } from 'http2';
import { connect } from 'react-redux'
import { requestWeekAch } from '../../ducks/chartReducer'
import './Reports.css'


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
            <div>
                <p>Stats</p>
                <hr />
                <hr />
                <Nav />
                <div className="dropdown" style={{ background: "red", width: "200px" }} >
                    <div className="button" onClick={this.showDropdownMenu}> Menu </div>

                    {this.state.displayMenu ? (
                        <ul>
                            <li><a className="active" href="#Create Page">Create Page</a></li>
                            <li><a href="#Manage Pages">Manage Pages</a></li>
                            <li><a href="#Create Ads">Create Ads</a></li>
                            <li><a href="#Manage Ads">Manage Ads</a></li>
                            <li><a href="#Activity Logs">Activity Logs</a></li>
                            <li><a href="#Setting">Setting</a></li>
                            <li><a href="#Log Out">Log Out</a></li>
                        </ul>
                    ) :
                        (
                            null
                        )
                    }

                </div>
                <Charts />
            </div>
        )
    }
}




const mapState = (reduxState) => reduxState

export default connect(mapState, { requestWeekAch })(Reports)