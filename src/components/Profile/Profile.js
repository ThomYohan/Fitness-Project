import React, { Component } from 'react'
// import axios from 'axios'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import { editProfile, postProfileChanges } from '../../ducks/profileReducer'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            inputs: [
                'name',
                'email',
                'age',
                'gender',
                'location'
            ]
        }
    }



    render() {
        let inputs = this.state.inputs.map(input => {
            return (
                <div key={input}>
                    {/* <h3>{input}</h3> */}
                    <input type="text" placeholder={input} name={input}
                        value={this.props.profileReducer.profile[input]}
                        onChange={e => this.props.editProfile(e)}></input>
                </div>
            )
        })
        return (
            <div>
                <p>Profile</p>
                {/* <Nav /> */}
                <div className="ProfileInput">
                    {inputs}
                </div>
                <div className="ProfileButton">
                    <button onClick={() => this.props.postProfileChanges(this.props.profileReducer.profile)}>
                    </button>
                </div>
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { editProfile, postProfileChanges })(Profile)