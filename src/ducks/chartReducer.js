import axios from 'axios'

const initialState = {
    loading: false,
    week: []
}



const REQUEST_WEEK_ACH = 'REQUEST_WEEK_ACH'




export function requestWeekAch() {
    let dates = axios
        .get('/api/reports')
        .then(res => {
            return res.data
        })
        console.log(dates)
        return {
            type: REQUEST_WEEK_ACH,
            payload: dates
        }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_WEEK_ACH + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_WEEK_ACH + '_FULFILLED':
            return { ...state, week: action.payload.week, loading: false }
        default:
            return state
    }
}