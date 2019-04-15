import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../ducks/userReducer'
import { Link } from 'react-router-dom'

class Private extends Component {
    componentDidMount() {
        this.props.getData()
    }

    render() {
        const {id, email} = this.props.user
        return (
            <div>
                <h1>Profile Summary</h1>
                <hr />
                <hr />
                {
                    id ? (
                        <div>
                            <p>Name:</p>
                            <p>Email: {email}</p>
                            <p>ID: {id}</p>
                            <a href='http://localhost:4000/api/logout'>
                                <button>Logout</button>
                            </a>
                        </div>
                    ) : (
                        <div>
                            <p>Please log in</p>
                            <Link to='/'>
                                <button>Login</button>
                            </Link>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, { getData })(Private)