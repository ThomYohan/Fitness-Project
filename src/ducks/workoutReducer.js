import axios from 'axios'

const initialState = {
    loading: false,
    workoutG: {
        calBurned: '',
        workouts: '',
        minutes: ''
    },
    workoutA: {
        calBurned: '',
        workouts: '',
        minutes: ''
    },
    checkIn: {
        checkWeight: '',
        checkNeck: '',
        checkWaist: '',
        checkHips: ''
    }
}

const REQUEST_WORKOUT_GOALS = 'REQUEST_WORKOUT_GOALS'
const ADD_WORKOUT_ACHIEVEMENTS = 'ADD_WORKOUT_ACHIEVEMENTS'
const ADD_CHECK_IN = 'ADD_CHECK_IN'

export function requestWorkoutGoals() {
    let goals = axios
        .post('/api/goals')
        .then(res => {
            return res.data
        })
        return {
            type: REQUEST_WORKOUT_GOALS,
            payload: goals
        }
}

export function addWorkoutAchievements(calBurned, workouts, minutes) {
    let achievements = axios
        .post('/api/goals', {
            calBurned, workouts, minutes
        })
        .then(res => {
            return res.data
        })

        return {
            type: ADD_WORKOUT_ACHIEVEMENTS,
            payload: achievements
        }
}

export function addCheckIn(checkWeight, checkNeck, checkWaist, checkHips) {
    let check = axios
        .post('/api/check-in', {
            checkWeight, checkNeck, checkWaist, checkHips
        })
        .then(res => {
            return res.data
        })

        return {
            type: ADD_CHECK_IN,
            payload: check
        }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_WORKOUT_GOALS + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_WORKOUT_GOALS + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case ADD_WORKOUT_ACHIEVEMENTS + '_PENDING':
            return { ...state, loading: true }
        case ADD_WORKOUT_ACHIEVEMENTS + '_FULFILLED':
            return { ...state, workoutA: initialState.workoutA, loading: false }
        case ADD_CHECK_IN + '_PENDING':
            return { ...state, loading: true }
        case ADD_CHECK_IN + '_FULFILLED':
            return { ...state, checkIn: initialState.checkIn, loading: false }
        default: 
            return state
    }
}