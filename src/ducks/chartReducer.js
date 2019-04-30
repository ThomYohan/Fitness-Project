import axios from 'axios'

const initialState = {
    loading: false,
    week: [],
    goal: []
}



const REQUEST_WEEK_ACH = 'REQUEST_WEEK_ACH'
const REQUEST_WEEK_GOALS = 'REQUEST_WEEK_GOALS'



export function requestWeekAch() {
    let dates = axios
        .get('/api/reports')
        .then(res => {
            return res.data
        })
        return {
            type: REQUEST_WEEK_ACH,
            payload: dates
        }
}

export function requestWeekGoals() {
    let goals = axios
        .get('/api/goals')
        .then(res => {
            return res.data
        })
        return {
            type: REQUEST_WEEK_GOALS,
            payload: goals
        }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_WEEK_ACH + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_WEEK_ACH + '_FULFILLED':
            return { ...state, week: action.payload.week, loading: false }
        case REQUEST_WEEK_GOALS + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_WEEK_GOALS + '_FULFILLED':
            return { ...state, goal: action.payload.goal, loading: false }
        default:
            return state
    }
}